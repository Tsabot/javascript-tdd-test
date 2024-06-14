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
  countPropertyOfObject,
  countAndFormatName,
  addCountToCountries,
};
