export interface Character {
  slug: string;
  name: string;
  subtitle: string;
  imageUrl: string;
}

export const characters: Character[] = [
  { slug: "luke", name: "Luke", subtitle: "The Protagonist", imageUrl: "/characters/luke.svg" },
  { slug: "ryu", name: "Ryu", subtitle: "Eternal Wanderer", imageUrl: "/characters/ryu.svg" },
  { slug: "chun-li", name: "Chun-Li", subtitle: "The Strongest Woman in the World", imageUrl: "/characters/chun-li.jpg" },
  { slug: "jamie", name: "Jamie", subtitle: "The Siu Bak Fu", imageUrl: "/characters/jamie.svg" },
  { slug: "guile", name: "Guile", subtitle: "The Air Force Hero", imageUrl: "/characters/guile.svg" },
  { slug: "kimberly", name: "Kimberly", subtitle: "The Urban Ninja", imageUrl: "/characters/kimberly.svg" },
  { slug: "juri", name: "Juri", subtitle: "The Sadistic Thrill-Seeker", imageUrl: "/characters/juri.svg" },
  { slug: "ken", name: "Ken", subtitle: "The Fire-Breathing Fist", imageUrl: "/characters/ken.svg" },
  { slug: "blanka", name: "Blanka", subtitle: "The Beast of Brazil", imageUrl: "/characters/blanka.svg" },
  { slug: "dhalsim", name: "Dhalsim", subtitle: "The Yoga Master", imageUrl: "/characters/dhalsim.svg" },
  { slug: "e-honda", name: "E.Honda", subtitle: "The Sumo Tormentor", imageUrl: "/characters/e-honda.svg" },
  { slug: "dee-jay", name: "Dee Jay", subtitle: "The Kickboxing Musician", imageUrl: "/characters/dee-jay.svg" },
  { slug: "manon", name: "Manon", subtitle: "The Ballet Fighter", imageUrl: "/characters/manon.svg" },
  { slug: "marisa", name: "Marisa", subtitle: "The Gladiator", imageUrl: "/characters/marisa.svg" },
  { slug: "jp", name: "JP", subtitle: "The Puppet Master", imageUrl: "/characters/jp.svg" },
  { slug: "zangief", name: "Zangief", subtitle: "The Red Cyclone", imageUrl: "/characters/zangief.svg" },
  { slug: "lily", name: "Lily", subtitle: "The Wind Caller", imageUrl: "/characters/lily.svg" },
  { slug: "cammy", name: "Cammy", subtitle: "The Killer Bee", imageUrl: "/characters/cammy.svg" },
  { slug: "rashid", name: "Rashid", subtitle: "The Turbulent Wind", imageUrl: "" },
  { slug: "a-k-i", name: "A.K.I.", subtitle: "The Poisonous Assassin", imageUrl: "" },
  { slug: "ed", name: "Ed", subtitle: "The Phantom Striker", imageUrl: "" },
  { slug: "akuma", name: "Akuma", subtitle: "The Supreme Master of the Fist", imageUrl: "" },
  { slug: "m-bison", name: "M. Bison", subtitle: "The Dictator", imageUrl: "" },
  { slug: "terry", name: "Terry", subtitle: "The Legendary Wolf", imageUrl: "" },
  { slug: "mai", name: "Mai", subtitle: "The Alluring Ninja", imageUrl: "" },
  { slug: "elena", name: "Elena", subtitle: "The Capoeira Princess", imageUrl: "" },
  { slug: "volcano-handshake", name: "Volcano Handshake", subtitle: "The Burning Fist", imageUrl: "" },
];

export function getCharacterBySlug(slug: string): Character | undefined {
  return characters.find((c) => c.slug === slug);
}

export function getOpponents(characterSlug: string): Character[] {
  return characters.filter((c) => c.slug !== characterSlug);
}
