const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

// Load env vars
dotenv.config();

// Connection to MongoDB database
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.listen({ port: port });
    })
    .then(res => {
        console.log(`Server running at ${res.url}`)
    })
    .catch(err => console.log(err));


/* const connectDB = async (server, port) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
        console.log(`Server listening on port ${port}`);
        return server.listen({ port });
    } catch (error) {
        console.error(`Error: ${error.message}`.red);
        process.exit(1);
    }
} */

// module.exports = connectDB;