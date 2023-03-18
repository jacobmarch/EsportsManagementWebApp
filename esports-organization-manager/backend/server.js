const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

const peopleRouter = require('./routes/people');
const eventsRouter = require('./routes/events');
const teamsRouter = require('./routes/teams');

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = "YOUR_MONGODB_CONNECTION_STRING";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Use the routers
app.use('/api/people', peopleRouter);
app.use('/api/events', eventsRouter);
app.use('/api/teams', teamsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
