function stringToIntArray(inputString) {
    // Convert inputString from string and array of ints
    // Assume inputString is a string containing a space-separated list of integers

    return inputString.split(" ").map(function (x){
        return Number(x);
    });
}

function posNums(numList) {
    // Write a function which takes an array of numbers as input and returns**
    // a new array containing only the positive numbers in the given array.
    //
    // **NOTE - I will write the result to the HTML instead of returning it

    let newNumList = stringToIntArray(numList);             //convert numList from string to array of ints

    newNumList = newNumList.filter(function (num){          //filters array to include only positives
        return num > 0
    });

    if (newNumList.length === 0) {
        document.getElementById("id_result1").innerHTML += ` <span class="res">None are positive!</span>`
    } else {
        document.getElementById("id_result1").innerHTML += ` <span class="res">${newNumList.join(', ')}</span>`
    }
}

function evenNums(numList) {
    // Write a function which takes an array of numbers as input and returns**
    // a new array containing only the even numbers in the given array.
    //
    // **NOTE - I will write the result to the HTML instead of returning it

    let newNumList = stringToIntArray(numList);             //convert numList from string to array of ints

    newNumList = newNumList.filter(function (num){          //filters array to include only evens
        return num%2 === 0
    });

    if (newNumList.length === 0) {
        document.getElementById("id_result2").innerHTML += ` <span class="res">None are even!</span>`
    } else {
        document.getElementById("id_result2").innerHTML += ` <span class="res">${newNumList.join(', ')}</span>`
    }
}

function squareNums(numList) {
    // Write a function which takes an array of numbers as input and returns a new 
    // array containing result of squaring each of the numbers in the given array by two.
    //
    // **NOTE - I will write the result to the HTML instead of returning it

    let newNumList = stringToIntArray(numList);             //convert numList from string to array of ints

    newNumList = newNumList.map(function (num){          //maps to new array of squares of each element
        return num * num
    });

    if (newNumList.length === 0) {
        document.getElementById("id_result3").innerHTML += ` <span class="res">Enter some numbers!</span>`
    } else {
        document.getElementById("id_result3").innerHTML += ` <span class="res">${newNumList.join(', ')}</span>`
    }
}

function citiesTextareaToArray(inputString) {
    // function to take the string entered into the City Name and Temperature textarea 
    // and return it as an array where each item in the array is one row from the textarea
    // and each row is converted to an object with name and temp key-value pairs

    let x = inputString.split("\n").map(function (i) {return i.split(", ")});

    // x is now a 2-dim array. Need to convert each child array to an object with name and temp keys
    return x.map(function (val){
        return {
            name: val[0],
            temp: Number(val[1])
        }
    });
}

function cities1(cityTempList) {
    let cityArray = citiesTextareaToArray(cityTempList);    // Convert textarea string into array of city objects

    const coolCities = cityArray.filter(city => city['temp'] < 70.0);   //filter out the cities that are 70 degrees or hotter

    const coolCitiesArray = coolCities.map(x => x['name']);             //create array of just the city names

    document.getElementById("id_result4").innerHTML += ` <span class="res">${coolCitiesArray.join(', ')}</span>`
}

function cities2(cityTempList) {
    let cityArray = citiesTextareaToArray(cityTempList);    // Convert textarea string into array of city objects

    const citiesArray = cityArray.map(x => x['name']);             //create array of just the city names

    document.getElementById("id_result5").innerHTML += ` <span class="res">${citiesArray.join(', ')}</span>`
}

function goodJob(nameList) {
    let nameArray = nameList.split(", ");    // Convert textarea string into array of strings

    nameArray.forEach(x => 
    document.getElementById("id_result6").innerHTML += ` <span class="res">Good job, ${x}!</span><br>`)
}

function threeTimes(phrase) {
    function call3Times(fun) {
        fun();
        fun();
        fun();
    }

    function printPhrase() {
        document.getElementById("id_result7").innerHTML += `<br><span class="res">${phrase}</span>`
    }
    call3Times(printPhrase);
}

function nTimes(n, phrase) {
    function callNTimes(times, fun) {
        if (times>20) {times = 20;}                 //limit to 20 repeats
        for (let i = 0; i < times; i++) {fun();}
    }

    function printPhrase() {
        document.getElementById("id_result8").innerHTML += `<br><span class="res">${phrase}</span>`
    }
    callNTimes(n, printPhrase);
}

function strMultiply(str, times) {
    if (times>20) {times = 20;}            // limit times to max of 20

    let arr = Array(times).fill(str);    // Create an array of length times and fill it with str

    document.getElementById("id_result9").innerHTML += ` <span class="res">${arr.join('')}</span><br>`
}

function sortArray1(nameList) {
    let nameArray = nameList.split(", ").sort();    

    document.getElementById("id_result10").innerHTML += ` <span class="res">${nameArray.join(", ")}</span><br>`;
}

function sortArray2(nameList) {
    let nameArray = nameList.split(", ").sort();  //sort firt alphabetically so strings of same len will be alpha sorted
    nameArray.sort(function(a, b) {
        return a.length - b.length;
    });

    document.getElementById("id_result11").innerHTML += ` <span class="res">${nameArray.join(", ")}</span><br>`;
}

function sortArray3() {
    let products = [
        { name: 'Basketball', price: 12.00 },
        { name: 'Tennis Racquet', price: 66.00 },
        { name: 'Tennis Shorts', price: 59.00 },
        { name: 'Tennis Balls', price: 9.00 }
      ];

    products.sort(function(a, b) {
        return a.price - b.price;
    });

    products.forEach(function(x) {
        document.getElementById("id_result12").innerHTML += `<br><span class="res">${x.name}: $${x.price}</span>`;
    });
}

function fizzbuzz() {
    let word = `<span class="res">`;
    let numstart = parseInt(document.querySelector('[data-numstart]').value);
    let numend = parseInt(document.querySelector('[data-numend]').value);

    if (numstart > numend) {
        const temp = numstart;
        numstart = numend;
        numend = temp;
    };

    for (let i = numstart; i <= numend; i++) {
        if (i % 15 === 0) {word += `<strong style="color: blue">fizzbuzz</strong>`;}
        else if (i % 5 === 0) {word += `<i style="color: green">buzz</i>`;}
        else if (i % 3 === 0) {word += `<i style="color: purple">fizz</i>`;}
        else {word += `${i}`;};

        if (i < numend) {word += ', ';};
    };
    document.getElementById("id_result13").innerHTML += `${word}</span>`;

}

function clearResult(inputName, resultName, radioButtonList) {
    inputName.forEach(element => {document.getElementById(element).value = "";});
    // radioButtonList.forEach(element => {document.getElementById(element).removeAttribute("checked")});

    //This is supposed to reset any radio buttons to unchecked but it is not working
    if (radioButtonList.length > 0) {
        radioButtonList.forEach(element => {
            if (document.getElementById(element).hasAttribute("checked")) {
                document.getElementById(element).removeAttribute("checked");
            }
        });
    }
    document.getElementById(resultName).innerHTML = `Result: `;
}

