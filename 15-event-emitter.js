/* 
Event-Driven Programming: Listens for specific events, 
registered functions will be executed in response of these events
*/

const EventEmitter = require('events');

const customEmitter = new EventEmitter();

/*
ON   - listen for an event
EMIT - emit an event
*/

// 'response' = name of event/kind of event
customEmitter.on('response', () => {
  /*
  callback function when the event (in 
  this case event name 'response') happens
  */
  console.log(`Data recieving at first event listener !!`);
});

// listening to same even but doing different thing
customEmitter.on('response', (name, age) => {
  console.log(`Data recieved: ${name} is ${age} years old`);
})



/*
now we emit the event named 'response' and it gets 
listent to in the on function 
[first create event listener the emit the event]
*/
customEmitter.emit('response', 'John', 60);
