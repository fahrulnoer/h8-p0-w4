// Nama : Fahrul Muhammad Neor
// exercise 3 week 4 phase 0

function cariMedian(arr) {
    for(var i = 0; i < arr.length; i++){
        for(var j=0; j < arr.length; j++){
            if(arr[i] > arr [ i + 1 ]){
                var temp = arr[i + 1];
                arr[i + 1] = arr[i]
                arr[i] = temp
            }
        }

    }
    if(arr.length % 2 == 0){
        var n1 = arr.length / 2
        var n2 = (arr.length / 2) - 1
    
        return (arr[n1]+arr[n2]) / 2
    } else {
        var n2 = (arr.length + 1 ) / 2 - 1
        return arr[n2]
    }
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5