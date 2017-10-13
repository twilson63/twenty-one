import React from 'react'
import { connect } from 'redux-zero'

const mapStateToProps = ({ game }) => ({ game })

const Scoreboard = connect(mapStateToProps)(props => {
  return (
    <div>
      <span className="pl4">Status: {props.game.status}</span>
      <span className="pl4">Wins: {props.game.wins}</span>
    </div>
  )
})

export default Scoreboard
