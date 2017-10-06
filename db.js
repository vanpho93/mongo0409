const mongoose = require('mongoose');

const uri = 'mongodb://localhost/node0409';

mongoose.connect(uri, { useMongoClient: true });
mongoose.Promise = global.Promise;

const ProductSchema = new mongoose.Schema({
    name: { type: String },
    image: { type: String },
    desc: { type: String },
    video: { type: String }
});

const Product = mongoose.model('product', ProductSchema);

// Product.find({})
// .then(products => console.log(products));

// Product.findById('59d764a3e9c1ff47f89c0dd0')
// .then(product => console.log(product));

// Product.find({ image: '3.jpg' })
// .then(product => console.log(product));

// const pr = new Product({ name: 'EDFG' });
// pr.save()
// .then((x) => console.log(x));

// Product.findByIdAndRemove('59d76f9e1d53efe983c776aa')
// .then(x => console.log(x));

// Product.findByIdAndUpdate('59d76f974025fee9782a2ee9', { name: 'edfg' })
// .then(x => console.log(x));

Product.findById('59d76f974025fee9782a2ee9', { name: 'edfg' })
.then(x => console.log(x));

// mongoose.connection.once('open', () => console.log('db started'))
