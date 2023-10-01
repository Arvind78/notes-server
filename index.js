// Import required packages
const jsonServer = require("json-server"); // Import the json-server package
const dotenv = require("dotenv").config(); // Load environment variables from a .env file

// Create an instance of the JSON server
const server = jsonServer.create();

// Create a router that will handle requests based on a JSON file (Notes.json in this case)
const router = jsonServer.router("Notes.json");

// Create middlewares for the JSON server
const middlewares = jsonServer.defaults();

// Define the port for the server, using an environment variable (PORT) if available, otherwise use port 3000
const port = process.env.PORT || 3000;

// Use the middlewares
server.use(middlewares);

// Use the router to handle API requests
server.use(router);

// Start the server and listen on the specified port
server.listen(port, (res, err) => {
  if (err) {
    console.error("Error starting JSON server:", err);
  } else {
    console.log("JSON server started on port", port);
  }
});
