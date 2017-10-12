import R from 'ramda'

export const createDeck = () => {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
    .then(res => res.json())
    .then(result => result.deck_id)
}

export const drawCard = id => {
  return fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
    .then(res => res.json())
    .then(result => result.cards[0])
}

export const drawFive = id => {
  return fetch(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=5`)
    .then(res => res.json())
    .then(result => result.cards)
}

const calcAce = score => {
  return R.add(11, score) < 22 ? 11 : 1
}

const faceCards = ['JACK', 'QUEEN', 'KING']
const aceLast = (a, b) => (a === 'ACE' ? 1 : -1)
const reducer = (acc, value) => {
  acc += R.contains(value, faceCards) ? 10 : 0
  acc += Number(value) ? Number(value) : 0
  acc += R.equals('ACE', value) ? calcAce(acc) : 0
  return acc
}

export const getScore = R.compose(
  R.reduce(reducer, 0),
  R.sort(aceLast),
  R.map(R.prop('value'))
)
