/**
 * ------Loop-----
 * */ 
// 1.Display 'Aj amr mon vlo nei' for 39 times
var mon = 1;
while(mon <= 39){
    // console.log('Aj mon vlo nei', mon);
    mon++;
}

//2. Display numbers between 58 to 98
var number = 58;
while(number<= 98){
    // console.log(number);
    number++;
}

//3. show all even numbers from 412 to 456
var evenNumber = 412;
while (evenNumber<= 456){
    // console.log(evenNumber);
    evenNumber += 2;
}

//4. Show all odd numbers from 581  to 623
var oddNumber = 581;
while(oddNumber<=623){
    // console.log(oddNumber);
    oddNumber += 2;
}

//5. Difference between while loop and for loop
// (google it)

// 6. Declare an array for all the topics that you have learned last few days display then as output
var allTopics = [ 'html', 'css', 'while loop', 'for loop', 'array', 'if else'];
// console.log(allTopics);

// 7. Create an array for all the mobile phones. Display all the elements of the array by using a while loop
var mobilePhones = [ 'nokia', 'vivo', 'samsung', 'huawei'];
 var i = 0;
//  while(i<mobilePhones.length){
//     var phone = mobilePhones[i];
//     console.log(phone);
//     phone++;
//  }


// 8. Run a loop from 30 to 86. this loop will stop if the values get higher than 44
for(var i = 30; i< 86; i++){
    // console.log(i);
    if(i> 44){
        break;
    }
}

// 9.write the price of the books that you have.
// Display the prices if the prices is lower than 200
var bookPrices = [ 462, 123, 164, 300, 420, 200,199, 165];
for(var i =0; i<bookPrices.length; i++){
    var book = bookPrices[i];
    if(book > 200){
        continue;
    }
    // console.log(book);
}

