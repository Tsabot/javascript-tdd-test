const { getArgumentFromCli } = require("./utils/cli");
const { data } = require("./data");
const { reduceCountryByAnimals } = require("./filter/logic/reducer");
const { addCountToCountries } = require("./count/logic/count");

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

  if (type === "filter") {
    console.log(`Provided arg: ${arg}`);

    const filteredCountries = reduceCountryByAnimals(data, arg);

    console.dir(filteredCountries, { depth: 6, colors: true });
  }

  if (type === "count") {
    const formatedCountries = addCountToCountries(data);

    console.dir(formatedCountries, { depth: 6, colors: true });
  }
};

main(true);

module.exports = { main };
