import React from "react";

function Car(props) { var car = "Mazda" ; var type ="Business Pack"; var color= "red"
    return (
        <div>
            <ol >
                <li>{props.car}</li>
                <li>{props.type}</li>
                <li>{props.color}</li>
            </ol>


            <img
                src={props.image}/>

        </div>


    )
}
export default Car;