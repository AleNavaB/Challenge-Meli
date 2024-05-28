import express from 'express'
import search from './routes/search'
import itemDescription from './routes/itemDescription'

const app = express()

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running at ${port}`))
app.use('/api', search)
app.use('/api', itemDescription)
