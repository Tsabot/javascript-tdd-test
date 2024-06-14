const { main } = require("./app");
const { reduceCountryByAnimals } = require("./filter/reducer");
const { addCountToCountries } = require("./count/count");
const { data } = require("./data");

jest.mock("./filter/reducer", () => {
  return {
    reduceCountryByAnimals: jest.fn(),
  };
});

jest.mock("./count/count", () => {
  return {
    addCountToCountries: jest.fn(),
  };
});

beforeEach(() => {
  console.log = jest.fn();
  console.dir = jest.fn();
});

describe("main", () => {
  it("should log message if no cli argument was provided", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--fir=ry"]);

    main();

    expect(console.log).toHaveBeenCalled();
  });
  it("should log provided cli argument", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);

    main();

    expect(console.log).toHaveBeenCalledWith(`Provided arg: ry`);
  });

  it("should call reduceCountryByAnimals with cli arg", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--filter=ry"]);

    main();

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

    main();

    expect(console.log).toHaveBeenCalledWith(`Provided arg: ry`);
    expect(console.dir).toHaveBeenCalledWith(
      [
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
      ],
      { colors: true, depth: 6 }
    );
  });

  it("should call addCountToCountries provided count cli argument", () => {
    jest.replaceProperty(process, "argv", ["node", "path", "--count"]);

    main();

    expect(addCountToCountries).toHaveBeenCalled();
  });
});
