const concatCountInName = (name, count) => {
  return `${name} [${count}]`;
};

const countPropertyOfObject = (object, property) => {
  return object[`${property}`].length;
};

const countAndFormatName = (object, property) => {
  return object.name;
};

module.exports = {
  concatCountInName,
  countPropertyOfObject,
  countAndFormatName,
};
