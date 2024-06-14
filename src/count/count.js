const concatCountInName = (name, count) => {
  return `${name} [${count}]`;
};

const countAndFormatName = (object, property) => {
  return concatCountInName(object.name, object[`${property}`].length);
};

const addCountToCountries = (countries) => {
  return countries.reduce((formatedCountries, currentCountry) => {
    const formatedCountryName = countAndFormatName(currentCountry, "people");

    const formatedPeople = currentCountry.people.reduce(
      (modifiedPeoples, currentPerson) => {
        const formatedPersonName = countAndFormatName(currentPerson, "animals");

        return [
          ...modifiedPeoples,
          { ...currentPerson, name: formatedPersonName },
        ];
      },
      []
    );

    return [
      ...formatedCountries,
      {
        ...currentCountry,
        name: formatedCountryName,
        people: formatedPeople,
      },
    ];
  }, []);
};

module.exports = {
  concatCountInName,
  countAndFormatName,
  addCountToCountries,
};
