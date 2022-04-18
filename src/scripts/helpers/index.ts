export const interval = (ms:number, fun:any) => {
    return new Promise<string | void>((resolve) => {
        setInterval(() => fun, ms)
    })
}

export const render = (element:HTMLElement, arg:any) => {
    element.innerHTML = arg;
} 