const doesNameIncludes = (initialValue, includedString) => {
  return initialValue.includes(includedString);
};

const reduceAnimalsByName = (animals, includedName) => {
  return animals.reduce((reducedAnimals, currentAnimal) => {
    if (
      doesNameIncludes(
        currentAnimal.name.toLowerCase(),
        includedName.toLowerCase()
      )
    ) {
      return [...reducedAnimals, currentAnimal];
    }

    return reducedAnimals;
  }, []);
};

const reducePeopleByAnimals = (peoples, includedAnimalName) => {
  return peoples.reduce((reducedpeoples, currentPeople) => {
    const reducedAnimals = reduceAnimalsByName(
      currentPeople.animals,
      includedAnimalName
    );

    if (reducedAnimals.length > 0) {
      return [...reducedpeoples, { ...currentPeople, animals: reducedAnimals }];
    }

    return reducedpeoples;
  }, []);
};

const reduceCountryByAnimals = (countries, includedAnimalName) => {
  return countries.reduce((reducedCountries, currentCountry) => {
    const reducedPeople = reducePeopleByAnimals(
      currentCountry.people,
      includedAnimalName
    );

    if (reducedPeople.length > 0) {
      return [
        ...reducedCountries,
        { ...currentCountry, people: reducedPeople },
      ];
    }

    return reducedCountries;
  }, []);
};

module.exports = {
  doesNameIncludes,
  reduceAnimalsByName,
  reducePeopleByAnimals,
  reduceCountryByAnimals,
};
