function commonCharacterCount(s1, s2) {
  // loop through the first word
    for (let i = 0; i < s1.length; i++) {
      // replace all of the same letters with a question mark
        s2 = s2.replace(s1[i], "?");
    }
    // remove all of the question marks and return the length
    return s2.replace(/[^?]/g, "").length;
}

console.log(commonCharacterCount("aabcc","adcaa"))
console.log(commonCharacterCount("a","b"))
console.log(commonCharacterCount("abca","xyzbac"))
