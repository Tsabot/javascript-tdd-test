const getArgumentFromCli = () => {
  const cliArg = process.argv[2];

  if (cliArg.includes("filter")) {
    return { arg: cliArg.slice(9), type: "filter" };
  }

  return { arg: "" };
};

module.exports = {
  getArgumentFromCli,
};
