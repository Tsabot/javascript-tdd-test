const { getArgumentFromCli } = require("./cli");

jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);

describe("getArgumentFromCli", () => {
  it("should get argument from cli", () => {
    const string = getArgumentFromCli();

    expect(string).toEqual("ry");
  });
});
