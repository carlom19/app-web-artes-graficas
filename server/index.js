const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conectado a MongoDB'))
.catch((err) => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/users', require('./src/routes/userRoutes'));
app.use('/api/orders', require('./src/routes/orderRoutes'));

// Ruta para el dashboard (datos mock por ahora)
app.get('/api/dashboard', (req, res) => {
  res.json({
    activeOrders: 10,
    monthlyRevenue: 5000,
    newClients: 3,
    chartData: [
      { name: 'Ene', orders: 40, revenue: 4000 },
      { name: 'Feb', orders: 30, revenue: 3000 },
      { name: 'Mar', orders: 50, revenue: 5000 },
      { name: 'Abr', orders: 45, revenue: 4500 },
      { name: 'May', orders: 60, revenue: 6000 },
      { name: 'Jun', orders: 55, revenue: 5500 },
    ],
    recentOrders: [
      { id: 1, client: 'Cliente A', type: 'Logo', status: 'En Progreso', dueDate: '2023-07-15' },
      { id: 2, client: 'Cliente B', type: 'Flyer', status: 'Pendiente', dueDate: '2023-07-20' },
      { id: 3, client: 'Cliente C', type: 'Brochure', status: 'Completado', dueDate: '2023-07-10' },
    ]
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));