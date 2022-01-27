const findPosition = (list, persons, counter) => {
  if (Array.isArray(list) && typeof list[0] === "string" && typeof persons === "string" && Number.isInteger(counter)) {
    if (list.includes(persons)) {
      return `${persons} is at position #${list.indexOf(persons) + 1} in this array.`;
    } else {
      return `${persons} is not present in this array.`;
    }
  } else {
    throw new Error("A parameter is not of its expected type ");
  }
  // Code here
};

// Leave line below for tests to work properly
module.exports = findPosition;
