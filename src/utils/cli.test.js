const { getArgumentFromCli } = require("./cli");

jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);

describe("getArgumentFromCli", () => {
  it("should get argument from cli", () => {
    const { arg } = getArgumentFromCli();

    expect(arg).toEqual("ry");
  });
  it("should return empty string otherwise", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--fir=ry"]);

    const { arg } = getArgumentFromCli();

    expect(arg).toEqual("");
  });
  it("should return the type of command", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);

    const { type } = getArgumentFromCli();

    expect(type).toEqual("filter");
  });
  it("should handle count", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--count"]);

    const { type } = getArgumentFromCli();

    expect(type).toEqual("count");
  });
});
