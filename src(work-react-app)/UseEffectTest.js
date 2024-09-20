import React, {useState, useEffect} from "react";

function MyComponent(){
    const [count, SetCount] = useState(0);

    useEffect(()=>{
        console.log(`you clickend ${count} times`)
    },[count])

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => SetCount(count+1)}>Click me</button>
        </div>
    )
}
export default MyComponent;