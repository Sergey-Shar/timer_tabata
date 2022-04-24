import { finish, preparation, rest, work } from '../components/Timer';
import { delay, getDOMElementByid, setRemoveClassName, setRemoveClassNameAll } from '../helpers';
import { stateSettings } from '../state';


export const incrementHandler = (event:Event) => {

  const id = (<HTMLButtonElement>event.target).id;

  if (id === 'increment-preparation') {
    setRemoveClassNameAll('increment', 'increment-preparation', 'click-active', 100);

    stateSettings.countPreparation !== 0 &&
            (getDOMElementByid('preparationNum').innerText = `${--stateSettings.countPreparation}`);

    stateSettings.countPreparation === 0 &&
            setRemoveClassNameAll('number', 'preparationNum', 'stop-counter', 1000);

  } else if (id === 'increment-work') {
    setRemoveClassNameAll('increment', 'increment-work', 'click-active', 100);

    stateSettings.countWork !== 1 &&
            (getDOMElementByid('workNum').innerText = `${--stateSettings.countWork}`);

    stateSettings.countWork === 1 &&
            setRemoveClassNameAll('number', 'workNum', 'stop-counter', 1000);

  } else if (id === 'increment-rest' ) {
    setRemoveClassNameAll('increment', 'increment-rest', 'click-active', 100);

    stateSettings.countRest !== 0 &&
            (getDOMElementByid('restNum').innerText = `${--stateSettings.countRest}`);

    stateSettings.countRest === 0 &&
            setRemoveClassNameAll('number', 'restNum', 'stop-counter', 1000);

  } else if (id === 'increment-cycles') {
    setRemoveClassNameAll('increment', 'increment-cycles', 'click-active', 100);

    stateSettings.countCyrcle !== 1 &&
            (getDOMElementByid('cyrcleNum').innerText = `${--stateSettings.countCyrcle}`);

    stateSettings.countCyrcle === 1 &&
            setRemoveClassNameAll('number', 'cyrcleNum', 'stop-counter', 1000);
  }
};

export const decrementHandler = (event:Event) => {

  const id = (<HTMLButtonElement>event.target).id;
  
  if (id === 'decrement-preparation') {
    setRemoveClassNameAll('decrement', 'decrement-preparation', 'click-active', 100);

    getDOMElementByid('preparationNum').innerText = `${++stateSettings.countPreparation}`;
  } else if (id === 'decrement-work') {
    setRemoveClassNameAll('decrement', 'decrement-work', 'click-active', 100);

    getDOMElementByid('workNum').innerText = `${++stateSettings.countWork}`;
  } else if (id === 'decrement-rest') {
    setRemoveClassNameAll('decrement', 'decrement-rest', 'click-active', 100);

    getDOMElementByid('restNum').innerText = `${++stateSettings.countRest}`;
  } else if (id === 'decrement-cycles') {
    setRemoveClassNameAll('decrement', 'decrement-cycles', 'click-active', 100);

    getDOMElementByid('cyrcleNum').innerText = `${++stateSettings.countCyrcle}`;
  }
};

const showPraparation = async ():Promise<void> => {
  preparation(stateSettings.countPreparation);
  await delay(stateSettings.countPreparation * 1000);
  trainingСycle(training, stateSettings.countCyrcle);
};

const training = async ():Promise<void> => {
  work(stateSettings.countWork);
  await delay(stateSettings.countWork * 1000);
  if (stateSettings.countRest !== 0) {
    rest(stateSettings.countRest);
    await delay(stateSettings.countRest * 1000);
  }
};

const trainingСycle = (fun: () => Promise<void> , count: number):void | Promise<void> => {
  return count === 0 ? finish() : fun().then(() => trainingСycle(fun, count - 1));
};

export const footerBtnHandler = () => {
  // eslint-disable-next-line no-self-assign
  location.href = location.href;
};

export const startTimerHandler = () => {
  setRemoveClassName(getDOMElementByid('btn-start'), 'click-active', 100);
  stateSettings.countPreparation === 0 ? trainingСycle(training, stateSettings.countCyrcle) :
    showPraparation();
};





