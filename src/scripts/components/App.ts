import { decrementHandler, incrementHandler, startTimerHandler } from '../eventhandlers';
import { setHandlerClick, setHandlerClickAll } from '../helpers';
import { setBoxSeting } from './BoxSeting';
import { setScreenClock } from './ScreenClock';

export const App = () => {
  setScreenClock();
  setBoxSeting();
  setHandlerClickAll('increment', incrementHandler);
  setHandlerClickAll('decrement', decrementHandler);
  setHandlerClick('btn-start', startTimerHandler);

};




