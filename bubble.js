var r = [10, 2, 3, 9, 7, 6, 8, 1, 5, 4]

function bubbleSort(a) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < data.length; i++) {
      if (a[i] > a[i+1]) {
        var temp = a[i];
        a[i+1] = temp;
        swapped = true;

      }
    }
   console.log(a);
} while (!swapped);

console.log(data);
bubbleSort(data);
console.log(data);
