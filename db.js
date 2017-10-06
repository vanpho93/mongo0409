const mongoose = require('mongoose');

const uri = 'mongodb://localhost/node0409';

mongoose.connect(uri, { 
    useMongoClient: true, 
    promiseLibrary: global.Promise 
});

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
    desc: { type: String },
    video: { type: String }
});

const Product = mongoose.model('product', ProductSchema);

Product.find({})
.then(x => console.log(x));

// mongoose.connection.once('open', () => console.log('db started'))
