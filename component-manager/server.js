// server.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { connectDB, sequelize } = require('./config/db');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Conectar ao MySQL
connectDB();

// Sincronizar modelos
sequelize.sync({alter: true})
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });

// Rotas
const componentRoutes = require('./routes/componentRoutes');
const userRoutes = require('./routes/userRoutes');
app.use('/api/components', componentRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});