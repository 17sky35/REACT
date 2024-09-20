import React, { useEffect, useState } from 'react'

function Sol3(){
    const [count, SetCount] = useState(0);
    const [renderCount, SetRenderCount] = useState(0);

    const clickHandler = () => {
        SetCount(count + 1)
    }
    useEffect(() => {
        SetRenderCount(renderCount + 1);
        console.log('렌더링 완료')
    },[count])

    return(
        <div>
            <h3>Count : {count}</h3>
            <h3>렌더링 횟수 : {renderCount}</h3>
            <button onClick={clickHandler}>클릭</button>
        </div>
    )
}
export default Sol3