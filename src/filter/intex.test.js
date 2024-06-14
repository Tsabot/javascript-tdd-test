const { executeFilterOnData } = require("./index");
const { reduceCountryByAnimals } = require("./logic/reducer");
const { data } = require("../data");

jest.mock("./logic/reducer", () => {
  return {
    reduceCountryByAnimals: jest.fn(),
  };
});

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

  it("should call reduceCountryByAnimals with cli arg", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);

    executeFilterOnData();

    expect(reduceCountryByAnimals).toHaveBeenCalledWith(data, "ry");
  });

  it("should log filtered data", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);
    reduceCountryByAnimals.mockReturnValue([
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Anthony Bruno",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ]);

    executeFilterOnData();

    expect(console.log).toHaveBeenCalledWith(`Provided arg: ry`);
    expect(console.log).toHaveBeenCalledWith([
      {
        name: "Uzuzozne",
        people: [
          {
            name: "Lillie Abbott",
            animals: [
              {
                name: "John Dory",
              },
            ],
          },
        ],
      },
      {
        name: "Satanwi",
        people: [
          {
            name: "Anthony Bruno",
            animals: [
              {
                name: "Oryx",
              },
            ],
          },
        ],
      },
    ]);
  });
});
