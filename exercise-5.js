// Nama : Fahrul Muhammad Neor
// exercise 5 week 4 phase 0

function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var result = ''
    for(i = 0 ; i < kata.length ; i++){
        for(var j = 0; j < alphabet.length; j++){
            if(kata[i] === alphabet[j]){
              result += alphabet[j + 1]
            } else if (kata[i] === 'z'){
                result += 'a'
            }
        }
    }
    return result
}
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu