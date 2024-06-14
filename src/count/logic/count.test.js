const { concatValueInString } = require("./count");

describe("concatValueInString", () => {
  it("should return both string as one", () => {
    const string = concatValueInString("charle", "[1]");

    expect(string).toEqual("charle [1]");
  });
});
