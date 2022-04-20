
export const  delay = (ms:number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), ms);
    });
  }

  export const getDOMElementByid = (element:string) =>  <HTMLElement>document.getElementById(element)

  export const getQuerySelectorAll = (element:string) => document.querySelectorAll(`.${element}`)

  export const getQuerySelector = (element:string) => document.querySelector(`.${element}`)

  export const setRemoveClassNameAll = (element:string, id:string, className:string,ms:number) => {
    getQuerySelectorAll(element).forEach(i => i.id === id && setRemoveClassName(i, className, ms) )
 }

  export const setRemoveClassName = (element: HTMLElement| Element,className:string,ms:number) => {
    element.classList.add(className)
    delay(ms).then(() => element.classList.remove(className))
}

export const render = (element:HTMLElement, arg:any) => {
    element.innerHTML =  arg;
} 

export const setHandlerClickAll = (element:string,fun:any) => {
  getQuerySelectorAll(element)?.forEach(item => item.addEventListener('click',fun))
    }

export const setHandlerCklick = (element:string,fun:any) => {
  getQuerySelector(element)?.addEventListener('click',fun)
}





