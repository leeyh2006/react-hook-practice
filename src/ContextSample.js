import React, {createContext, useContext} from 'react';

const ThemeContext = createContext('black');

const ContextSmaple =() =>{
    const theme = useContext(ThemeContext);
    const style = {
        width : '24px',
        height : '24px',
        background : theme
    }
    return <div style={style}></div>
}

export default ContextSmaple;
