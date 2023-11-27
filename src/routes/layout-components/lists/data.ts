export interface Character {
  name: string;
  description: string;
  movie: string;
}

export interface HorrorCharacter {
  name: string;
  description: string;
  strength: number;
}

export const characters: Character[] = [
  {
    name: "Luke Skywalker",
    description: "A Jedi Knight who battles against the Galactic Empire.",
    movie: "Star Wars",
  },
  {
    name: "Frodo Baggins",
    description:
      "A hobbit of the Shire who inherits the One Ring and must embark on a quest to destroy it.",
    movie: "The Lord of the Rings",
  },
  {
    name: "Ellen Ripley",
    description: "A warrant officer who confronts the deadly alien Xenomorph.",
    movie: "Alien",
  },
  {
    name: "Tony Stark",
    description:
      "A billionaire industrialist and genius inventor who is the armored superhero Iron Man.",
    movie: "Iron Man",
  },
  {
    name: "Hermione Granger",
    description:
      "One of Harry Potter's best friends and the brightest witch of her age.",
    movie: "Harry Potter",
  },
];

export const horrorCharacters: HorrorCharacter[] = [
  {
    name: "Freddy Krueger",
    description:
      "A disfigured midnight mangler who preys on teenagers in their dreams.",
    strength: 85,
  },
  {
    name: "Jason Voorhees",
    description: "The hockey-masked killer who haunts Camp Crystal Lake.",
    strength: 90,
  },
  {
    name: "Michael Myers",
    description:
      "A mysterious figure known for his relentless pursuit and near invincibility.",
    strength: 88,
  },
  {
    name: "Pennywise the Dancing Clown",
    description:
      "A shape-shifting entity that exploits the fears of its victims.",
    strength: 80,
  },
  {
    name: "Leatherface",
    description:
      "A chainsaw-wielding maniac wearing a mask made of human skin.",
    strength: 82,
  },
];
