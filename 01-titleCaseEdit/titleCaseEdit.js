const { compareByInspect } = require("chai/lib/chai/utils");

function titleCaseEdit(title) {
  title.toLowerCase()
  // Array of words in title
  const words = title.split(" ");
  console.log(words)

  let titleCase = "";

  // Capitalize the first letter of each word
  for (let i = 0; i < words.length; i++) {
    titleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1);

    // Re-insert spaces between words
    if (i != (words.length - 1)) {
      titleCase += " "
    }
  }

  return titleCase;
}

// Do not edit this line;
module.exports = titleCaseEdit;