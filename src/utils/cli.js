const getArgumentFromCli = () => {
  const cliArg = process.argv[2];

  if (cliArg.includes("filter")) {
    return cliArg.slice(9);
  }

  return "";
};

module.exports = {
  getArgumentFromCli,
};
