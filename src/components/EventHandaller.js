export default function EventHandalar () {

let count = 0;
function increaseCount () {
    count ++; // can't rerender browser that why we use state
    console.log(count);
}

function deseaseCount () {
    count --; // can't rerender browser that why we use state
    console.log(count);
}
console.log(count);

return (
    <div>
        <span>{count}</span>
        <button onClick={increaseCount}>+</button>
        <button onClick={deseaseCount}>-</button>

    </div>
)

}