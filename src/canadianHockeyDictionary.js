// Helper function to get random item from array or return single value
function getRandomTranslation(value) {
  if (Array.isArray(value)) {
    return value[Math.floor(Math.random() * value.length)];
  }
  return value;
}

// Dictionary mapping basic terms to Canadian and Hockey slang
// Values can be strings or arrays (for randomized selection)
export const canadianHockeyDictionary = {
  // Greetings & Common Phrases
  'hello': ['Hey', 'How\'s it going', 'How are ya'],
  'hi': ['Hey', 'How\'s it going', 'How are ya'],
  'hey': ['Hey', 'How\'s it going', 'How are ya'],
  'goodbye': ['See ya', 'Take care', 'Later'],
  'bye': ['See ya', 'Take care', 'Later'],
  'see you': ['See ya', 'Take care', 'Later'],
  'later': 'Later',
  'thanks': ['Thanks', 'Thank you', 'Appreciate it'],
  'thank you': ['Thanks', 'Thank you', 'Appreciate it'],
  'cool': ['Cool', 'Nice', 'Right on'],
  'awesome': ['Awesome', 'Beauty', 'Beautician'],
  'great': ['Great', 'Beauty', 'Awesome'],
  'amazing': ['Amazing', 'Beauty', 'Unreal'],
  'incredible': ['Incredible', 'Unreal', 'Beauty'],
  'fantastic': ['Fantastic', 'Beauty', 'Awesome'],
  'excellent': ['Excellent', 'Beauty', 'Awesome'],
  'wonderful': ['Wonderful', 'Beauty', 'Awesome'],
  
  // Canadian Slang
  'friend': ['bud', 'champ', 'pal'],
  'buddy': ['Buddy', 'Pal', 'Bud'],
  'person': ['Person', 'Guy', 'Fella'],
  'guy': ['Guy', 'Fella', 'Buddy'],
  'man': ['Guy', 'Fella', 'Buddy'],
  'people': ['People', 'Folks', 'Guys'],
  'everyone': 'Everyone',
  'someone': 'Someone',
  'anyone': 'Anyone',
  'group': ['Group', 'Bunch', 'Crew'],
  'team': ['Team', 'Squad', 'Crew'],
  'canadian': ['Canuck', 'Canadian', 'Hoser'],
  'dollar': ['Loonie', 'Dollar', 'Buck'],
  'two dollars': ['Toonie', 'Two dollars', 'Two bucks'],
  'money': ['Money', 'Bucks', 'Loonies'],
  'coffee': ['Coffee', 'Java', 'Tim\'s'],
  'tim hortons': ['Tim\'s', 'Timmy\'s', 'Timmies'],
  'tim hortons coffee': ['Tim\'s', 'Timmy\'s', 'Timmies'],
  'double double': ['Double-double', 'Double double'],
  'hat': ['Toque', 'Hat', 'Cap'],
  'winter hat': ['Toque', 'Winter hat', 'Beanie'],
  'beer': ['Beer', 'Brew', 'Cold one'],
  'case of beer': ['Two-four', 'Case', '24 pack'],
  'twenty four beers': ['Two-four', 'Case', '24 pack'],
  'bathroom': ['Washroom', 'Bathroom', 'Loo'],
  'restroom': ['Washroom', 'Restroom', 'Loo'],
  'washroom': 'Washroom',
  'sweatshirt': ['Bunny hug', 'Sweatshirt', 'Hoodie'],
  'give it your all': ['Give\'r', 'Give it your all', 'Go for it'],
  'go for it': ['Give\'r', 'Go for it', 'Do it'],
  
  // Hockey Terms
  'hockey': ['Hockey', 'Puck', 'Game'],
  'puck': ['Biscuit', 'Puck', 'Disk'],
  'goal': ['Gino', 'Lamp', 'Twine', 'Goal'],
  'score': ['Score', 'Gino', 'Goal'],
  'scored': ['Scored', 'Lit the lamp', 'Found twine'],
  'assist': ['Apple', 'Assist', 'Helper'],
  'celebration': ['Celly', 'Celebration', 'Party'],
  'celebrate': ['Celly', 'Celebrate', 'Party'],
  'high scoring game': ['Barnburner', 'High scoring game', 'Shootout'],
  'player': ['Player', 'Skater', 'Guy'],
  'goalie': ['Tender', 'Goalie', 'Netminder'],
  'goalkeeper': ['Tender', 'Goalie', 'Netminder'],
  'goaltender': ['Tender', 'Goalie', 'Netminder'],
  'skating': ['Skating', 'Gliding', 'Moving'],
  'skate': ['Skate', 'Glide', 'Move'],
  'bent ankles': ['Bender', 'Bent ankles', 'Weak ankles'],
  'trash talk': ['Chirp', 'Trash talk', 'Talk'],
  'talk trash': ['Chirp', 'Talk trash', 'Chirp at'],
  'deke': ['Dangle', 'Deke', 'Move'],
  'move': ['Dangle', 'Move', 'Deke'],
  'three goals': ['Hat trick', 'Three goals', 'Triple'],
  'hat trick': ['Hat trick', 'Three goals', 'Triple'],
  'goal assist fight': ['Gordie Howe hat trick', 'Gordie Howe', 'Full house'],
  'fight': ['Fight', 'Scrap', 'Tussle'],
  'fighting': ['Fighting', 'Scrapping', 'Tussling'],
  'penalty': ['Penalty', 'Sin bin', 'Box'],
  'penalty box': ['Sin bin', 'Penalty box', 'Box'],
  'ice': ['Ice', 'Sheet', 'Rink'],
  'rink': ['Rink', 'Arena', 'Barn'],
  'arena': ['Arena', 'Barn', 'Rink'],
  'hockey stick': ['Stick', 'Lumber', 'Twig'],
  'stick': ['Stick', 'Lumber', 'Twig'],
  'hockey game': ['Game', 'Match', 'Battle'],
  'game': ['Game', 'Match', 'Battle'],
  'win': ['Win', 'W', 'Victory'],
  'won': ['Won', 'Got the W', 'Victory'],
  'lose': ['Lose', 'Take the L', 'Loss'],
  'lost': ['Lost', 'Took the L', 'Loss'],
  'shot': ['Shot', 'Rip', 'Wrister'],
  'shoot': ['Shoot', 'Rip', 'Fire'],
  'save': ['Save', 'Stop', 'Robbery'],
  'saved': ['Saved', 'Stopped', 'Robbed'],
  'breakaway': ['Breakaway', 'Break', 'Rush'],
  'power play': ['Power play', 'PP', 'Man advantage'],
  'powerplay': ['Power play', 'PP', 'Man advantage'],
  'penalty kill': ['PK', 'Penalty kill', 'Short handed'],
  'penaltykill': ['PK', 'Penalty kill', 'Short handed'],
  'overtime': ['OT', 'Overtime', 'Extra time'],
  'shootout': ['Shootout', 'Skills competition', 'SO'],
  
  // Actions
  'go': ['Go', 'Let\'s go', 'Give\'r'],
  'ride': ['Ride', 'Go', 'Drive'],
  'riding': ['Riding', 'Going', 'Driving'],
  'jumping': ['Jumping', 'Leaping', 'Hopping'],
  'flying': ['Flying', 'Moving fast', 'Zooming'],
  'crashing': ['Crashing', 'Wiping out', 'Going down'],
  'resting': ['Resting', 'Taking a break', 'Chilling'],
  'waiting': ['Waiting', 'Hanging', 'Chilling'],
  'relaxing': ['Relaxing', 'Chilling', 'Kicking back'],
  'hanging out': ['Hanging out', 'Chilling', 'Kicking it'],
  'doing': 'Doing',
  'making': 'Making',
  'getting': 'Getting',
  'coming': 'Coming',
  'going': 'Going',
  'leaving': ['Leaving', 'Taking off', 'Heading out'],
  'starting': 'Starting',
  'finishing': ['Finishing', 'Wrapping up', 'Done'],
  
  // Conditions
  'good': ['Good', 'Beauty', 'Nice'],
  'bad': ['Bad', 'Rough', 'Not good'],
  'perfect': ['Perfect', 'Beauty', 'Unreal'],
  'nice': ['Nice', 'Beauty', 'Good'],
  'fun': ['Fun', 'Good time', 'Beauty'],
  'scary': ['Scary', 'Intense', 'Rough'],
  'terrible': ['Terrible', 'Rough', 'Not good'],
  'horrible': ['Horrible', 'Rough', 'Not good'],
  'incredible': ['Incredible', 'Unreal', 'Beauty'],
  'unbelievable': ['Unbelievable', 'Unreal', 'Beauty'],
  'sweet': ['Sweet', 'Beauty', 'Nice'],
  'dope': ['Dope', 'Beauty', 'Nice'],
  'fire': ['Fire', 'Beauty', 'Hot'],
  'lit': ['Lit', 'Beauty', 'Hot'],
  'chill': ['Chill', 'Relaxed', 'Easy'],
  'relaxed': ['Relaxed', 'Chill', 'Easy'],
  'intense': ['Intense', 'Rough', 'Heavy'],
  'extreme': ['Extreme', 'Intense', 'Heavy'],
  'wild': ['Wild', 'Crazy', 'Intense'],
  'crazy': ['Crazy', 'Wild', 'Intense'],
  
  // Expressions
  'yes': ['Yeah', 'Yep', 'For sure', 'You bet'],
  'no': ['Nah', 'Nope', 'No way'],
  'okay': ['Okay', 'Sounds good', 'Right on'],
  'ok': ['Okay', 'Sounds good', 'Right on'],
  'sure': ['For sure', 'Sure', 'You bet'],
  'definitely': ['For sure', 'Definitely', 'You bet'],
  'absolutely': ['Absolutely', 'For sure', 'You bet'],
  'maybe': 'Maybe',
  'probably': 'Probably',
  'alright': ['Alright', 'Sounds good', 'Right on'],
  'all right': ['Alright', 'Sounds good', 'Right on'],
  'sounds good': ['Sounds good', 'Right on', 'For sure'],
  'let\'s go': ['Let\'s go', 'Give\'r', 'Time to go'],
  'let us go': ['Let\'s go', 'Give\'r', 'Time to go'],
  'eh': ['Eh', 'Right', 'You know'],
  
  // Weather & Conditions
  'sunny': 'Sunny',
  'snowing': ['Snowing', 'Dumping', 'Coming down'],
  'cold': 'Cold',
  'warm': 'Warm',
  'windy': 'Windy',
  'storm': 'Storm',
  'blizzard': 'Blizzard',
  'visibility': 'Visibility',
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
  'what\'s up': ['What\'s up', 'How\'s it going', 'What\'s going on'],
  'how are you': ['How are you', 'How\'s it going', 'How are ya'],
  'how\'s it going': ['How\'s it going', 'How are you', 'What\'s up'],
  'see you later': ['See ya later', 'Later', 'Take care'],
  'talk to you later': ['Talk to you later', 'Later', 'Take care'],
  'have fun': ['Have fun', 'Enjoy', 'Have a good one'],
  'good luck': ['Good luck', 'Break a leg', 'Have fun'],
  'be careful': ['Be careful', 'Stay safe', 'Take care'],
  'take care': ['Take care', 'Stay safe', 'See ya'],
  
  // More Canadian/Hockey Phrases
  'that\'s crazy': ['That\'s crazy', 'That\'s unreal', 'That\'s wild'],
  'that\'s awesome': ['That\'s awesome', 'That\'s a beauty', 'That\'s unreal'],
  'that\'s cool': ['That\'s cool', 'That\'s nice', 'That\'s a beauty'],
  'no way': ['No way', 'Get out', 'For real?'],
  'way': ['Way', 'Totally', 'For sure'],
  'totally': ['Totally', 'For sure', 'You bet'],
  'really': ['Really', 'For real', 'Seriously'],
  'seriously': ['Seriously', 'For real', 'Really'],
  'for real': ['For real', 'Seriously', 'Really'],
  'huge': ['Huge', 'Massive', 'Big'],
  'big': ['Big', 'Huge', 'Massive'],
  'small': 'Small',
  'little': 'Little',
  'massive': ['Massive', 'Huge', 'Big'],
  'tiny': 'Tiny',
  'best': ['Best', 'Beauty', 'Top'],
  'worst': ['Worst', 'Rough', 'Bottom'],
  'better': 'Better',
  'worse': 'Worse',
  'best ever': ['Best ever', 'Beauty', 'Unreal'],
  'worst ever': ['Worst ever', 'Rough', 'Terrible'],
};

