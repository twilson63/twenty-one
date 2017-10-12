import { createStore } from 'redux-zero'

const initialState = {
  player: [],
  dealer: [],
  game: { status: 'OFF', wins: 0 }
}

export default createStore(initialState)
