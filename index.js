
function distanceFromHqInBlocks(location) { 
    let hqLocation = 42;  
    if (location > hqLocation){
        return location - hqLocation
    }
    else {
        return hqLocation - location
    }
  }
 // console.log(distanceFromHqInBlocks(50))

function  distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264
}
//console.log(distanceFromHqInFeet(34))
function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination) * 264
    }
    else{
        return (destination -start) * 264
    }

}
//console.log(distanceTravelledInFeet(50, 40))
function calculatesFarePrice(start, destination) {
 let distance =  distanceTravelledInFeet(start, destination)
 
 if (distance <= 400){
 return 0
 } 
 else if(distance>400 && distance<=2000){
  return (distance - 400)*0.02 
 }
 else if (distance>2000 && distance <=2500){
    return 25
 }
 else{
    return 'cannot travel that far'
 }
  }
  console.log (calculatesFarePrice(34, 32))