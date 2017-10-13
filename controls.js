import React from 'react'
import { connect } from 'redux-zero'
import { hit, stay, reset } from './actions'
import { Button } from 't63'

const mapStateToProps = ({ game, player, dealer }) => ({ game, player, dealer })

const Controls = connect(mapStateToProps)(props => {
  return (
    <div className="flex items-center justify-between mt4">
      <Button
        className="bg-green bb--green mh3"
        disabled={props.game.status !== 'ON'}
        onClick={hit}
      >
        Hit
      </Button>
      <Button
        className="bg-green bb--green mh3"
        disabled={props.game.status !== 'ON'}
        onClick={stay}
      >
        Stay
      </Button>
      <Button className="bg-green bb--green mh4" onClick={reset}>
        {props.game.status === 'OFF' ? 'Start' : 'Reset'}
      </Button>
    </div>
  )
})

export default Controls
