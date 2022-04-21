import {
  delay,
  getDOMElementByid,
  getQuerySelector,
  removeRender,
  setRemoveClassName,
} from "../helpers";
import { createBoxPreparation } from "./BoxPreparation";
import { setBoxSeting } from "./BoxSeting";

let counter: any = null;

export const preparation = (count: number) => {
  setRemoveClassName(getDOMElementByid("screen"), "preparation", count * 1000);
  setRemoveClassName(getDOMElementByid("header"), "preparation", count * 1000);

  getQuerySelector("timer-container").innerHTML = createBoxPreparation(
    "подготовка",
    count,
    ""
  );
  counter = setInterval(
    () => (getQuerySelector("preparation-counter").innerText = `${--count}`),
    1000
  );
};

export const work = (count: number) => {
  setRemoveClassName(getDOMElementByid("screen"), "work", count * 1000);
  setRemoveClassName(getDOMElementByid("header"), "work", count * 1000);

  clearInterval(counter);
  getQuerySelector("timer-container").innerHTML = createBoxPreparation(
    "работа",
    count,
    ""
  );
  counter = setInterval(
    () => (getQuerySelector("preparation-counter").innerText = `${--count}`),
    1000
  );
};

export const rest = (count: number) => {
  setRemoveClassName(getDOMElementByid("screen"), "rest", count * 1000);
  setRemoveClassName(getDOMElementByid("header"), "rest", count * 1000);

  clearInterval(counter);
  getQuerySelector("timer-container").innerHTML = createBoxPreparation(
    "отдых",
    count,
    ""
  );
  counter = setInterval(
    () => (getQuerySelector("preparation-counter").innerText = `${--count}`),
    1000
  );
};

export const finish = () => {
  clearInterval(counter);
  getQuerySelector("timer-container").innerHTML = createBoxPreparation(
    "финиш",
    "ура,победа!",
    "finish"
  );
  setRemoveClassName(getDOMElementByid("screen"), "finish", 5000);
  delay(5000).then(setBoxSeting);
};
