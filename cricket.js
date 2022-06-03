const { EventNotifier } = require('./eventNotifier.js');
const { Innings } = require('./innings.js');

const startMatch = (eventNotifier, innings) => {
  const events = eventNotifier.getEvents();

  const intervalId = setInterval(() => {
    const index = Math.floor(Math.random() * events.length);
    const event = events[index];
    eventNotifier.notify(event, innings);
    innings.display(event);
    if (innings.isGameOver()) {
      console.log('Innings over!!');
      clearInterval(intervalId);
    }
  }, 2000);
};

const playInnings = () => {
  const innings = new Innings(30, 5);
  const eventNotifier = new EventNotifier();
  eventNotifier.register('dot-ball', () => innings.dot());
  eventNotifier.register('one-run', () => innings.single());
  eventNotifier.register('two-runs', () => innings.double());
  eventNotifier.register('four', () => innings.boundary());
  eventNotifier.register('six', () => innings.overBoundary());
  eventNotifier.register('out', () => innings.wicket());

  startMatch(eventNotifier, innings);
};

playInnings();
