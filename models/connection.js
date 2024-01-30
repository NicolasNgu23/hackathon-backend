const mongoose = require('mongoose');

//faudra mettre la connection string de mongodb
const connectionString = 'mongodb+srv://nicolasnguyen0023:iffy@cluster0.zat8bpq.mongodb.net/hackathon';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
