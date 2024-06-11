const mongoose = require('mongoose');

const uri ='mongodb+srv://Phoenix:illya_kiyev26@unit.ouvi75j.mongodb.net/?retryWrites=true&w=majority&appName=Unit';

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000
      }).then(() => {
        console.log("Connected to MongoDB Atlas");
      }).catch(err => {
        console.error("Could not connect to MongoDB Atlas...", err);
      });
