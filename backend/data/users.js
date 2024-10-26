import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@eletrix.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Arthur Vieira',
    email: 'arthur@eletrix.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Victor Guedes',
    email: 'victor@eletrix.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Pedro Faluba',
    email: 'pedro@eletrix.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
