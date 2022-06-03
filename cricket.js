const { EventEmitter } = require('events');
const { Innings } = require('./innings.js');

const startMatch = (eventEmitter, innings) => {
  const events = eventEmitter.eventNames();

  const intervalId = setInterval(() => {
    const index = Math.floor(Math.random() * events.length);
    const event = events[index];
    eventEmitter.emit(event, innings);
    innings.display(event);
    if (innings.isGameOver()) {
      console.log('Innings over!!');
      clearInterval(intervalId);
    }
  }, 2000);
};

const playInnings = () => {
  const innings = new Innings(30, 5);
  const eventEmitter = new EventEmitter();
  eventEmitter.on('dot-ball', () => innings.dot());
  eventEmitter.on('one-run', () => innings.single());
  eventEmitter.on('two-runs', () => innings.double());
  eventEmitter.on('four', () => innings.boundary());
  eventEmitter.on('six', () => innings.overBoundary());
  eventEmitter.on('out', () => innings.wicket());

  startMatch(eventEmitter, innings);
};

playInnings();
