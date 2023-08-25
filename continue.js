var numbers = [ 23, 56, 23, 75, 76, 123,87, 65,98, 154];

for(var i = 0 ; i <numbers.length; i++){
    var number = numbers[i];
    if(number > 50){
          continue;
    }
    console.log(number);
}