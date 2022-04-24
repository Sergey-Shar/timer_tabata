import { render } from '../helpers';

const header = <HTMLElement>document.querySelector('.header');

const createHeaderTitle = (title:string):string => {
  return `<div class="title">${title}</div>`;
};

export const setHeader = (title:string) => {
  render(header, createHeaderTitle(title));
};