// Helper function to get random item from array or return single value
function getRandomTranslation(value) {
  if (Array.isArray(value)) {
    return value[Math.floor(Math.random() * value.length)];
  }
  return value;
}

// Dictionary mapping basic terms to snowboard slang
// Values can be strings or arrays (for randomized selection)
export const slangDictionary = {
  // Greetings & Common Phrases
  'hello': ['Yo', 'Hey', 'Sup'],
  'hi': ['Yo', 'Hey', 'Sup'],
  'hey': ['Yo', 'Hey', 'Sup'],
  'goodbye': ['Peace out', 'Later', 'Catch ya'],
  'bye': ['Peace', 'Later', 'Catch ya'],
  'see you': ['Peace out', 'Later', 'Catch ya'],
  'later': 'Later',
  'thanks': ['Props', 'Thanks', 'Appreciate it'],
  'thank you': ['Props', 'Thanks', 'Appreciate it'],
  'cool': ['Sick', 'Rad', 'Dope', 'Fire'],
  'awesome': ['Gnarly', 'Sick', 'Epic', 'Rad'],
  'great': ['Rad', 'Sick', 'Epic', 'Gnarly'],
  'amazing': ['Epic', 'Gnarly', 'Sick', 'Rad'],
  'incredible': ['Epic', 'Gnarly', 'Sick'],
  'fantastic': ['Rad', 'Sick', 'Epic'],
  'excellent': ['Sick', 'Rad', 'Epic'],
  'wonderful': ['Gnarly', 'Sick', 'Rad'],
  
  // Snowboard Terms
  'snowboard': ['Stick', 'Board', 'Plank'],
  'snowboarding': ['Shredding', 'Riding', 'Boarding'],
  'snowboarder': ['Shredder', 'Rider', 'Boarder'],
  'snow': ['Pow', 'Nar', 'White stuff'],
  'powder': ['Pow', 'Fresh pow', 'Nar'],
  'fresh powder': ['Fresh pow', 'Pow', 'Nar'],
  'mountain': 'Mountain',
  'slope': ['Run', 'Slope', 'Line'],
  'ski lift': ['Chair', 'Lift', 'Chairlift'],
  'lift': ['Chair', 'Lift', 'Chairlift'],
  'gondola': ['Gondy', 'Gondola', 'Bubble'],
  'terrain park': ['Park', 'Terrain park', 'TP'],
  'halfpipe': ['Pipe', 'Halfpipe', 'HP'],
  'rail': 'Rail',
  'box': 'Box',
  'falling': ['Bailing', 'Eating it', 'Wiping out'],
  'fall': ['Bail', 'Eat it', 'Wipe out'],
  'jump': ['Huck', 'Send', 'Launch'],
  'trick': ['Stomp', 'Trick', 'Move'],
  'landing': ['Stomp', 'Landing', 'Touchdown'],
  'speed': ['Send it', 'Go fast', 'Charge'],
  'fast': ['Send it', 'Go fast', 'Charge'],
  'slow': ['Cruise', 'Take it easy', 'Mellow'],
  'easy': ['Mellow', 'Chill', 'Easy'],
  'difficult': ['Sketchy', 'Gnarly', 'Tough'],
  'dangerous': ['Sketchy', 'Gnarly', 'Dicey'],
  'icy': ['Icy', 'Hardpack', 'Firm'],
  'groomed': ['Groomed', 'Packed', 'Smooth'],
  'backcountry': ['Backcountry', 'BC', 'Out of bounds'],
  'off piste': ['Off piste', 'Backcountry', 'Out of bounds'],
  'ski poaching': ['Poaching', 'Ski poaching', 'Out of bounds'],
  'snowdome': ['Snowdome', 'Indoor', 'Dome'],
  'ski bunny': ['Ski bunny', 'Bunny'],
  'nar': ['Nar', 'Snow', 'Pow'],
  'snowblade': ['Snowblade', 'Blade', 'Fruit boot'],
  'fruitbooting': ['Fruitbooting', 'Blading'],
  
  // Actions
  'go': ['Send it', 'Go', 'Charge'],
  'ride': ['Shred', 'Ride', 'Board'],
  'riding': ['Shredding', 'Riding', 'Boarding'],
  'jumping': ['Hucking', 'Sending', 'Launching'],
  'flying': ['Sending', 'Flying', 'Launching'],
  'crashing': ['Bailing', 'Eating it', 'Wiping out'],
  'resting': ['Chilling', 'Resting', 'Taking a break'],
  'waiting': ['Chilling', 'Waiting', 'Hanging'],
  'relaxing': ['Chilling', 'Relaxing', 'Kicking back'],
  'hanging out': ['Chilling', 'Hanging out', 'Kicking it'],
  'doing': 'Doing',
  'making': 'Making',
  'getting': 'Getting',
  'coming': 'Coming',
  'going': 'Going',
  'leaving': ['Bouncing', 'Leaving', 'Taking off'],
  'starting': 'Starting',
  'finishing': ['Wrapping up', 'Finishing', 'Done'],
  
  // Conditions
  'good': ['Sick', 'Rad', 'Dope', 'Fire'],
  'bad': ['Sketchy', 'Gnarly', 'Dicey'],
  'perfect': ['Epic', 'Sick', 'Rad'],
  'nice': ['Sick', 'Rad', 'Dope'],
  'fun': ['Rad', 'Sick', 'Epic'],
  'scary': ['Sketchy', 'Gnarly', 'Dicey'],
  'terrible': ['Sketchy', 'Gnarly', 'Dicey'],
  'horrible': ['Sketchy', 'Gnarly', 'Dicey'],
  'incredible': ['Epic', 'Gnarly', 'Sick'],
  'unbelievable': ['Epic', 'Gnarly', 'Sick'],
  'sweet': ['Sick', 'Rad', 'Dope', 'Fire'],
  'dope': ['Sick', 'Rad', 'Dope', 'Fire'],
  'fire': ['Sick', 'Rad', 'Dope', 'Fire', 'Lit'],
  'lit': ['Sick', 'Rad', 'Dope', 'Fire', 'Lit'],
  'chill': ['Mellow', 'Chill', 'Relaxed'],
  'relaxed': ['Mellow', 'Chill', 'Relaxed'],
  'intense': ['Gnarly', 'Intense', 'Wild'],
  'extreme': ['Gnarly', 'Extreme', 'Wild'],
  'wild': ['Gnarly', 'Wild', 'Crazy'],
  'crazy': ['Gnarly', 'Wild', 'Crazy'],
  
  // People
  'friend': ['Bro', 'Dude', 'Homie', 'Buddy'],
  'buddy': ['Bro', 'Dude', 'Homie', 'Buddy'],
  'person': ['Dude', 'Bro', 'Person'],
  'guy': ['Dude', 'Bro', 'Guy'],
  'man': ['Dude', 'Bro', 'Man'],
  'people': ['Peeps', 'People', 'Crew'],
  'everyone': 'Everyone',
  'someone': 'Someone',
  'anyone': 'Anyone',
  'group': ['Crew', 'Group', 'Squad'],
  'team': ['Crew', 'Team', 'Squad'],
  
  // Expressions
  'yes': ['Yew', 'Yeah', 'Yep', 'For sure'],
  'no': ['Nah', 'Nope', 'No way'],
  'okay': ['Right on', 'Okay', 'Sounds good'],
  'ok': ['Right on', 'Okay', 'Sounds good'],
  'sure': ['For sure', 'Sure', 'Absolutely'],
  'definitely': ['For sure', 'Definitely', 'Absolutely'],
  'absolutely': ['For sure', 'Absolutely', 'Definitely'],
  'maybe': 'Maybe',
  'probably': 'Probably',
  'alright': ['Right on', 'Alright', 'Sounds good'],
  'all right': ['Right on', 'Alright', 'Sounds good'],
  'sounds good': ['Sounds good', 'Right on', 'For sure'],
  'let\'s go': ['Let\'s send it', 'Let\'s go', 'Time to shred'],
  'let us go': ['Let\'s send it', 'Let\'s go', 'Time to shred'],
  
  // Weather & Conditions
  'sunny': 'Sunny',
  'snowing': 'Dumping',
  'cold': 'Cold',
  'warm': 'Warm',
  'windy': 'Windy',
  'storm': 'Storm',
  'blizzard': 'Blizzard',
  'visibility': 'Viz',
  'clear': 'Clear',
  
  // Time & Frequency
  'today': 'Today',
  'tomorrow': 'Tomorrow',
  'yesterday': 'Yesterday',
  'now': 'Now',
  'later': 'Later',
  'soon': 'Soon',
  'always': 'Always',
  'never': 'Never',
  'sometimes': 'Sometimes',
  'often': 'Often',
  
  // Common Phrases
  'what\'s up': ['What\'s up', 'Sup', 'Yo'],
  'how are you': ['How\'s it going', 'What\'s up', 'How are you'],
  'how\'s it going': ['How\'s it going', 'What\'s up', 'How are you'],
  'see you later': ['Peace out', 'Later', 'Catch ya'],
  'talk to you later': ['Peace out', 'Later', 'Catch ya'],
  'have fun': ['Have fun', 'Shred hard', 'Send it'],
  'good luck': ['Good luck', 'Send it', 'Have fun'],
  'be careful': ['Stay safe', 'Be careful', 'Stay safe out there'],
  'take care': ['Take care', 'Stay safe', 'Peace'],
  
  // Additional Snowboard Slang from Urban Dictionary
  'powderifacus': ['Powderifacus', 'Gaper', 'Jerry'],
  'snowcabulary': ['Snowcabulary', 'Slang', 'Terms'],
  'gaper': ['Gaper', 'Jerry', 'Tourist'],
  'jerry': ['Jerry', 'Gaper', 'Tourist'],
  'groomer': ['Groomer', 'Groomed run', 'Corduroy'],
  'corduroy': ['Corduroy', 'Groomed', 'Smooth'],
  'moguls': ['Moguls', 'Bumps', 'Rough'],
  'bumps': ['Bumps', 'Moguls', 'Rough'],
  'tree run': ['Tree run', 'Glades', 'Trees'],
  'glades': ['Glades', 'Tree run', 'Trees'],
  'apres ski': ['Après ski', 'After party', 'Post shred'],
  'après ski': ['Après ski', 'After party', 'Post shred'],
  'lodge': ['Lodge', 'Base', 'Chalet'],
  'base': ['Base', 'Lodge', 'Bottom'],
  'summit': ['Summit', 'Top', 'Peak'],
  'peak': ['Peak', 'Summit', 'Top'],
  
  // More General Slang
  'what': ['What', 'Huh', 'Say what'],
  'where': 'Where',
  'when': 'When',
  'why': 'Why',
  'how': 'How',
  'really': ['Really', 'For real', 'Seriously'],
  'seriously': ['Seriously', 'For real', 'Really'],
  'for real': ['For real', 'Seriously', 'Really'],
  'that\'s crazy': ['That\'s gnarly', 'That\'s wild', 'That\'s crazy'],
  'that\'s awesome': ['That\'s sick', 'That\'s rad', 'That\'s epic'],
  'that\'s cool': ['That\'s sick', 'That\'s rad', 'That\'s dope'],
  'no way': ['No way', 'Nah', 'For real?'],
  'way': ['Way', 'Totally', 'For sure'],
  'totally': ['Totally', 'For sure', 'Absolutely'],
  'huge': ['Huge', 'Massive', 'Big'],
  'big': ['Big', 'Huge', 'Massive'],
  'small': 'Small',
  'little': 'Little',
  'massive': ['Massive', 'Huge', 'Big'],
  'tiny': 'Tiny',
  'best': ['Best', 'Sickest', 'Raddest'],
  'worst': ['Worst', 'Sketchiest', 'Gnarly'],
  'better': 'Better',
  'worse': 'Worse',
  'best ever': ['Best ever', 'Sickest', 'Epic'],
  'worst ever': ['Worst ever', 'Sketchiest', 'Gnarly'],
};

// Function to convert text to snowboard slang
export function convertToSlang(text) {
  if (!text) return '';
  
  let result = text.toLowerCase();
  
  // First, handle multi-word phrases (longer phrases first to avoid partial matches)
  const phrases = Object.keys(slangDictionary)
    .filter(key => key.includes(' '))
    .sort((a, b) => b.length - a.length); // Sort by length descending
  
  for (const phrase of phrases) {
    // Use word boundaries to match whole phrases only
    const regex = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    result = result.replace(regex, () => getRandomTranslation(slangDictionary[phrase]));
  }
  
  // Then handle single words
  const words = result.split(/\s+/);
  const converted = words.map(word => {
    // Remove punctuation for matching
    const cleanWord = word.replace(/[.,!?;:]/g, '');
    const punctuation = word.replace(/[^.,!?;:]/g, '');
    
    // Check if this word is a dictionary key (meaning it hasn't been converted yet)
    // If it's already slang, it won't be in the dictionary keys
    if (slangDictionary[cleanWord]) {
      return getRandomTranslation(slangDictionary[cleanWord]) + punctuation;
    }
    
    // Return original word if no match
    return word;
  });
  
  return converted.join(' ');
}

