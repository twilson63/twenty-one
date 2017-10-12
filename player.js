import React from 'react'
import Card from './card'
import { connect } from 'redux-zero'

const mapStateToProps = ({ player, game }) => ({ player, game })

const Player = connect(mapStateToProps)(props => {
  return (
    <div>
      {props.player.map(card => <Card {...card} />)}
      {props.game.status !== 'OFF' && (
        <img
          class="card br2"
          src={`https://via.placeholder.com/100/138?text=${props.game.player}`}
        />
      )}
    </div>
  )
})

export default Player
