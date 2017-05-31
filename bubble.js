var a = [10, 2, 4, 6, 7, 3, 9 , 1, 5, 8];

function bubbleSort(array)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                var temp = a[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a);
2 Comments Collapse
