import { finish, preparation, rest, work } from "../components/Timer";
import { delay, getDOMElementByid, setRemoveClassName, setRemoveClassNameAll } from "../helpers";
import { stateSettings } from "../state";

export const incrementHandler = (event: any) => {
    const dataType = event.target.dataset.increment;

    if (dataType === "preparation") {
        setRemoveClassNameAll("increment", "increment-preparation", "click-active", 100);

        stateSettings.countPreparation !== 0 &&
            (getDOMElementByid('preparationNum').innerText = `${--stateSettings.countPreparation}`);

        stateSettings.countPreparation === 0 &&
            setRemoveClassNameAll("number", "preparationNum", "stop-counter", 1000);

    } else if (dataType === "work") {
        setRemoveClassNameAll("increment", "increment-work", "click-active", 100);

        stateSettings.countWork !== 1 &&
            (getDOMElementByid('workNum').innerText = `${--stateSettings.countWork}`);

        stateSettings.countWork === 1 &&
            setRemoveClassNameAll("number", "workNum", "stop-counter", 1000);

    } else if (dataType === "rest") {
        setRemoveClassNameAll("increment", "increment-rest", "click-active", 100);

        stateSettings.countRest !== 0 &&
            (getDOMElementByid('restNum').innerText = `${--stateSettings.countRest}`);

        stateSettings.countRest === 0 &&
            setRemoveClassNameAll("number", "restNum", "stop-counter", 1000);

    } else if (dataType === "cycles") {
        setRemoveClassNameAll("increment", "increment-cycles", "click-active", 100);

        stateSettings.countCyrcle !== 1 &&
            (getDOMElementByid('cyrcleNum').innerText = `${--stateSettings.countCyrcle}`);

        stateSettings.countCyrcle === 1 &&
            setRemoveClassNameAll("number", "cyrcleNum", "stop-counter", 1000);
    }
};

export const decrementHandler = (event: any) => {
    const dataType = event.target.dataset.decrement;
    if (dataType === "preparation") {
        setRemoveClassNameAll("decrement", "decrement-preparation", "click-active", 100);

        getDOMElementByid('preparationNum').innerText = `${++stateSettings.countPreparation}`;
    } else if (dataType === "work") {
        setRemoveClassNameAll("decrement", "decrement-work", "click-active", 100);

        getDOMElementByid('workNum').innerText = `${++stateSettings.countWork}`;
    } else if (dataType === "rest") {
        setRemoveClassNameAll("decrement", "decrement-rest", "click-active", 100);

        getDOMElementByid('restNum').innerText = `${++stateSettings.countRest}`;
    } else if (dataType === "cycles") {
        setRemoveClassNameAll("decrement", "decrement-cycles", "click-active", 100);

        getDOMElementByid('cyrcleNum').innerText = `${++stateSettings.countCyrcle}`;
    }
};

const showPraparation = async ():Promise<void> => {
    preparation(stateSettings.countPreparation)
    await delay(stateSettings.countPreparation * 1000)
    trainingСycle(training, stateSettings.countCyrcle)
}

const training = async ():Promise<void> => {
    work(stateSettings.countWork)
    await delay(stateSettings.countWork * 1000)
    if (stateSettings.countRest !== 0) {
        rest(stateSettings.countRest)
        await delay(stateSettings.countRest * 1000);
    }
}

const trainingСycle = (fun: Function, count: number) => {
    return count === 0 ? finish() : fun().then(() => trainingСycle(fun, count - 1))
}

export const footerBtnHandler = () => {
    location.href = location.href
}

export const startTimerHandler = () => {
    setRemoveClassName(getDOMElementByid('btn-start'), 'click-active', 100)
    stateSettings.countPreparation === 0 ? trainingСycle(training, stateSettings.countCyrcle) :
    showPraparation()
}





