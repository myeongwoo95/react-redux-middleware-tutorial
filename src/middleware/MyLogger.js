const myLogger = store => next => action => { 
    console.log(action);

    console.log(`\tPrev`, store.getState()); // action이 리듀서에서 처리가 되기 전 상태를 출력
    const result = next(action); // action을 다음 미들웨어, 다음 미들웨어가 없다면 리듀서에게 전달하겠다라는 의미
    console.log(`\tNext`, store.getState()); // action이 리듀서에서 처리가 된 후 상태를 출력
    
    return result; 
    // 여기서 반횐되는 result는 Container에서 dispatch 됐을때 반환될 값이다. 
    // 만약 return promise.resolve(); 라쓰면 dispatch 실행되고 promise를 받아 올 수 있는 것이다.
}

export default myLogger;