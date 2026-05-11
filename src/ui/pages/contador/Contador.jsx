import React from 'react'
import {CounterProvider} from "../../../context/CounterContext.jsx";
import Counter from "../../components/contador/Counter.jsx";

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