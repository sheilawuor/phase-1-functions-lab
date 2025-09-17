// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25; 
    } else {
        return "cannot travel that far"; 
    }
}


console.log(distanceFromHqInBlocks(43)); 
console.log(distanceFromHqInFeet(50)); 
console.log(distanceTravelledInFeet(43, 48)); 
console.log(calculatesFarePrice(34, 32));
console.log(calculatesFarePrice(10, 60)); 