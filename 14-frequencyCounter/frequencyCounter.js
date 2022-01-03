function frequencyCounter(word) {
  word.toLowerCase()
  const regex = /[a-z]/g;
  const letters = word.match(regex);

  const freq = new Map();

  for (var i of letters) {
    if (freq.has(letters[i])) {
      freq.set(letters[i], (freq.get(letters[i]) + 1))
    } else {
      freq.set(letters[i], 1)
    }
  }

  return freq
}

// Do not edit this line;
module.exports = frequencyCounter;