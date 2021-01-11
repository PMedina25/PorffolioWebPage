const express = require('express');
const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const path = require('path');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

const port = process.env.PORT || 5000;

// Connection to MongoDB database
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
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

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ( { req }) => ({ req })
});