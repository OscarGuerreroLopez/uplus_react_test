export const Sentence = text => {
  const wordArray = text.split(" ");

  if (wordArray.length > 19) {
    let newText = text
      .split(" ")
      .slice(0, 20)
      .join(" ");

    return newText + " ...";
  }
  return text;
};
