function setUnionOfAnyAmountOfSets(...args) {
  return args.reduce((previous, current) => {
    const prevIter = previous.entries();

    for (var i in prevIter) {
      if (!current.has(prevIter[i])) {
        current.add(prevIter[i])
      }
    }

    return current
  });
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;