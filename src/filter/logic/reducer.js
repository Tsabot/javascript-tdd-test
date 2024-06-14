const doesNameIncludes = (initialValue, includedString) => {
  return initialValue.includes(includedString);
};

const reduceAnimalsByName = (animals, includedName) => {
  return animals.reduce((reducedAnimals, currentValue) => {
    if (currentValue.name.includes(includedName)) {
      return [...reducedAnimals, currentValue];
    }

    return reducedAnimals;
  }, []);
};

module.exports = {
  doesNameIncludes,
  reduceAnimalsByName,
};
