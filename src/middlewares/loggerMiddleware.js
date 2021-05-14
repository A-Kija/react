const loggerMiddleware = store => next => action => {

    // console.log('LOGGGGER: ', action)

    return next(action);
}

export default loggerMiddleware;