// Function to convert text to Canadian/Hockey slang
export function convertToCanadianHockeySlang(text) {
  if (!text) return '';
  
  let result = text.toLowerCase();
  
  // First, handle multi-word phrases (longer phrases first to avoid partial matches)
  const phrases = Object.keys(canadianHockeyDictionary)
    .filter(key => key.includes(' '))
    .sort((a, b) => b.length - a.length); // Sort by length descending
  
  for (const phrase of phrases) {
    // Use word boundaries to match whole phrases only
    const regex = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    result = result.replace(regex, () => getRandomTranslation(canadianHockeyDictionary[phrase]));
  }
  
  // Then handle single words
  const words = result.split(/\s+/);
  const converted = words.map(word => {
    // Remove punctuation for matching
    const cleanWord = word.replace(/[.,!?;:]/g, '');
    const punctuation = word.replace(/[^.,!?;:]/g, '');
    
    // Check if this word is a dictionary key (meaning it hasn't been converted yet)
    // If it's already slang, it won't be in the dictionary keys
    if (canadianHockeyDictionary[cleanWord]) {
      return getRandomTranslation(canadianHockeyDictionary[cleanWord]) + punctuation;
    }
    
    // Return original word if no match
    return word;
  });
  
  let finalResult = converted.join(' ');
  
  // Add random Canadian term before question marks and periods (Canadian style)
  // Options: bud, pal, sport, champ, boss
  const canadianTerms = ['bud', 'pal', 'sport', 'champ', 'boss'];
  const getRandomCanadianTerm = () => canadianTerms[Math.floor(Math.random() * canadianTerms.length)];
  
  // Replace "?" with " [random term]?" to add term before the question mark
  finalResult = finalResult.replace(/\?/g, () => ` ${getRandomCanadianTerm()}?`);
  
  // Replace "." with " [random term]." to add term before the period
  // Match periods that are followed by space or end of string (sentence endings)
  // Avoid periods in abbreviations (like "Mr." or "Dr.") by checking for word boundaries
  finalResult = finalResult.replace(/\.(\s|$)/g, (match, space) => {
    // Only add if it's a sentence-ending period (not an abbreviation)
    // Check if there's a space or it's the end of the string
    return ` ${getRandomCanadianTerm()}.${space}`;
  });
  
  return finalResult;
}

