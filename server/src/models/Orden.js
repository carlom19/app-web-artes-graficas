const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  client: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Pendiente', 'En Progreso', 'En Revisión', 'Completado'], 
    default: 'Pendiente' 
  },
  designer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dueDate: { type: Date, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);