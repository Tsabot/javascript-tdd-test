const { reduceCountryByAnimals } = require("./filter/reducer");
const { addCountToCountries } = require("./count/count");
const { getArgumentFromCli } = require("./utils/cli");
const { CLI_TYPE } = require("./constants/cli-type");

const { data } = require("./data");

const handleFilter = (filterBy) => {
  console.log(`Provided arg: ${filterBy}`);

  const filteredCountries = reduceCountryByAnimals(data, filterBy);

  console.dir(filteredCountries, { depth: 6, colors: true });
};

const handleCount = () => {
  const formatedCountries = addCountToCountries(data);

  console.dir(formatedCountries, { depth: 6, colors: true });
};

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

  switch (type) {
    case CLI_TYPE.FILTER:
      handleFilter(arg);

      break;
    case CLI_TYPE.COUNT:
      handleCount();

      break;
    default:
      break;
  }
};

main(true);

module.exports = { main };
