import express from 'express'
import {
   getAllPeminjaman,
   getPeminjamanById,
   addPeminjaman,
   pengembalianBarang,
   usageReport
} from '../controllers/transaksi_controllers.js'


const app = express()


app.get('/borrow',  getAllPeminjaman)
app.get('/borrow/:id',  getPeminjamanById)
app.post('/borrow',  addPeminjaman)
app.post('/return',  pengembalianBarang)
app.post('/usage-report', usageReport)


export default app