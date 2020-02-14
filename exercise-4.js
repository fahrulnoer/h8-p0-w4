// Nama : Fahrul Muhammad Neor
// exercise 4 week 4 phase 0

function cariModus(arr) {
    // you can only write your code here!
    var result = []
    var frequen = []
    for (var i = 0; i < arr.length; i++) {
        var check = false
        for (var j = 0; j < result.length; j++) {
            if (arr[i] === result[j]){
                check = true
                frequen[j]++
            }
        }
        if (check == false){
            result.push(arr[i])
            frequen.push(1)
        }
    }
    
    if (result.length == 1 || arr.length == result.length){
        return -1
    }

    var num = 0
    var index = 0
    for (var k = 0; k < frequen.length; k++) {
        if (num < frequen[k]){
            num = frequen[k]
            index = k
        }
    }
    return result[index]
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1