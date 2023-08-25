// for(var i = 1; i<=20; i++){
//     console.log(i);
//     if(i>10){
//         break;
//     }
// }

// var roastGiven = 0;
// while(roastGiven <10){
//     console.log('gift anci,roast den');
//     roastGiven++;
//     if(roastGiven > 5){
//         break;
//     }
// }

// var items = [ 'bottle', 'pen', 'mouse', 'sunglass'];
// for(var i = 0; i < items.length; i++){
//     var item = items[i];
//     if(item=='pen'){
//         break
//     }
//     console.log(item);
// }

var numbers = [ 23, 56, 23, 75, 76, 123,87, 65,98, 154];
for(var i = 0 ; i <numbers.length; i++){
    var number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}