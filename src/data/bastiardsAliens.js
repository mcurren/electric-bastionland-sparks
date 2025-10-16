// Roll d20 on Prefix and Suffix tables below.
export const bastiardAliensSparks = [
  // Prefix (d20)
  [
    'Words',
    'Voids',
    'Pleasures',
    'Bloods',
    'Mercys',
    'Goldens',
    'Fleshs',
    'Wars',
    'Lights',
    'Rages',
    'Smokes',
    'Horneds',
    'Royals',
    'Knifes',
    'Divines',
    'Perfects',
    'Ices',
    'Immortals',
    'Diamonds',
    'Imitations',
  ],
  // Suffix (d20)
  [
    'Saints',
    'Pilgrims',
    'Workers',
    'Locusts',
    'Beasts',
    'Imps',
    'Vessels',
    'Ghosts',
    'Hounds',
    'Beacons',
    'Serpents',
    'Titans',
    'Forgers',
    'Guardians',
    'Engineers',
    'Breakers',
    'Spiders',
    'Thieves',
    'Tyrants',
    'Eyes',
  ],
]

// Roll a d3 to get a template and season the results.
export const bastiardAliensTemplates = [
  {
    title: 'Soft Alien',
    description: '5HP, bio-armour (Armour 1), bio-pistol (d6).',
    details: [
      'Devour as many different foods as possible.',
      'Touch as many things as possible.',
      'Utilise a disgusting biological defence technique.',
    ],
  },
  {
    title: 'Hard Alien',
    description: 'STR 15, 10HP, powered Armour (Armour 2), heat-gun (d8) or trample (d6 Blast).',
    details: [
      'Show a human side.',
      'Beckon humans to travel to their homeland.',
      'Translate for other Aliens.',
    ],
  },
  {
    title: 'Glorious Alien',
    description: 'CHA 18, 16HP, golden body (Armour 2), glowing sword (d10 or d8 Blast).',
    details: [
      'Tend to worshippers.',
      'Enforce a rule from their home.',
      'Unleash their inner weapon.',
    ],
  },
]
