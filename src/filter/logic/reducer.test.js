const {
  doesNameIncludes,
  reduceAnimalsByName,
  reducePeopleByAnimals,
  reduceCountryByAnimals,
} = require("./reducer");

describe("doesNameIncludes", () => {
  it("should return true if string is included", () => {
    const bool = doesNameIncludes("charle", "char");

    expect(bool).toEqual(true);
  });
  it("should return false if string is not included", () => {
    const bool = doesNameIncludes("charle", "chor");

    expect(bool).toEqual(false);
  });
});

const mockedAnimals = [
  { name: "Anoa" },
  { name: "Duck" },
  { name: "Narwhal" },
  { name: "Badger" },
  { name: "Cobra" },
  { name: "Crow" },
];

describe("reduce animals", () => {
  it("should return animals if string is included in their name", () => {
    const filteredAnimals = reduceAnimalsByName(mockedAnimals, "uc");

    expect(filteredAnimals).toEqual([{ name: "Duck" }]);
  });
  it("shouldn't return animals if string is not included in their name", () => {
    const filteredAnimals = reduceAnimalsByName(mockedAnimals, "z");

    expect(filteredAnimals).toEqual([]);
  });
  it("should return animals if string is included no matters of case of characters", () => {
    const filteredAnimals = reduceAnimalsByName(mockedAnimals, "B");

    expect(filteredAnimals).toEqual([{ name: "Badger" }, { name: "Cobra" }]);
  });
});

const mockedPeople = [
  {
    name: "Winifred Graham",
    animals: [
      { name: "Anoa" },
      { name: "Duck" },
      { name: "Narwhal" },
      { name: "Badger" },
      { name: "Cobra" },
      { name: "Crow" },
    ],
  },
  {
    name: "Blanche Viciani",
    animals: [
      { name: "Barbet" },
      { name: "Rhea" },
      { name: "Snakes" },
      { name: "Antelope" },
      { name: "Echidna" },
      { name: "Crow" },
      { name: "Guinea Fowl" },
      { name: "Deer Mouse" },
    ],
  },
  {
    name: "Philip Murray",
    animals: [
      { name: "Sand Dollar" },
      { name: "Buzzard" },
      { name: "Elephant" },
      { name: "Xenops" },
      { name: "Dormouse" },
      { name: "Anchovy" },
      { name: "Dinosaur" },
    ],
  },
  {
    name: "Bobby Ristori",
    animals: [
      { name: "Kowari" },
      { name: "Caecilian" },
      { name: "Common Genet" },
      { name: "Chipmunk" },
      { name: "Aardwolf" },
      { name: "Przewalski's Horse" },
      { name: "Badger" },
      { name: "Sand Cat" },
      { name: "Linne's Two-toed Sloth" },
    ],
  },
  {
    name: "Louise Pinzauti",
    animals: [
      { name: "Manta Ray" },
      { name: "Nubian Ibex" },
      { name: "Warbler" },
      { name: "Duck" },
      { name: "Mice" },
    ],
  },
];

describe("reducePeopleByAnimals", () => {
  it("should return people if animal name is included in their animals", () => {
    const filteredAnimals = reducePeopleByAnimals(mockedPeople, "uc");

    expect(filteredAnimals).toEqual([
      {
        name: "Winifred Graham",
        animals: [{ name: "Duck" }],
      },
      {
        name: "Louise Pinzauti",
        animals: [{ name: "Duck" }],
      },
    ]);
  });
});

