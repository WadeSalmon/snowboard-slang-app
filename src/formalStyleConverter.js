// Dictionary mapping regular English to formal/Victorian style
export const formalStyleDictionary = {
  // Greetings & Common Phrases
  'hello': 'Good day',
  'hi': 'Good day',
  'hey': 'Good day',
  'goodbye': 'Farewell',
  'bye': 'Farewell',
  'see you': 'Until we meet again',
  'later': 'At a later time',
  'thanks': 'I extend my gratitude',
  'thank you': 'I extend my most sincere gratitude',
  'cool': 'Most agreeable',
  'awesome': 'Exceedingly splendid',
  'great': 'Most excellent',
  'amazing': 'Truly remarkable',
  'incredible': 'Utterly extraordinary',
  'fantastic': 'Exceedingly marvelous',
  'excellent': 'Most commendable',
  'wonderful': 'Exceedingly delightful',
  
  // Snowboard Terms
  'snowboard': 'snow conveyance apparatus',
  'snowboarding': 'the act of traversing snow-covered terrain',
  'snowboarder': 'one who engages in snow traversal',
  'snow': 'precipitation in crystalline form',
  'powder': 'freshly fallen crystalline precipitation',
  'fresh powder': 'recently deposited crystalline matter',
  'mountain': 'elevated landform',
  'slope': 'inclined surface',
  'ski lift': 'mechanical conveyance apparatus',
  'lift': 'mechanical conveyance',
  'gondola': 'enclosed conveyance cabin',
  'terrain park': 'designated area for athletic maneuvers',
  'halfpipe': 'curved structure for athletic performance',
  'rail': 'metallic structure',
  'box': 'rectangular obstacle',
  'falling': 'experiencing an unfortunate descent',
  'fall': 'an unfortunate descent',
  'jump': 'propel oneself through the air',
  'trick': 'athletic maneuver',
  'landing': 'the act of returning to terra firma',
  'speed': 'velocity',
  'fast': 'rapid',
  'slow': 'leisurely',
  'easy': 'effortless',
  'difficult': 'most challenging',
  'dangerous': 'perilous',
  'icy': 'covered in frozen precipitation',
  'groomed': 'meticulously prepared',
  'backcountry': 'untamed wilderness',
  'off piste': 'beyond designated pathways',
  
  // Actions
  'go': 'proceed',
  'ride': 'traverse',
  'riding': 'traversing',
  'jumping': 'propelling oneself',
  'flying': 'soaring through the air',
  'crashing': 'experiencing an unfortunate collision',
  'resting': 'taking repose',
  'waiting': 'awaiting',
  'relaxing': 'taking one\'s ease',
  'hanging out': 'spending leisure time',
  'doing': 'performing',
  'making': 'creating',
  'getting': 'acquiring',
  'coming': 'approaching',
  'going': 'departing',
  'leaving': 'taking one\'s leave',
  'starting': 'commencing',
  'finishing': 'concluding',
  
  // Conditions
  'good': 'most agreeable',
  'bad': 'most disagreeable',
  'perfect': 'utterly flawless',
  'nice': 'most pleasant',
  'fun': 'most enjoyable',
  'scary': 'most alarming',
  'terrible': 'most dreadful',
  'horrible': 'utterly abominable',
  'sweet': 'most delightful',
  'dope': 'most excellent',
  'fire': 'exceedingly splendid',
  'lit': 'most vibrant',
  'chill': 'most tranquil',
  'relaxed': 'at ease',
  'intense': 'most fervent',
  'extreme': 'utterly excessive',
  'wild': 'most untamed',
  'crazy': 'utterly mad',
  
  // People
  'friend': 'acquaintance',
  'buddy': 'companion',
  'person': 'individual',
  'guy': 'gentleman',
  'man': 'gentleman',
  'people': 'persons',
  'everyone': 'all present',
  'someone': 'an individual',
  'anyone': 'any person',
  'group': 'assemblage',
  'team': 'company',
  
  // Expressions
  'yes': 'Indeed',
  'no': 'Most certainly not',
  'okay': 'Very well',
  'ok': 'Very well',
  'sure': 'Most assuredly',
  'definitely': 'Without question',
  'absolutely': 'Most certainly',
  'maybe': 'Perhaps',
  'probably': 'In all likelihood',
  'alright': 'Very well',
  'all right': 'Very well',
  'sounds good': 'That is most agreeable',
  'let\'s go': 'Shall we proceed',
  'let us go': 'Shall we proceed',
  
  // Weather & Conditions
  'sunny': 'bathed in sunlight',
  'snowing': 'precipitation is occurring',
  'cold': 'most frigid',
  'warm': 'pleasantly temperate',
  'windy': 'most blustery',
  'storm': 'tempest',
  'blizzard': 'severe winter tempest',
  'visibility': 'clarity of vision',
  'clear': 'unobstructed',
  
  // Time & Frequency
  'today': 'this very day',
  'tomorrow': 'on the morrow',
  'yesterday': 'on the previous day',
  'now': 'at this moment',
  'later': 'at a subsequent time',
  'soon': 'in due course',
  'always': 'perpetually',
  'never': 'under no circumstances',
  'sometimes': 'on occasion',
  'often': 'frequently',
  
  // Common Phrases
  'what\'s up': 'What is the matter',
  'how are you': 'How do you fare',
  'how\'s it going': 'How do matters proceed',
  'see you later': 'Until we meet again',
  'talk to you later': 'I shall converse with you at a later time',
  'have fun': 'May you enjoy yourself',
  'good luck': 'I wish you the best of fortune',
  'be careful': 'Exercise the utmost caution',
  'take care': 'Take the utmost care',
  
  // Additional expressions
  'what': 'pray tell',
  'where': 'whither',
  'when': 'at what time',
  'why': 'for what reason',
  'how': 'in what manner',
  'really': 'truly',
  'seriously': 'in earnest',
  'for real': 'in truth',
  'that\'s crazy': 'That is most extraordinary',
  'that\'s awesome': 'That is exceedingly splendid',
  'that\'s cool': 'That is most agreeable',
  'no way': 'Most certainly not',
  'way': 'Indeed',
  'totally': 'Completely',
  'huge': 'most substantial',
  'big': 'considerable',
  'small': 'diminutive',
  'little': 'petite',
  'massive': 'immense',
  'tiny': 'minute',
  'best': 'most superior',
  'worst': 'most inferior',
  'better': 'more favorable',
  'worse': 'less favorable',
  'best ever': 'the most superior to have existed',
  'worst ever': 'the most inferior to have existed',
};

