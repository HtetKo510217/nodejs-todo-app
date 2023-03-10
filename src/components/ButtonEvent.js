export default function ButtonEvent ({count,onClick}) {

    return (
        <button onClick={onClick}>Click {count} times</button>
    );

}