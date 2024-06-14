const { getArgumentFromCli } = require("../utils/cli");

const executeFilterOnData = () => {
  const filterArg = getArgumentFromCli();

  if (!filterArg) {
    console.log(
      `No understandable args have been provided: ${process.argv[2]}`
    );

    return;
  }
};

module.exports = {
  executeFilterOnData,
};
