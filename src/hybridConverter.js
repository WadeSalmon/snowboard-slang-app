// Hybrid converter that uses local dictionaries first, then API lookups
import { slangDictionary, convertToSlang as convertToSlangLocal } from './slangDictionary'
import { canadianHockeyDictionary, convertToCanadianHockeySlang as convertToCanadianHockeySlangLocal } from './canadianHockeyDictionary'
import { getSlangFromAPI } from './apiService'

// Helper to get random translation
function getRandomTranslation(value) {
  if (Array.isArray(value)) {
    return value[Math.floor(Math.random() * value.length)];
  }
  return value;
}

// Hybrid conversion for snowboard slang
export async function convertToSlangHybrid(text, useAPI = true) {
  if (!text) return '';
  
  // First, do local conversion (fast)
  let result = convertToSlangLocal(text);
  
  // If API is disabled, return local result
  if (!useAPI) {
    return result;
  }
  
  // Extract words that weren't converted (still original)
  const originalWords = text.toLowerCase().split(/\s+/);
  const convertedWords = result.toLowerCase().split(/\s+/);
  
  // Find words that need API lookup (words that are the same in original and converted)
  const wordsToLookup = [];
  const wordPositions = new Map();
  
  originalWords.forEach((originalWord, index) => {
    const cleanOriginal = originalWord.replace(/[.,!?;:]/g, '');
    const cleanConverted = convertedWords[index]?.replace(/[.,!?;:]/g, '') || '';
    
    // If word wasn't converted and is a valid word (not empty, not too short)
    if (cleanOriginal === cleanConverted && 
        cleanOriginal.length > 2 && 
        !slangDictionary[cleanOriginal] &&
        /^[a-z]+$/i.test(cleanOriginal)) {
      
      if (!wordPositions.has(cleanOriginal)) {
        wordsToLookup.push(cleanOriginal);
        wordPositions.set(cleanOriginal, []);
      }
      wordPositions.get(cleanOriginal).push(index);
    }
  });
  
  // If no words to lookup, return local result
  if (wordsToLookup.length === 0) {
    return result;
  }
  
  // Lookup unknown words from API
  const apiResults = {};
  for (const word of wordsToLookup) {
    const slang = await getSlangFromAPI(word, 'snowboard');
    if (slang && slang.toLowerCase() !== word.toLowerCase()) {
      apiResults[word] = slang;
    }
  }
  
  // Apply API results to the converted text
  if (Object.keys(apiResults).length > 0) {
    const resultWords = result.split(/\s+/);
    originalWords.forEach((originalWord, index) => {
      const cleanOriginal = originalWord.replace(/[.,!?;:]/g, '');
      const punctuation = originalWord.replace(/[^.,!?;:]/g, '');
      
      if (apiResults[cleanOriginal]) {
        resultWords[index] = apiResults[cleanOriginal] + punctuation;
      }
    });
    result = resultWords.join(' ');
  }
  
  return result;
}

// Hybrid conversion for Canadian/Hockey slang
export async function convertToCanadianHockeySlangHybrid(text, useAPI = true) {
  if (!text) return '';
  
  // First, do local conversion (fast)
  let result = convertToCanadianHockeySlangLocal(text);
  
  // If API is disabled, return local result
  if (!useAPI) {
    return result;
  }
  
  // Extract words that weren't converted (still original)
  const originalWords = text.toLowerCase().split(/\s+/);
  const convertedWords = result.toLowerCase().split(/\s+/);
  
  // Find words that need API lookup
  const wordsToLookup = [];
  const wordPositions = new Map();
  
  originalWords.forEach((originalWord, index) => {
    const cleanOriginal = originalWord.replace(/[.,!?;:]/g, '');
    const cleanConverted = convertedWords[index]?.replace(/[.,!?;:]/g, '') || '';
    
    // If word wasn't converted and is a valid word
    if (cleanOriginal === cleanConverted && 
        cleanOriginal.length > 2 && 
        !canadianHockeyDictionary[cleanOriginal] &&
        /^[a-z]+$/i.test(cleanOriginal)) {
      
      if (!wordPositions.has(cleanOriginal)) {
        wordsToLookup.push(cleanOriginal);
        wordPositions.set(cleanOriginal, []);
      }
      wordPositions.get(cleanOriginal).push(index);
    }
  });
  
  // If no words to lookup, return local result
  if (wordsToLookup.length === 0) {
    return result;
  }
  
  // Lookup unknown words from API
  const apiResults = {};
  for (const word of wordsToLookup) {
    const slang = await getSlangFromAPI(word, 'canadian-hockey');
    if (slang && slang.toLowerCase() !== word.toLowerCase()) {
      apiResults[word] = slang;
    }
  }
  
  // Apply API results to the converted text
  if (Object.keys(apiResults).length > 0) {
    const resultWords = result.split(/\s+/);
    originalWords.forEach((originalWord, index) => {
      const cleanOriginal = originalWord.replace(/[.,!?;:]/g, '');
      const punctuation = originalWord.replace(/[^.,!?;:]/g, '');
      
      if (apiResults[cleanOriginal]) {
        resultWords[index] = apiResults[cleanOriginal] + punctuation;
      }
    });
    result = resultWords.join(' ');
  }
  
  return result;
}

