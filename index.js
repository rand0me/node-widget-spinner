const { Server } = require('karma');
const karma = require('./karma.conf');

const server = new Server( karma, onExit );
server.start();

function onExit(code) {
    console.log("\nGoodbye! Code " + code);
}