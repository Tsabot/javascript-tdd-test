const { executeFilterOnData } = require("./index");

beforeEach(() => {
  console.log = jest.fn();
});

describe("executeFilterOnData", () => {
  it("should log message if no cli argument was provided", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--fir=ry"]);

    executeFilterOnData();

    expect(console.log).toHaveBeenCalled();
  });
  it("should log provided cli argument", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);

    executeFilterOnData();

    expect(console.log).toHaveBeenCalledWith(`Provided arg: ry`);
  });
});
