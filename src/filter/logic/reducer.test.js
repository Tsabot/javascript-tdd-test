const { isSameName } = require("./reducer");

describe("isSameName", () => {
  it("should return true if same string is passed", () => {
    const bool = isSameName("charle", "charle");

    expect(bool).toEqual(true);
  });
});
