import { useState, useEffect } from "react";
import axios from "axios";
import HouseInfo from "./HouseInfo";

const Form = () => {

    const [house, setHouse] = useState('placeholder');
    const [names, setNames] = useState([]);

    useEffect(() => {
        axios({
            baseURL: `http://hp-api.herokuapp.com/api/characters/house/${house}`,
            method: 'GET',
            dataResponse: 'json',
        }).then((data) => {
            console.log(data);
            setNames(data)
        })
    }, [house])

    const handleChange = (event) => {
        event.preventDefault();

        console.log(event.target.value)

        setHouse(event.target.value)
    }

    return (
        <main>
        <form action="" onSubmit={handleChange}>
            <select name="house" id="house" value={house} onChange={handleChange}>
                <option value="placeholder" disabled>Select house</option>
                <option value="gryffindor">Gryffindor</option>
                <option value="hufflepuff">Hufflepuff</option>
                <option value="slytherin">Slytherin</option>
                <option value="ravenclaw">Ravenclaw</option>
            </select>
        </form>
        <HouseInfo names={names}/>
        </main>
    )
}

export default Form;
