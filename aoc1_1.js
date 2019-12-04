let massArray = [masses given...]
function fuelCounter(masses){
    let fuelSum = 0;
    for(let i = 0; i < masses.length; i++){
        fuelSum += Math.floor(masses[i]/3)-2;
    }
    return fuelSum
}

fuelCounter(massArray);