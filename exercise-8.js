// Nama : Fahrul Muhammad Neor
// exercise 8 week 4 phase 0

// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string.
// Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var bigAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var litAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''

    for (var i = 0; i < kalimat.length; i++) {
    var temp = 0
        for (var j = 0; j < bigAlphabet.length; j++) {
            if (kalimat[i] === bigAlphabet[j]) {
                result += litAlphabet[j]
                temp ++
            }
        }
        for (var k = 0; k < litAlphabet.length; k++) {
            if (kalimat[i] === litAlphabet[k]) {
                result += bigAlphabet[k]
                temp ++
            }
        }
        if(temp == 0) {
            result += kalimat[i]
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"