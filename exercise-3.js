// Nama : Fahrul Muhammad Neor
// exercise 3 week 4 phase 0

function cariMedian(arr) {
    // you can only write your code here!
    for (var i = 0 ; i < arr.length ; i++) {
        if(arr.length % 2 === 1){
            return arr[(arr.length-1)/2]
        } else if (arr.length % 2 === 0) {
            var n = arr.length / 2
            return (arr[n-1] + arr[n])/2
        }
    }
    return
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5