import { useState } from "react";

export default function EventHandalar () {

let [count , setCount] = useState(0);
function increaseCount () {
    setCount(count = count + 1)
    console.log(count);
}

function deseaseCount () {
    setCount(count = count -1);
    console.log(count );
}

return (
    <div>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
        <button onClick={deseaseCount}>-</button>

    </div>
)

}