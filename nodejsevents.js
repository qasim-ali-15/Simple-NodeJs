const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off the MOTOR!');
  setTimeout(() => {
    console.log('Please turn off the MOTOR! Its the gentle remainder!!')
  }, 3000);
});

console.log('The script is running.')
myEmitter.emit('WaterFull');
console.log('The script is still running.')