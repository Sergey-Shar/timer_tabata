
import { decrementHandler, incrementHandler, startTimerHandler } from "../eventhandlers";
import { setHandlerCklick, setHandlerClickAll } from "../helpers";
import { setBoxSeting } from "./BoxSeting";
import { setHeader } from "./Header"
import { setScreenClock } from "./ScreenClock"


export const App = () => {
    setScreenClock()
    setHeader("настройка")
    setBoxSeting()
    setHandlerClickAll("increment", incrementHandler)
    setHandlerClickAll("decrement", decrementHandler)
    setHandlerCklick('start-button', startTimerHandler)
}




