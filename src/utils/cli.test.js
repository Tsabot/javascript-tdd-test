const { getArgumentFromCli } = require("./cli");

jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);

describe("getArgumentFromCli", () => {
  it("should get argument from cli", () => {
    const string = getArgumentFromCli();

    expect(string).toEqual("ry");
  });
  it("should return empty string otherwise", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--fir=ry"]);

    const string = getArgumentFromCli();

    expect(string).toEqual("");
  });
});
