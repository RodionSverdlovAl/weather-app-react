import React from "react";

const Form = (props) =>{
    return (
        <form onSubmit={props.weatherMethod}>
                <input type = "text" name="city" placeholder="Город"></input>
                <button>Получить погоду</button>
        </form>
    )
}

export default Form;