import React from 'react'
import Currency from 'react-currency-formatter'
import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import DisplayCard from '../cards/DisplayCard'
import RemoveDevice from '../buttons/RemoveDevice'

const Device = () => {
  const renderDevice = () => (
    <ListItem>
      <ListItemText
        primary='2019 Apple iPhone'
        secondary={<Currency quantity='1000' currency='CAD' />}
      />
      <Button
        variant='contained'
        style={{ margin: '5px' }}
      >
        Edit
      </Button>
      <RemoveDevice />
    </ListItem>
  )

  return (
    <DisplayCard>
      {renderDevice()}
    </DisplayCard>
  )
}

export default Device