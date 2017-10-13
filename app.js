import React from 'react'
import Controls from './controls'
import Player from './player'
import Dealer from './dealer'
import Scoreboard from './scoreboard'

const App = props => {
  return (
    <div className="vh-100 w-100 bg-green flex flex-column pa4">
      <div className="flex justify-between items-center">
        <h1 className="avenir">Blackjack Game</h1>
      </div>
      <Player />
      <Dealer />
      <Scoreboard />
      <Controls />
    </div>
  )
}

export default App
