import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Note from './Note'
import { busca } from '../api/api'

export default function GridNote({ url }) {
  const [notes, setNotes] = useState([
    { "title": "Without notes", "body": "", "id": 1 },
    { "title": "Without notes", "body": "", "id": 2 },
    { "title": "Without notes", "body": "", "id": 3 },
    { "title": "Without notes", "body": "", "id": 4 },
    { "title": "Without notes", "body": "", "id": 5 },
    { "title": "Without notes", "body": "", "id": 6 },
    { "title": "Without notes", "body": "", "id": 7 },
    { "title": "Without notes", "body": "", "id": 8 },
  ])

  useEffect(() => {
    busca(url, setNotes)
  }, [url])

  return (
    <Grid container spacing={2} sx={{ my: 3 }} >
      {notes.reverse().map(note => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3}  key={note.id}>
            <Note note={note} />
          </Grid>
        )
      })}
    </Grid>
  )
}
