// Nama : Fahrul Muhammad Neor
// exercise 6 week 4 phase 0

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var temp = []
    for (var i = angka; i >= 1; i--) {
        var to = angka / i
        var residue = angka % i
        if (residue == 0) {
            var str = String(to) + String(i)
            temp.push(str)
        }
    }
    var result = temp[0].length
    for (var i = 0; i < temp.length; i++) {
        if (temp[i].length < result) {
            result = temp[i].length
        }
    }
    return result
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2