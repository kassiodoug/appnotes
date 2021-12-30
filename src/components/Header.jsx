import React from 'react';
import { Button, TextField, Container, Grid } from '@mui/material';
import { post } from '../api/api'
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Header(theme) {
  let addNote = () => {
    post({
      "title": "Quarto título",
      "body": "Corpo da nota",
      "id": 4
    })
  }

  return (
    <div>
      <Container maxWidth="sm" sx={{ flexGrow: 1, mx: 'auto' }}>
        <Grid container spacing={2} sx={{ my: 3 }}>
          <Grid item xs={8} sm={10}>
            <TextField id="outlined-basic" label="Add a task" variant="outlined" sx={{ width: '100%' }} />
          </Grid>

          <Grid item xs={4} sm={2}>
            <Button
              startIcon={<AddRoundedIcon />}
              onClick={addNote}
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: '100%', height: '100%', minWidth: '6em', px: "4em" }}>
              Add
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 1 }}>
          <Grid item xs={8} sm={10} >
            <TextField id="outlined-basic" label="Search a task" variant="outlined" sx={{ width: '100%' }} />
          </Grid>

          <Grid item xs={4} sm={2}>
            <Button
              startIcon={<SearchRoundedIcon />}
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: '100%', height: '100%', minWidth: '6em', px: '4em' }}>
              Search
            </Button>
          </Grid>
        </Grid>

      </Container>
    </div >
  )
}
