import React,{useState} from "react"

function Sol1 (){

    const[eating, SetEating] = useState(['초콜릿','사탕']);
    const[value, SetValue] = useState("");

    const inputHandler = (e) => {
        SetValue(e.target.value)
    }

    // 버튼을 클릭했을 때 value를 eating에 추가
    const clickHandler = () =>{
        SetEating([value,...eating])
    }

    return(
        <div>
            <input onChange={inputHandler} type="text" />
            <button onClick={clickHandler}>추가</button>
            <ul>
                {eating.map(item => <li>{item}</li>)}
            </ul>            
        </div>
    )

}
export default Sol1;