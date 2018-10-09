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


function exHelloYouCaps() {
    document.getElementById("id_result2").innerHTML = `Result: <span class="res">HELLO, ${document.getElementById("id_name2").value.toUpperCase()}!</span>`
}

function madlib() {
    document.getElementById("id_result3").innerHTML = `Result: <span class="res">${document.getElementById("id_name3").value}\'s favorite subject in school is ${document.getElementById("id_subj").value}.</span>`
}

function tipCalc() {
    let totBillAmt = Number(document.getElementById("id_billAmt").value);
    let tipAmt = 0;
    let tipRate = 0.1;
    let perPerson = 0;

    if (document.querySelector('input[name = "svc"]:checked').value === "good") {
        tipRate = 0.2;
    } else if (document.querySelector('input[name = "svc"]:checked').value === "fair") {
        tipRate = 0.15;
    }
    tipAmt = totBillAmt*tipRate
    totBillAmt += tipAmt
    perPerson = totBillAmt / Number(document.getElementById("id_billSplit").value)

    document.getElementById("id_result7").innerHTML = `Result: <span class="res">Tip Amount: $${tipAmt.toFixed(2)}</span>`
    document.getElementById("id_result7").innerHTML += ` <span class="res">Total Amount: $${totBillAmt.toFixed(2)}</span>`
    document.getElementById("id_result7").innerHTML += ` <span class="res">Amount per person: $${perPerson.toFixed(2)}</span>`
}