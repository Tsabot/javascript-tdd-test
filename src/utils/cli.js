const getArgumentFromCli = () => {
  const cliArg = process.argv[2];

  if (cliArg.includes("filter")) {
    return { arg: cliArg.slice(9), type: "filter" };
  }

  if (cliArg === "--count") {
    return { type: "count" };
  }

  return { arg: "" };
};

module.exports = {
  getArgumentFromCli,
};
