import React, {useState, useEffect} from 'react';

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [dogPic, setDogPic] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setDogPic(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return <div><img src={dogPic} alt="A Random Dog" /></div>

};

export default App;