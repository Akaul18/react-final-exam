import React from 'react'

import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'

import DeviceContainer from '../containers/DeviceContainer'

const Devices = () => {
  return (
    <ul>
      <Container>
        <List>
          <DeviceContainer />
        </List>
      </Container>
    </ul>
  )
}

export default Devices
