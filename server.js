const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const logHistory = [];// Maintain log history in memory for new client connections

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // Replay existing log history for newly connected clients
  logHistory.forEach(message => {
    socket.emit('log', message);
  });

  require('./main'); // Connect to main.js
});

http.listen(3000, () => {
  // console.log('listening on *:3000');
});

// Broadcast logs to all connected clients and store in history
function logToClient(message) {
  logHistory.push(message);
  io.emit('log', message);
}

// Intercept and override console.log to broadcast logs to connected clients
const originalConsoleLog = console.log;
console.log = function() {
  const args = Array.from(arguments);
  // Serialize objects and join arguments for consistent log formatting
  const message = args.map(arg =>
    typeof arg === 'object' ? JSON.stringify(arg) : arg
  ).join(' ');

  logToClient(message);
  originalConsoleLog.apply(console, arguments); // Keep original console.log behavior
};

module.exports = { logToClient, console };