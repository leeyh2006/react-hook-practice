import React, {useState,useEffect} from 'react';
import './App.css';
import './Counter';
import Counter from "./Counter";
import Info from './Info';
import ContextSample from './ContextSample';


const App = () => {

    const [visible, setVisible] = useState(false);

    return (
        <ContextSample/>

    );
}

export default App;
