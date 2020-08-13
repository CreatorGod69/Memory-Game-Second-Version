const shuffle = (array) => {
  const _array = array.slice(0);
  for (let i = 0; i < array.length - 1; i++) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let temp = _array[i];
    _array[i] = _array[randomIndex];
    _array[randomIndex] = temp;
  }

  return _array;
};

const initializeDeck = () => {
  let id = 0;
  const cards = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    // "nine"
  ].reduce((acc, type) => {
    acc.push({
      id: id++,
      type,
      back: `/img/back.png`,
      front: `/img/1.png`,
      width: 100
    });
    acc.push({
      id: id++,
      type,
      back: `/img/back.png`,
      front: `/img/1.png`,
      width: 100
    });
    return acc;
  }, []);

  return shuffle(cards);
};

export default initializeDeck;
