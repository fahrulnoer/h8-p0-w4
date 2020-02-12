// Nama : Fahrul Muhammad Neor
// exercise 9 week 4 phase 0

function checkAB(num) {
    // you can only write your code here!
    var checkA = ""
    var checkB = ""
    for (var i = 0; i < num.length; i++) {
        if (num[i] === "a") {
            checkA = i
        } else if (num[i] === "b") {
            checkB = i
        }
    }
    // console.log(checkA, checkB)
    if (checkB.length === 0 || checkA.length === 0) {
        return false
    } else if (checkA - checkB  === 4|| checkB - checkA === 4) {
        return true
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false