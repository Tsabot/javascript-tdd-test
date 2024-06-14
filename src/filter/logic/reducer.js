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

module.exports = {
  doesNameIncludes,
  reduceAnimalsByName,
};
