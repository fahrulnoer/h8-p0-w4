function countPakaian(arr){
    var grouping = {}
    for (var i = 0; i < arr.length; i++) {
        grouping[arr[i]] = 0
    }
    // console.log(r)
    for (var i = 0; i < arr.length; i++) {
        for (j in grouping){
            if (j === arr[i]) {
                grouping[j]++
            }
        }
    }
    return grouping
}




var lemari = [
    'Kaos', 'Jaket', 'Celana', 'Jaket', 'Tuxedo', 'Celana'
]
console.log(countPakaian(lemari))
// {
//     Kaos : 1,
//     Jaket : 2,
//     Celana : 2,
//     Tuxedo : 1

// }