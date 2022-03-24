import mongoose from "mongoose"

mongoose.connect('mongodb://root:gaston@mongo:27017')
  .then(db => {
      console.log('DDBB is connected')
  })
  .catch(err => {
    console.error('DDBB ERROR', err);
  })