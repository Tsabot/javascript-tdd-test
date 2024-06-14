const { doesNameIncludes, reduceAnimalsByName } = require("./reducer");

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
    const filteredAnimals = reduceAnimalsByName(mockedAnimals, "c");

    expect(filteredAnimals).toEqual([{ name: "Duck" }]);
  });
});
