// Nama : Fahrul Muhammad Neor
// exercise 7 week 4 phase 0

function urutkanAbjad(str) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var arrstr = []
    var result = ''
  
    for (i = 0; i < str.length; i++) {
        for (j = 0; j < alphabet.length; j++) {
            if (str[i] === alphabet[j]) {
                arrstr.push(j)
            }
        }
    }
    for (k = 0; k < arrstr.length; k++) {
        var tmp = 0
        for (l = k+1; l < arrstr.length; l++) {
            if (arrstr[l] < arrstr[k]){
                tmp = arrstr[k]
                arrstr[k] = arrstr[l]
                arrstr[l] = tmp
            }
        }
    }
    for (m = 0; m < arrstr.length; m++) {
        for (n = 0; n < alphabet.length; n++) {
            if (arrstr[m] === n){
                result += alphabet[arrstr[m]]
            }
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'