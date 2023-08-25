export default function shortestWord(sentence) {
    var words = sentence.split(" ");
    var shortest = words[0];
    for (var i = 1; i < words.length; i++) {
      if (words[i].length <= shortest.length) {
        shortest = words[i];
      }
    }
    return shortest.toLowerCase();
  }