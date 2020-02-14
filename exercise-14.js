// Nama : Fahrul Muhammad Neor
// exercise 14 week 4 phase 0

function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
//your code here
    var result = []
    for (var i = 0; i < arrPenumpang.length; i++) {        
        var naik = 0
        var turun = 0
        for (let j = 0; j < rute.length; j++) {
            if (arrPenumpang[i][1] === rute[j]){
                naik = j
            }
            if (arrPenumpang[i][2] === rute[j]){
                turun = j
            }
        }
        
        var tarif = (turun - naik)*2000

        var obj = {
            penumpang: arrPenumpang[i][0],
            naikDari: arrPenumpang[i][1],
            tujuan: arrPenumpang[i][2],
            bayar: tarif
        }
        result.push(obj)
    }

    return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]