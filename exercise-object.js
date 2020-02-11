function groupAnimals(animals) {
    // you can only write your code here!
    var grouping = {}
    for (var i = 0; i < animals.length; i++) {
        // console.log(animals[i][0])
        grouping[animals[i][0]] = []
    }
    // { c: [], a: [], k: [] }
    for (var i = 0; i < animals.length; i++) {
        grouping[animals[i][0]].push(animals[i])
    }
    return grouping
}
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// {
//     a : [anoa, ayam],
//     c : [cacing],
//     k : [kancil, kuda]
// }
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
//   {
//       a : [ayam, anoa],
//       c : [cacing, cicak],
//       k : [kuda, kancil],
//       u : [unta]
//   }