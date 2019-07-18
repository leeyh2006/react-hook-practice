import React, {useState, useEffect, Fragment} from 'react';
import './App.css';
import './Counter';
import Counter from "./Counter";
import Info from './Info';
import ContextSample from './ContextSample';
import Average from "./Average";


const App = () => {

    const [visible, setVisible] = useState(false);

    return (
        <Fragment>
            <Counter/>
            <Info/>
            <Average/>
        </Fragment>


    );
}

export default App;
