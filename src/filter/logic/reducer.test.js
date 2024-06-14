const { doesNameIncludes } = require("./reducer");

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
