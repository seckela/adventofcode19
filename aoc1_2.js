let massArray = [provided masses...]
function fuelCounter(masses){
    let fuelSum = 0;
    for(let i = 0; i < masses.length; i++){
        let tempFuel = Math.floor(masses[i]/3)-2;
        fuelSum += fuelFuel(tempFuel) + tempFuel;
    }
    return fuelSum
}

function fuelFuel(fuel){
    let addedFuel = 0;
    while(fuel > 0){
        fuel = Math.floor(fuel/3)-2;
        if(fuel >= 0){
            addedFuel += fuel;
        }
    }
    return addedFuel;
}

fuelCounter(massArray);