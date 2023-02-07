import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

const cors = require('cors');
const corsOptions ={
  origin:'http://localhost:4200',
  credentials:true,
  optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use(express.json())

app.get('/movie', async (req, res) => {
    const movies = await prisma.movie.findMany()
    res.json(movies)
})

app.get('/movie/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.movie.findUnique({
    where: { id: Number( id ) },
  })
  res.json(post)
})

app.get('/movie/:movieId/showing', async (req, res) => {
  const { movieId } = req.params
  const showings = await prisma.showing.findMany({
    where: { movieId: Number( movieId ) },
  })
  res.json(showings)
})

app.post('/movie', async (req, res) => {
  const result = await prisma.movie.create({
    data: { ...req.body },
  })
  res.json(result)
})

app.post('/movie/:movieId/showing', async (req, res) => {
  const { movieId } = req.params
  const result = await prisma.showing.create({
    data: { ...req.body, movieId: Number(movieId) },
  })
  res.json(result)
})

app.put('/movie/:id', async (req, res) => {
  const { title, runtimeMinutes } = req.body
  const { id } = req.params
  const movie = await prisma.movie.update({
    where: { id: Number(id) },
    data: {title, runtimeMinutes},
  })
  res.json(movie)
})

app.delete('/movie/:id', async (req, res) => {
  const { id } = req.params
  const movie = await prisma.movie.delete({
    where: { id: Number(id) },
  })
  res.json(movie)
})

app.delete('/showing/:id', async (req, res) => {
  const { id } = req.params
  const showing = await prisma.showing.delete({
    where: { id: Number(id) }
  })
  res.json(showing)
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)