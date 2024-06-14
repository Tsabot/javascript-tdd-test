const { concatCountInName, countAnimalOfPerson } = require("./count");
const { mockedPerson } = require("../../mock/mockData");

describe("concatCountInName", () => {
  it("should return both string as one", () => {
    const string = concatCountInName("charle", 1);

    expect(string).toEqual("charle [1]");
  });
});

describe("count number of animal in people", () => {
  it("should return the number of animals of someone", () => {
    const count = countAnimalOfPerson(mockedPerson);

    expect(count).toEqual(6);
  });
});
