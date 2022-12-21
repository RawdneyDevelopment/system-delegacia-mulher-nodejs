const mongoose = require('mongoose');
require('dotenv').config();
const username = process.env.DB_NAME;
console.log(username);
const password = process.env.DB_PASS;
console.log(password);
try {
    let connect = mongoose.connect(
        `mongodb+srv://${username}:${password}@cluster0.di5dfmm.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );
    module.exports = connect;
} catch (error) {
    console.info('Error', error);
}