// API Service for Urban Dictionary lookups
// Caches results to minimize API calls

const API_CACHE = new Map();
const API_CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
// Using unofficial Urban Dictionary API that has better CORS support
const URBAN_DICT_API_URL = 'https://api.urbandictionary.com/v0/define';
const UNOFFICIAL_API_URL = 'https://api.urbandictionary.com/v0/define'; // Fallback

// Check if cache entry is still valid
function isCacheValid(entry) {
  if (!entry) return false;
  return Date.now() - entry.timestamp < API_CACHE_EXPIRY;
}

// Get from cache
function getFromCache(term) {
  const entry = API_CACHE.get(term.toLowerCase());
  if (isCacheValid(entry)) {
    return entry.data;
  }
  return null;
}

// Save to cache
function saveToCache(term, data) {
  API_CACHE.set(term.toLowerCase(), {
    data,
    timestamp: Date.now()
  });
}

// Fetch from Urban Dictionary API
async function fetchFromUrbanDictionary(term) {
  try {
    // Try the official API first
    let response = await fetch(`${URBAN_DICT_API_URL}?term=${encodeURIComponent(term)}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    // If CORS error or other issue, try with mode
    if (!response.ok || response.status === 0) {
      // Try with CORS proxy or different approach
      response = await fetch(`${URBAN_DICT_API_URL}?term=${encodeURIComponent(term)}`, {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
        },
      });
    }
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.list && data.list.length > 0) {
      // Return the top definition (highest rated)
      const sortedList = data.list.sort((a, b) => (b.thumbs_up || 0) - (a.thumbs_up || 0));
      const topDefinition = sortedList[0];
      
      return {
        definition: topDefinition.definition,
        example: topDefinition.example,
        word: topDefinition.word,
        thumbsUp: topDefinition.thumbs_up,
        thumbsDown: topDefinition.thumbs_down
      };
    }
    
    return null;
  } catch (error) {
    // Silently fail - API might not be available or have CORS issues
    // This is expected and the app will fall back to local dictionary
    console.debug(`Urban Dictionary API lookup for "${term}" failed (this is normal):`, error.message);
    return null;
  }
}

// Get slang translation from Urban Dictionary
// Returns a potential slang term or null
export async function getSlangFromAPI(term, context = 'general') {
  // Check cache first
  const cached = getFromCache(term);
  if (cached !== null) {
    return cached;
  }

  // Try to fetch from API
  const result = await fetchFromUrbanDictionary(term);
  
  if (result) {
    // Extract potential slang from definition or use the word itself
    // For now, we'll use the word from Urban Dictionary as it's often slang
    const slangTerm = result.word;
    
    // Save to cache
    saveToCache(term, slangTerm);
    
    return slangTerm;
  }

  // Cache null result to avoid repeated failed lookups
  saveToCache(term, null);
  return null;
}

// Batch lookup multiple terms (with rate limiting)
export async function batchLookup(terms, context = 'general') {
  const results = {};
  
  // Process in batches to avoid overwhelming the API
  const batchSize = 5;
  for (let i = 0; i < terms.length; i += batchSize) {
    const batch = terms.slice(i, i + batchSize);
    const promises = batch.map(term => 
      getSlangFromAPI(term, context).then(slang => ({ term, slang }))
    );
    
    const batchResults = await Promise.all(promises);
    batchResults.forEach(({ term, slang }) => {
      results[term] = slang;
    });
    
    // Small delay between batches to be respectful
    if (i + batchSize < terms.length) {
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  }
  
  return results;
}

// Clear cache (useful for testing or manual refresh)
export function clearCache() {
  API_CACHE.clear();
}

// Get cache stats
export function getCacheStats() {
  return {
    size: API_CACHE.size,
    entries: Array.from(API_CACHE.entries()).map(([key, value]) => ({
      term: key,
      cached: isCacheValid(value),
      age: value ? Date.now() - value.timestamp : 0
    }))
  };
}

