export const upperCaseFirstLetter = (word) => {
  const firstLetterUpper = word.charAt(0).toUpperCase();
  const restOfCategory = word.slice(1);
  return firstLetterUpper + restOfCategory;
};