// Function to convert regular English to formal/Victorian style
export function convertToFormalStyle(text) {
  if (!text) return '';
  
  let result = text.toLowerCase();
  
  // First, handle multi-word phrases (longer phrases first to avoid partial matches)
  const phrases = Object.keys(formalStyleDictionary)
    .filter(key => key.includes(' '))
    .sort((a, b) => b.length - a.length);
  
  for (const phrase of phrases) {
    const regex = new RegExp(`\\b${phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    result = result.replace(regex, formalStyleDictionary[phrase]);
  }
  
  // Then handle single words
  const words = result.split(/\s+/);
  const converted = words.map((word, index) => {
    // Remove punctuation for matching
    const cleanWord = word.replace(/[.,!?;:]/g, '');
    const punctuation = word.replace(/[^.,!?;:]/g, '');
    
    // Check if this word is in the formal dictionary
    if (formalStyleDictionary[cleanWord]) {
      let formalTerm = formalStyleDictionary[cleanWord];
      
      // Capitalize first letter if it's the first word of the sentence or after punctuation
      if (index === 0 || (index > 0 && words[index - 1].match(/[.!?]$/))) {
        formalTerm = formalTerm.charAt(0).toUpperCase() + formalTerm.slice(1);
      }
      
      return formalTerm + punctuation;
    }
    
    // Return original word if no match
    return word;
  });
  
  return converted.join(' ');
}

