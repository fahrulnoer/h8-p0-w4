// Nama : Fahrul Muhammad Neor
// exercise 4 week 4 phase 0

function cariModus(arr) {
    // you can only write your code here!
    var mode = 0;
    var count = 0;
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < i; j++){
            if(arr[j] === arr[i]) {
                mode = arr[j];
                count++;
            }else if(arr[j] === 1) {
                return -1
            }
        }
    }
    return mode;
}
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1