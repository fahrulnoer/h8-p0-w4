// Nama : Fahrul Muhammad Neor
// exercise 10 week 4 phase 0

function changeMe(arr) {
    // you can only write your code here!
    if (arr.length > 0) {
        for (i = 0; i < arr.length; i++) {
            var age = 0
            if (arr[i][3] > 0) {
                var age = 2019 - arr[i][3]
            }
            else if (arr[i][3] !== 0) {
                var age = 'Invalid Birth Year'
            }
            var obj = {
                firstName: arr[i][0], 
                lastName: arr[i][1],
                gender: arr[i][2],
                age: age
            }
            var result =`${i + 1}. ${obj.firstName} ${obj.lastName}`
            console.log(result)
            console.log(obj)
        }
    }
    return ''
}
  
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""