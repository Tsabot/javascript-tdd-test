const concatCountInName = (name, count) => {
  return `${name} [${count}]`;
};

const countPropertyOfObject = (object, property) => {
  return object[`${property}`].length;
};

const countAndFormatName = (object, property) => {
  return concatCountInName(
    object.name,
    countPropertyOfObject(object, property)
  );
};

const addCountToCountries = (countries) => {
  return countries.reduce((previousValue, currentValueCountry) => {
    const newName = countAndFormatName(currentValueCountry, "people");

    return [...previousValue, { ...currentValueCountry, name: newName }];
  }, []);
};

module.exports = {
  concatCountInName,
  countPropertyOfObject,
  countAndFormatName,
  addCountToCountries,
};