const mockedCountries = [
  {
    name: "Dillauti",
    people: [
      {
        name: "Winifred Graham",
        animals: [
          { name: "Anoa" },
          { name: "Duck" },
          { name: "Narwhal" },
          { name: "Badger" },
          { name: "Cobra" },
          { name: "Crow" },
        ],
      },
      {
        name: "Blanche Viciani",
        animals: [
          { name: "Barbet" },
          { name: "Rhea" },
          { name: "Snakes" },
          { name: "Antelope" },
          { name: "Echidna" },
          { name: "Crow" },
          { name: "Guinea Fowl" },
          { name: "Deer Mouse" },
        ],
      },
      {
        name: "Philip Murray",
        animals: [
          { name: "Sand Dollar" },
          { name: "Buzzard" },
          { name: "Elephant" },
          { name: "Xenops" },
          { name: "Dormouse" },
          { name: "Anchovy" },
          { name: "Dinosaur" },
        ],
      },
      {
        name: "Bobby Ristori",
        animals: [
          { name: "Kowari" },
          { name: "Caecilian" },
          { name: "Common Genet" },
          { name: "Chipmunk" },
          { name: "Aardwolf" },
          { name: "Przewalski's Horse" },
          { name: "Badger" },
          { name: "Sand Cat" },
          { name: "Linne's Two-toed Sloth" },
        ],
      },
      {
        name: "Louise Pinzauti",
        animals: [
          { name: "Manta Ray" },
          { name: "Nubian Ibex" },
          { name: "Warbler" },
          { name: "Duck" },
          { name: "Mice" },
        ],
      },
    ],
  },
  {
    name: "Tohabdal",
    people: [
      {
        name: "Effie Houghton",
        animals: [
          { name: "Zebra" },
          { name: "Ring-tailed Lemur" },
          { name: "Fly" },
          { name: "Blue Iguana" },
          { name: "Emu" },
          { name: "African Wild Ass" },
          { name: "Numbat" },
        ],
      },
      {
        name: "Essie Bennett",
        animals: [
          { name: "Aldabra Tortoise" },
          { name: "Patagonian Toothfish" },
          { name: "Giant Panda" },
          { name: "Goat" },
          { name: "Quahog" },
          { name: "Collared Lemur" },
          { name: "Aldabra Tortoise" },
        ],
      },
      {
        name: "Owen Bongini",
        animals: [
          { name: "Zebrashark" },
          { name: "Dogs" },
          { name: "Mouse" },
          { name: "Numbat" },
          { name: "African Wild Dog" },
        ],
      },
      {
        name: "Alexander Fleury",
        animals: [
          { name: "Gelada" },
          { name: "Rattlesnake" },
          { name: "Rabbit" },
          { name: "Aardvark" },
          { name: "Duck" },
          { name: "Courser" },
          { name: "Woodpecker" },
        ],
      },
      {
        name: "Curtis Fuchs",
        animals: [
          { name: "Squirrel" },
          { name: "Falcon" },
          { name: "Cat" },
          { name: "Lobe Coral" },
          { name: "Camel" },
          { name: "Broadclub Cuttlefish" },
        ],
      },
      {
        name: "Maud Lorenzo",
        animals: [
          { name: "Bush Dog" },
          { name: "Sea Urchin" },
          { name: "Gayal" },
          { name: "Tortoise" },
          { name: "Meerkat" },
          { name: "Lion" },
          { name: "Gecko" },
        ],
      },
      {
        name: "Linnie Lamb",
        animals: [
          { name: "Burro" },
          { name: "African Wild Dog" },
          { name: "Slender Snipe Eel" },
          { name: "Red Panda" },
          { name: "Baby Doll Sheep" },
          { name: "California Sea Lion" },
          { name: "Rabbits" },
        ],
      },
      {
        name: "Randall Benoît",
        animals: [
          { name: "Chameleons" },
          { name: "Bee-eater" },
          { name: "King Vulture" },
          { name: "Giant Isopod" },
          { name: "Sand Cat" },
        ],
      },
    ],
  },
];

describe("reduceCountryByAnimals", () => {
  it("should return country if animal name is included in at least one of their animals", () => {
    const filteredAnimals = reduceCountryByAnimals(mockedCountries, "panda");

    expect(filteredAnimals).toEqual([
      {
        name: "Tohabdal",
        people: [
          {
            name: "Essie Bennett",
            animals: [{ name: "Giant Panda" }],
          },
          {
            name: "Linnie Lamb",
            animals: [{ name: "Red Panda" }],
          },
        ],
      },
    ]);
  });
});
