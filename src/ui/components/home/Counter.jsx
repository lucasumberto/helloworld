import {useCounter} from "../../../context/CounterContext.jsx";
import './Counter.css';

function Counter() {
    const {count, increment, decrement} = useCounter();

    return(<>
            <div className='hw-contador-title'>Contador</div>
            <div>Exemplo de uso do context API</div>
        <button
            className="counter"
            onClick={increment}
        >
            Increment +
        </button>
        <button
            className="counter"
            onClick={decrement}
        >
            Decrement -
        </button>

        Contador: {count}

        <button
            className="consolelog"
            onClick={() => console.log("TESTE: ", count)}
        >
            Console.log
        </button>
    </>
    );

}

export default Counter