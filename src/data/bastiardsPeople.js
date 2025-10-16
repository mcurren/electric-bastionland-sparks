// Roll d20 on Manner and Drive tables below.
export const bastiardPeopleSparks = [
  // Manner (d20)
  [
    'Blunt',
    'Detailed',
    'Silky Smooth',
    'Rambling',
    'Monotone',
    'Breathy Wisp',
    'Timid',
    'Booming',
    'Sheltered',
    'Stuttering',
    'Insincere',
    'Dramatic',
    'Intense',
    'Cynical',
    'Faint',
    'Gentle',
    'Drawling',
    'Crude',
    'Slow',
    'Contrary',
  ],
  // Drive (d20)
  [
    'Base Pleasures',
    'Safety',
    'Domination',
    'Truth',
    'Service',
    'Astral Enlightenment',
    'Peace and Quiet',
    'Petty Revenge',
    'Justice',
    'Legacy',
    'Wealth',
    'Envy',
    'Approval',
    'Charity',
    'Entertainment',
    'Power and Influence',
    'Freedom',
    'Creativity',
    'Modernity',
    'Laziness',
  ],
]

// Roll a d3 to get a template and season the results.
export const bastiardPeopleTemplates = [
  {
    title: 'Street-Smart Civilian',
    description: '3HP, chewing gum, hidden weapon (d6).',
    details: [
      'Look for the latest gossip.',
      'Obsess over something unrelated to their profession.',
      'Pull their weapon if needed, but lack any sort of fighting conviction.',
    ],
  },
  {
    title: 'Muscle for Hire',
    description: '6HP, heavy club (d8, Bulky).',
    details: [
      'Do pretty much anything while acting tough.',
      'Risk their lives only if they’re sure to get paid.',
      'Turn on you if they can get away with it.',
    ],
  },
  {
    title: 'Frontline Leader',
    description: 'CHA 15, 9HP, pistol (d6), body armour (Armour 1).',
    details: [
      'Find a way to avoid danger, while keeping up appearances.',
      'Talk themselves up.',
      'Convince you to go ahead of them.',
    ],
  },
]
