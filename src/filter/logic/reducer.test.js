const {
  doesNameIncludes,
  reduceAnimalsByName,
  reducePeopleByAnimals,
  reduceCountryByAnimals,
} = require("./reducer");

const {
  mockedAnimals,
  mockedCountries,
  mockedPeople,
} = require("../../mock/mockData");

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
