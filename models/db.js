const mongoose = require('mongoose');
const mongo_url = process.env.MONGODB_URL ;

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(mongo_url)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.log("Error connecting to MongoDB:", err);
        });
}