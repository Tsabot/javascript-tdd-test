const { getArgumentFromCli } = require("../utils/cli");
const { data } = require("../data");
const { reduceCountryByAnimals } = require("./logic/reducer");

const executeFilterOnData = () => {
  const filterArg = getArgumentFromCli();

  if (!filterArg) {
    console.log(
      `No understandable args have been provided: ${process.argv[2]}`
    );

    return;
  }

  console.log(`Provided arg: ${filterArg}`);

  reduceCountryByAnimals(data, filterArg);
};

module.exports = {
  executeFilterOnData,
};
