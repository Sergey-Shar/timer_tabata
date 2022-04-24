import { footerBtnHandler } from '../eventhandlers';
import {
  getDOMElementByid,
  getQuerySelector,
  setHandlerClick,
  setRemoveClassName,
} from '../helpers';
import { createBoxPreparation } from './BoxPreparation';

export let counter: number;

export const preparation = (count: number) => {
  setRemoveClassName(getDOMElementByid('screen'), 'preparation', count * 1000);
  setRemoveClassName(getDOMElementByid('header'), 'preparation', count * 1000);

  getQuerySelector('timer-container').innerHTML = createBoxPreparation(
    'Подготовка',
    count,
    '',
  );

  setHandlerClick('reset-timer', footerBtnHandler);
  counter = window.setInterval(
    () => (getQuerySelector('preparation-counter').innerText = `${--count}`),
    1000,
  );
};

export const work = (count: number) => {
  setRemoveClassName(getDOMElementByid('screen'), 'work', count * 1000);
  setRemoveClassName(getDOMElementByid('header'), 'work', count * 1000);

  clearInterval(counter);
  getQuerySelector('timer-container').innerHTML = createBoxPreparation(
    'Работа',
    count,
    '',
  );
  setHandlerClick('reset-timer', footerBtnHandler);

  counter = window.setInterval(
    () => (getQuerySelector('preparation-counter').innerText = `${--count}`),
    1000,
  );
};

export const rest = (count: number) => {
  setRemoveClassName(getDOMElementByid('screen'), 'rest', count * 1000);
  setRemoveClassName(getDOMElementByid('header'), 'rest', count * 1000);

  clearInterval(counter);
  getQuerySelector('timer-container').innerHTML = createBoxPreparation(
    'Отдых',
    count,
    '',
  );
  setHandlerClick('reset-timer', footerBtnHandler);

  counter = window.setInterval(
    () => (getQuerySelector('preparation-counter').innerText = `${--count}`),
    1000,
  );
};

export const finish = () => {
  clearInterval(counter);
  getQuerySelector('timer-container').innerHTML = createBoxPreparation(
    'Финиш',
    'Ура, победа!',
    'finish',
  );
  getQuerySelector('reset-btn').innerText = 'настройки';
  getDOMElementByid('screen').classList.add('finish');
  setHandlerClick('reset-timer', footerBtnHandler);
};
