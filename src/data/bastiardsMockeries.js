// Roll d20 on Type and Talent tables below.
export const bastiardMockeriesSparks = [
  // Type (d20)
  [
    'Otter',
    'Lobster',
    'Heron',
    'Toad',
    'Rhino',
    'Mole',
    'Goat',
    'Spider',
    'Crow',
    'Mallard',
    'Dolphin',
    'Crocodile',
    'Hog',
    'Bear',
    'Rooster',
    'Whale',
    'Mammoth',
    'Bunny',
    'Oyster',
    'Anaconda',
  ],
  // Talent (d20)
  [
    'Forensics',
    'Cooking',
    'Sprinting',
    'Eating',
    'Seduction',
    'Puzzles',
    'Burglary',
    'Performance',
    'Bureaucracy',
    'Vision',
    'Memory',
    'Law',
    'Academia',
    'Strategy',
    'Spying',
    'Interrogation',
    'Trivia',
    'Engineering',
    'Sculpture',
    'Grooming',
  ],
]

// Roll a d3 to get a template and season the results.
export const bastiardMockeriesTemplates = [
  {
    title: 'Mock Rodent',
    description: 'DEX 18, 4HP, bite (d4).',
    details: [
      'Act unassuming.',
      'Act unassuming.',
      'Spend more time on things they’re awful at than their talent.',
    ],
  },
  {
    title: 'Mock Beast',
    description: 'STR 15, 7HP, gore (d8).',
    details: [
      'Switch between human and animal behaviour.',
      'Switch between terrifying and pathetic.',
      'Play dumb.',
    ],
  },
  {
    title: 'Mock Colossus',
    description: 'STR 18, 15HP, huge body (Armour 2), trample (d10 Blast).',
    details: [
      'Show a gentle side.',
      'Try to stay out of the way.',
      'Long for some non-violent attention.',
    ],
  },
]
