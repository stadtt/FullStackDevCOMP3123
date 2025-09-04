
//Shaffaq Hai 101500534
//Excersise 1
function capitlizeLetters(str){
    var testString = str
    var testArray = testString.split(" ")
    testArray = testArray.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    return console.log(testArray)
}
capitlizeLetters("the quick brown fox")
//Excersise 2
function max(a, b, c){
    var array = [a, b, c]
    var largest = array[0]
    array.forEach(int => { if (int > largest)
        {
        largest = int
    } } )
    return largest
}
console.log(max (1,0,1))
console.log(max (0,-10,-20))
console.log(max (1000,510,440))

//Excersise 3   
function Last3char(str){
    if (str.length < 3){
        return str
    }
    else{
        len = str.length
         var newString = str.slice(-3) + str.slice(0, len -3)
        return newString
    }
}
console.log(Last3char("Python"))
console.log(Last3char("JavaScript"))
console.log(Last3char("Hi"))

//Excersise 4
function angle_Type(angle){
    if (angle <0 ){
        return "Error"
    }
    else if (angle < 90){
        return "Acute angle"
    }
    else if (angle === 90){
        return "Right angle"
    }
    else if (angle < 180){
        return "Obtuse angle"
    }
    else if (angle === 180){
        return "Straight angle"
    }
}
console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))

//Excersise 5

function array_max_sum(array,num){
    var LargestSum = 0
    for (let i = 0;  i <= array.length-num ; i++) {
        let j = num;
        let k = i;
        var tempSum = array[i]
        while(j > 1 ){
            tempSum += array[k+1]
            j--
            k++
        }
        if(tempSum > LargestSum){
            LargestSum = tempSum
           
        }
    }
    return LargestSum
}
console.log(array_max_sum([1, 2, 3, 14, 5] , 2))
console.log(array_max_sum([2, 3, 5, 1, 6], 3))
console.log(array_max_sum([9, 3, 5, 1, 7], 2))
