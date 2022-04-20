import { render } from "../helpers";

const clock = <HTMLElement>document.querySelector(".clock");

function getCurrentTime(): string {
  return new Date().toLocaleTimeString().slice(0, -3);
}

export const setScreenClock = () => setInterval(() => render(clock, getCurrentTime()), 1000);

