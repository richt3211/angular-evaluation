const people = require('./PEOPLE.json');
const cards = require('./CARDS.json');

exports.getPeople = () => [...people];
exports.getCards = () => [...cards];
exports.getPerson = id => people.find(e => e.id === id);
exports.updatePerson = (id, updates) => {
  const idx = people.findIndex(e => e.id === id);
  if (idx >= 0) {
    const updatedPerson = { ...people[idx], ...updates };
    people[idx] = updatedPerson;
    return updatedPerson;
  } else {
    return null;
  }
};
exports.getCard = id => cards.find(e => e.id === id);
exports.getPersonCards = person => cards.filter(e => e.person_id === person);
exports.paginatePeople = (offset = 0, num = 100) => people.slice(offset, offset + num);
exports.addCard = (person_id, card_number) => {
  const newCard = { person_id, card_number, balance: 0, id: +(Math.random() * 100000).toFixed(0) };
  cards.push(newCard);
  return newCard;
};
