import React from "react";

const Form = (props) =>{
    return (
        <form onSubmit={props.weatherMethod}>
                <input class = "input" type = "text" name="city" placeholder="Город"></input>
                <button class = "button">Получить погоду</button>
        </form>
    )
}

export default Form;