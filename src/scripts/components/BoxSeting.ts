import { render } from "../helpers";

const timerContainer = <HTMLElement>document.querySelector(".timer-container");


const createBoxSeting = () => {
    return `<div class="settings-container">
    <div class="preparation">
      <div class="box-picker">
        <div class="title-picker">Подготовка</div>
        <div class="picker">
          <button id="increment-preparation" data-increment="preparation" class="increment">&ndash;</button>
          <div id="preparationNum" class="number">0</div>
          <button id="decrement-preparation" data-decrement="preparation" class="decrement">+</button>
        </div>
      </div>
    </div>
    <div class="work">
      <div class="box-picker">
        <div class="title-picker">Работа</div>
        <div class="picker">
          <button id="increment-work" data-increment="work" class="increment">&ndash;</button>
          <div id="workNum" class="number">0</div>
          <button id="decrement-work" data-decrement="work" class="decrement">+</button>
        </div>
      </div>
    </div>
    <div class="rest">
      <div class="box-picker">
        <div class="title-picker">Отдых</div>
        <div class="picker">
          <button id="increment-rest"  data-increment="rest" class="increment">&ndash;</button>
          <div id="restNum" class="number">0</div>
          <button id="decrement-rest" data-decrement="rest"  class="decrement">+</button>
        </div>
      </div>
    </div>
    <div class="cycles">
      <div class="box-picker">
        <div class="title-picker">Циклы</div>
        <div class="picker">
          <button id="increment-cycles"  data-increment="cycles" class="increment">&ndash;</button>
          <div id="cyrcleNum" class="number">0</div>
          <button id="decrement-cycles" data-decrement="cycles"  class="decrement">+</button>
        </div>
      </div>
    </div>
    <button id="btn-start" data-btn="start" class="start-button">старт</button>
  </div>`
};

export const setBoxSeting = () => {
    render(timerContainer, createBoxSeting())
}




