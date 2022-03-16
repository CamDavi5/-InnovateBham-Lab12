import Greeter from './components/Greeter'
import React, { useState, useEffect } from 'react';

const App = () => {
    const [ username, changeUsername ] = useState('');
    const [ loaded, changeLoaded ] = useState(false);

    const updateUsername = (e) => {
        changeUsername(e.target.value);
    }
    
    const updateLoaded = (e) => {
        changeLoaded(true);
    }

    useEffect(async () => {
        setTimeout(() => {
            changeLoaded(true);
        }, 3000)
    }, []);

    if (loaded === false) {
        return (
            <>
                <header>Website loading...</header>
                <button onClick={updateLoaded}>This is the power of science!</button>
            </>
        )
    }

    return (
        <div>
            <Greeter name="Senku" phrase="Hello there extraordinary scientist" />
            <Greeter name="Taiju" phrase="Hello there loveable meathead" />
            <Greeter name="Yuzuriha" phrase="Hello there ultimate craftswoman" />
            <input value={username} onChange={updateUsername} type="text" name="" id="" />
            <p>You are logging in as: {username}</p>
            <h1>This is exhilarating</h1>
        </div>
    )
}

export default App;