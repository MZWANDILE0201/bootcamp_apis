export default function wordLengths(sentence) {
    var words = sentence.split(" ");
    var sum = 0;
    for (var i = 0;i < words.length; i++) {
      sum += words[i].length;
    }
    return sum;
  }