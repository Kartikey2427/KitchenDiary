const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connectioon error:'));
db.once('open', function(){
    console.log('connected');
    
})


require('./Category');
require('./Recipe');