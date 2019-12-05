import React from 'react'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const UpdateCharacter = () => {
  return (
    <form>
      <TextField
        label='First Name'
        defaultValue='John'
        placeholder='i.e. John'
        margin='normal'
        varian='outlined'
        style={{ margin: '10px' }}
      />
      <TextField
        label='Last Name'
        defaultValue='Smith'
        placeholder='i.e. Smith'
        margin='normal'
        varian='outlined'
        style={{ margin: '10px' }}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        style={{ margin: '10px' }}
      >
        Update Character
      </Button>
      <Button
        variant='contained'
        color='secondary'
        style={{ margin: '10px' }}
      >
        Cancel
      </Button>
    </form>
  )
}

export default UpdateCharacter