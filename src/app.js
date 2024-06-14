const { getArgumentFromCli } = require("./utils/cli");
const { data } = require("./data");
const { reduceCountryByAnimals } = require("./filter/logic/reducer");

const main = (autoRun = false) => {
  if (autoRun && !process.argv[2]) {
    return;
  }

  const { arg, type } = getArgumentFromCli();

  if (!arg) {
    console.log(
      `No understandable args have been provided: ${process.argv[2]}`
    );

    return;
  }

  console.log(`Provided arg: ${arg}`);

  if (type === "filter") {
    const filteredCountries = reduceCountryByAnimals(data, arg);

    console.log(filteredCountries);
  }
};

main(true);

module.exports = { main };
