const logger = (store) => (next) => (action) => {
    console.group(action.type);
        console.log("Action: ", action);
        const returnVal = next(action);
        console.log("New State: ", store.getState());
    console.groupEnd()
    return returnVal;
}

export default logger;