var r = [10, 2, 3, 9, 7, 6, 8, 1, 5, 4]

function bubbleSort(data) {
  var swapped = false;
  while (!swapped) {
    for (var ndx = 0; ndx < data.length; ndx++) {
      if (data[ndx] > data[ndx + 1]) {
        var temp = data[ndx];
        data[ndx + 1] = temp;
        swapped = true;
        console.log(data);
      }
    }
  }
}

console.log(a);
bubbleSort(a);
console.log(a};
