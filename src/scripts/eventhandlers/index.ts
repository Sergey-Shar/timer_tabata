import { getDOMElementByid, setRemoveClassName, setRemoveClassNameAll } from "../helpers";
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

        stateSettings.countWork !== 0 &&
            (getDOMElementByid('workNum').innerText = `${--stateSettings.countWork}`);

        stateSettings.countWork === 0 &&
            setRemoveClassNameAll("number", "workNum", "stop-counter", 1000);

    } else if (dataType === "rest") {
        setRemoveClassNameAll("increment", "increment-rest", "click-active", 100);

        stateSettings.countRest !== 0 &&
            (getDOMElementByid('restNum').innerText = `${--stateSettings.countRest}`);

        stateSettings.countRest === 0 &&
            setRemoveClassNameAll("number", "restNum", "stop-counter", 1000);

    } else if (dataType === "cycles") {
        setRemoveClassNameAll("increment", "increment-cycles", "click-active", 100);

        stateSettings.countCyrcle !== 0 &&
            (getDOMElementByid('cyrcleNum').innerText = `${--stateSettings.countCyrcle}`);

        stateSettings.countCyrcle === 0 &&
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

export const startTimerHandler = () => {
    setRemoveClassName(getDOMElementByid('btn-start'), 'click-active', 100)
}