// Build reverse dictionary: slang term -> regular English
function buildReverseDictionary() {
  const reverseDict = {};
  
  for (const [regularTerm, slangTerms] of Object.entries(canadianHockeyDictionary)) {
    const slangArray = Array.isArray(slangTerms) ? slangTerms : [slangTerms];
    
    for (const slangTerm of slangArray) {
      const lowerSlang = slangTerm.toLowerCase();
      // If multiple regular terms map to the same slang, use the first one encountered
      if (!reverseDict[lowerSlang]) {
        reverseDict[lowerSlang] = regularTerm;
      }
    }
  }
  
  return reverseDict;
}

// Reverse dictionary for converting slang back to regular English
const reverseCanadianHockeyDictionary = buildReverseDictionary();

// Function to convert Canadian/Hockey slang back to regular English
export function convertFromCanadianHockeySlang(text) {
  if (!text) return '';
  
  let result = text.toLowerCase();
  
  // First, handle multi-word phrases in reverse (longer phrases first)
  const reversePhrases = Object.keys(reverseCanadianHockeyDictionary)
    .filter(key => key.includes(' '))
    .sort((a, b) => b.length - a.length);
  
  for (const slangPhrase of reversePhrases) {
    const regex = new RegExp(`\\b${slangPhrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    result = result.replace(regex, reverseCanadianHockeyDictionary[slangPhrase]);
  }
  
  // Then handle single words
  const words = result.split(/\s+/);
  const converted = words.map(word => {
    // Remove punctuation for matching (but also remove Canadian terms like "bud", "pal", etc. before punctuation)
    const cleanWord = word.replace(/[.,!?;:]/g, '');
    const punctuation = word.replace(/[^.,!?;:]/g, '');
    
    // Check if this word is in the reverse dictionary
    if (reverseCanadianHockeyDictionary[cleanWord]) {
      const regularTerm = reverseCanadianHockeyDictionary[cleanWord];
      return regularTerm + punctuation;
    }
    
    // Return original word if no match
    return word;
  });
  
  let finalResult = converted.join(' ');
  
  // Remove Canadian terms that were added before punctuation marks (bud, pal, champ, etc.)
  // These are patterns like "word bud." or "word pal?"
  const canadianTerms = ['bud', 'pal', 'sport', 'champ', 'boss'];
  for (const term of canadianTerms) {
    const regex = new RegExp(`\\s+${term}([.,!?;:])`, 'gi');
    finalResult = finalResult.replace(regex, '$1');
  }
  
  return finalResult;
}

