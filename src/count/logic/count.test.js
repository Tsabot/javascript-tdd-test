const { concatCountInName, countPropertyOfObject } = require("./count");
const { mockedPerson, mockedCountry } = require("../../mock/mockData");

describe("concatCountInName", () => {
  it("should return both string as one", () => {
    const string = concatCountInName("charle", 1);

    expect(string).toEqual("charle [1]");
  });
});

describe("count number of animal in people", () => {
  it("should return the number of animals of someone", () => {
    const count = countPropertyOfObject(mockedPerson, "animals");

    expect(count).toEqual(6);
  });
  it("should return the number of people in a country", () => {
    const count = countPropertyOfObject(mockedCountry, "people");

    expect(count).toEqual(5);
  });
});
