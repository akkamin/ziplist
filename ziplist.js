const list5 = [1, 2, 3, 4];
const list6 = [10, 11, 12, 13];
const list7 = [5, 6, 7, 8, 9];

function zipList(list1, list2) {
  let i = 0;
  const combine = [];
  while (i < list1.length && i < list2.length) {
    combine.push(list1[i]);
    combine.push(list2[i]);
    i++;
  }
  if (i >= list1.length && i < list2.length) {
    while (i < list2.length) {
      combine.push(list2[i]);
      i++;
    }
  }
  if (i >= list2.length && i < list1.length) {
    while (i < list1.length) {
      combine.push(list1[i]);
      i++;
    }
  }
  return combine;
}

function zipListTheSimpleWay(list1, list2) {
  const combine = _.zip(list1, list2);
  return _.flatten(combine);
}

console.log(zipList(list5, list6));
console.log(zipList(list5, list7));
console.log(zipList(list7, list5));
console.log(zipListTheSimpleWay(list5, list7));
