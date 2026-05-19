import {CounterProvider} from "../../../context/CounterContext.tsx";
import Counter from "../../components/contador/Counter.tsx";

function Contador() {

    return (
        <>
            <CounterProvider>
                <Counter/>
            </CounterProvider>
        </>
    )
}

export default Contador