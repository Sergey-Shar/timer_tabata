import { getQuerySelector, render } from '../helpers';
import { setHeader } from './Header';


const createBoxSeting = () => {
  setHeader('Настройка');
  return `<div id="settings" class="settings-container">
    <div class="preparation">
      <div class="box-picker">
        <div class="title-picker">Подготовка</div>
        <div class="picker">
          <button id="increment-preparation" class="increment">&ndash;</button>
          <div id="preparationNum" class="number">0</div>
          <button id="decrement-preparation" class="decrement">+</button>
        </div>
      </div>
    </div>
    <div class="work">
      <div class="box-picker">
        <div class="title-picker">Работа</div>
        <div class="picker">
          <button id="increment-work" class="increment">&ndash;</button>
          <div id="workNum" class="number">1</div>
          <button id="decrement-work" class="decrement">+</button>
        </div>
      </div>
    </div>
    <div class="rest">
      <div class="box-picker">
        <div class="title-picker">Отдых</div>
        <div class="picker">
          <button id="increment-rest" class="increment">&ndash;</button>
          <div id="restNum" class="number">0</div>
          <button id="decrement-rest" class="decrement">+</button>
        </div>
      </div>
    </div>
    <div class="cycles">
      <div class="box-picker">
        <div class="title-picker">Циклы</div>
        <div class="picker">
          <button id="increment-cycles" class="increment">&ndash;</button>
          <div id="cyrcleNum" class="number">1</div>
          <button id="decrement-cycles" class="decrement">+</button>
        </div>
      </div>
    </div>
    <button id="btn-start" data-btn="start" class="start-button">старт</button>
  </div>`;
};

export const setBoxSeting = () => {
  render(getQuerySelector('timer-container'), createBoxSeting());
};




