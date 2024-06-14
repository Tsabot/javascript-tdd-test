const { getArgumentFromCli } = require("./cli");

describe("getArgumentFromCli", () => {
  it("should get argument from cli", () => {
    const string = getArgumentFromCli();

    expect(string).toEqual("args");
  });
});
