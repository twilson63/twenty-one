import React from 'react'
import { connect } from 'redux-zero'
import { hit, stay, reset } from './actions'

const mapStateToProps = ({ game, player, dealer }) => ({ game, player, dealer })

const Controls = connect(mapStateToProps)(props => {
  return (
    <div>
      <button disabled={props.game.status !== 'ON'} onClick={hit}>
        Hit
      </button>
      <button disabled={props.game.status !== 'ON'} onClick={stay}>
        Stay
      </button>
      <button onClick={reset}>
        {props.game.status === 'OFF' ? 'Start' : 'Reset'}
      </button>
      <span className="pl4">Score: {props.game.status}</span>
      <span className="pl4">Wins: {props.game.wins}</span>
    </div>
  )
})

export default Controls
