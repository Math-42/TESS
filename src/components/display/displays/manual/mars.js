const StandardDisplay = require('../../standardDisplay');

module.exports = class Display extends StandardDisplay {
    constructor() {
        super('Manual_Mars');
    }
    build() {
        this.htmlComponent.innerHTML = `
			<fieldset class="package">
                <legend class="packageTitle">Our Red Planet</legend>
                <div class="row">
                    <span class="col glow" align='justify'>&nbsp;&nbsp;The red planet, our neighbor that you know we are planning to visit in 2030, but first of all, let’s learn a little bit about mars. Mars is the fourth planet in the solar system, approximately 130899 km from the sun. Mars is about half the size of earth with a radius of 3,390 kilometers (2,106 miles). <br>
                    &nbsp;&nbsp;Mars has a dense core at its center, something between 930 and 1300 miles (1,500 to 2,100 kilometers) in radius. It’s made of iron, nickel and sulfur. Surrounding the core is a rocky mantle between 770 and 1,170 miles (1,240 to 1,880 kilometers) thick, and above that, a crust made of iron, magnesium, aluminum, calcium and potassium. This crust is between 6 and 30 miles (10 to 50 kilometers) deep. <br>
                    </span> 
                    <img src="../assets/images/MarsRotate.gif" class="col DSNmanual"></img>
                </div>
                <div class="row">
                    <span class="col glow" align='justify'> &nbsp;&nbsp;Mars has no global magnetic field today, but areas of the Martian crust in the southern hemisphere are highly magnetized, indicating traces of a magnetic field from 4 billion years ago. <br>
                    &nbsp;&nbsp;The temperature can be high as 20 degrees Celsius or as low as about -153 degrees Celsius. It happens because the atmosphere is so thin and the heat from the Sun easily escapes this planet. <br>
                    &nbsp;&nbsp;But might you ask: how Mars is formed? Not just Mars but all the rocky planets of the inner solar system? Well we want to answer that question, so we build InSight. You will understand a little more later… Now that you understand a little bit about your neighbour, let’s continue playing a little bit more to really get Mars. <br>
                    </span> 
                </div>
            </fieldset>
        
        `
    }
}