const { getArgumentFromCli } = require("./utils/cli");
const { data } = require("./data");
const { reduceCountryByAnimals } = require("./filter/logic/reducer");
const { addCountToCountries } = require("./count/logic/count");
const { CLI_TYPE } = require("./constants/cli-type");

const main = (autoRun = false) => {
  if (autoRun && !process.argv[2]) {
    // To prevent Jest from starting main() on import

    return;
  }

  const { arg, type } = getArgumentFromCli();

  if (!arg && !type) {
    console.log(
      `No understandable args have been provided: ${process.argv[2]}`
    );

    return;
  }

  if (type === CLI_TYPE.FILTER) {
    console.log(`Provided arg: ${arg}`);

    const filteredCountries = reduceCountryByAnimals(data, arg);

    console.dir(filteredCountries, { depth: 6, colors: true });
  }

  if (type === CLI_TYPE.COUNT) {
    const formatedCountries = addCountToCountries(data);

    console.dir(formatedCountries, { depth: 6, colors: true });
  }
};

main(true);

module.exports = { main };
