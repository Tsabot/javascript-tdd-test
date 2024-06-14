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
  return false;
};

module.exports = {
  doesNameIncludes,
  reduceAnimalsByName,
  reducePeopleByAnimals,
};
