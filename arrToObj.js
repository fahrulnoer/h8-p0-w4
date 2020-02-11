function arrToObj(arr){
    var temp = {}
    for (var i = 0; i < arr.length; i++) {
        temp[arr[i][0]] = list[i][1]
    }
    return temp
}

var list = [
    ['Nama', 'Fahrul'],
    ['Age', 21],
    ['Gender', 'Male']
]

console.log(arrToObj(list))
// {
//     Name : fahrul,
//     age : 21,
//     gender : male
// }