import React from 'react'
import { Card, CardContent, Typography, Button, CardActionArea, CardActions } from '@mui/material'

export default function Note({ note }) {
  return (
    <Card sx={{ mx: 'auto' }} >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {note.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {note.body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Remove
        </Button>
      </CardActions>
    </Card>
  )
}
