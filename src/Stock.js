import React from "react";
import Car from "./Cars";

function Stock() {
    return (
        <div>
            <div>
                <h1>Stock</h1>

            </div>
                <ol>
                    <Car car="Nissan qushqai" type="Business Pack" color="sky blue" image="../nissan qushqai.jpeg"/>

                    <Car car="Toyota Rav4" type="Classic Pack" color="silver" image="../toyota.jpeg"/>

                    <Car car="honda cr-v" type="Business Pack" color="wine" image="../honda cr-v.jpeg"/>

                    <Car car="nissan qushqai" type="Classic Pack"color="black" image="../nissan qushqaib.jpeg"/>

                    <Car car="nissan patrol" type="Business Pack" color="silver" image="../nissan patrol.jpeg"/>

                    <Car car="Mazda cx-5" type= "Business Park" color="red" image="../mazda cx-5.jpeg"/>

                    <Car car="Subaru Forester sti" type="Classic Pack" color="black" image="../subaru forester sti.jpeg"/>

                    <Car car="Nissan Patrol sti"  type="Business Pack" color="light brown" image="../nissan patrol sti.jpeg"/>

                    <Car car="mitsubishi pajero" type="Business Park" color="white" image="../Mitsubishi pajero.jpeg"/>

                    <Car car="subaru forester" type="Business Park" color="lemon" image=" ../subaru forester.jpeg"/>

                    <Car car="mazda cx-5" type="Business Pack" color="black" image="../mazda cx-5.jpeg"/>

                    <Car car="honda cr-v" type="Business Pack" color="red" image="../honda cr-v.jpeg"/>

                </ol>
            </div>
    )
                    }

export default Stock;

//props