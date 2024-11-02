import { sequelize, connectDB } from '../config/sequelize.js';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await sequelize.sync({ force: true });

    const createdUsers = await User.bulkCreate(users, { returning: true });

    const adminUser = createdUsers[0].id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.bulkCreate(sampleProducts);

    console.log('Dados importados!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await sequelize.sync({ force: true });

    console.log('Dados excluídos!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}