const { CLI_TYPE } = require("../constants/cli-type");

const getArgumentFromCli = () => {
  const cliArg = process.argv[2];

  if (cliArg.includes("--filter")) {
    return { arg: cliArg.slice(9), type: CLI_TYPE.FILTER };
  }

  if (cliArg === "--count") {
    return { type: CLI_TYPE.COUNT };
  }

  return { arg: "" };
};

module.exports = {
  getArgumentFromCli,
};
