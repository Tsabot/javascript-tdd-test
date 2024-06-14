const {
  concatCountInName,
  countAndFormatName,
  addCountToCountries,
} = require("./count");

const { mockedPerson, mockedCountries } = require("../../mock/mockData");

describe("concatCountInName", () => {
  it("should return both string as one", () => {
    const string = concatCountInName("charle", 1);

    expect(string).toEqual("charle [1]");
  });
});

describe("count and format name", () => {
  it("should count the number of animals and add it to it's name", () => {
    const newPersonName = countAndFormatName(mockedPerson, "animals");

    expect(newPersonName).toEqual("Winifred Graham [6]");
  });
});

describe("addCountToCountries", () => {
  it("should count the number of people and add it to all countries", () => {
    const formatedCountries = addCountToCountries(mockedCountries);

    expect(formatedCountries).toEqual([
      {
        name: "Dillauti [5]",
        people: [
          {
            name: "Winifred Graham [6]",
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
            name: "Blanche Viciani [8]",
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
            name: "Philip Murray [7]",
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
            name: "Bobby Ristori [9]",
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
            name: "Louise Pinzauti [5]",
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
        name: "Tohabdal [8]",
        people: [
          {
            name: "Effie Houghton [7]",
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
            name: "Essie Bennett [7]",
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
            name: "Owen Bongini [5]",
            animals: [
              { name: "Zebrashark" },
              { name: "Dogs" },
              { name: "Mouse" },
              { name: "Numbat" },
              { name: "African Wild Dog" },
            ],
          },
          {
            name: "Alexander Fleury [7]",
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
            name: "Curtis Fuchs [6]",
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
            name: "Maud Lorenzo [7]",
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
            name: "Linnie Lamb [7]",
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
            name: "Randall Benoît [5]",
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
    ]);
  });
});
