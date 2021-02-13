const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const connectDB = require('./config/db');

// Load env vars 
dotenv.config();

// Set port
const port = process.env.PORT || 5000;

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

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

// Set Apollo Server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ( { req }) => ({ req })
});

// Establish connection to mongoDB
//connectDB(server, port);