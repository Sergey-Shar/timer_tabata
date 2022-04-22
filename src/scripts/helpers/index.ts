
export const delay = (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

export const getDOMElementByid = (element: string) => <HTMLElement>document.getElementById(element)

export const getQuerySelectorAll = (element: string) => document.querySelectorAll(`.${element}`)

export const getQuerySelector = (element: string) => <HTMLElement>document.querySelector(`.${element}`)


export const setRemoveClassNameAll = (element: string, id: string, className: string, ms: number) => {
  getQuerySelectorAll(element).forEach(i => i.id === id && setRemoveClassName(i, className, ms))
}

export const setRemoveClassName = (element: HTMLElement | Element, className: string, ms: number) => {
  element.classList.add(className)
  delay(ms).then(() => element.classList.remove(className))
}

export const render = (element: HTMLElement | Element, arg: any) => {
  element.innerHTML = arg;
}

export const removeRender = (element: string) => {
  getDOMElementByid(element).remove()
}

export const setHandlerClickAll = (element: string, fun: EventListenerOrEventListenerObject) => {
  getQuerySelectorAll(element)?.forEach(item => item.addEventListener('click', fun))
}

export const setHandlerClick = (element: string, fun: EventListenerOrEventListenerObject) => {
  getDOMElementByid(element)?.addEventListener('click', fun)
}





