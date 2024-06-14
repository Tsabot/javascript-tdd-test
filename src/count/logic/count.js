const concatCountInName = (name, count) => {
  return `${name} [${count}]`;
};

const countAnimalOfPerson = (person) => {
  return person.animals.length;
};

module.exports = {
  concatCountInName,
  countAnimalOfPerson,
};
