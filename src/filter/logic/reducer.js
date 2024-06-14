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
  return peoples.reduce((reducedpeoples, currentValue) => {
    const animals = reduceAnimalsByName(
      currentValue.animals,
      includedAnimalName
    );

    if (animals.length > 0) {
      return [...reducedpeoples, { ...currentValue, animals }];
    }

    return reducedpeoples;
  }, []);
};

module.exports = {
  doesNameIncludes,
  reduceAnimalsByName,
  reducePeopleByAnimals,
};
