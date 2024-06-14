const { concatCountInName } = require("./count");

describe("concatCountInName", () => {
  it("should return both string as one", () => {
    const string = concatCountInName("charle", 1);

    expect(string).toEqual("charle [1]");
  });
});
