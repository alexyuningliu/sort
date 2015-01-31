function bubbleSort(array) {

	for(var j = 0; j < array.length; j++) {

	    for(var i = 0; i < array.length; i++) {
	    	var current = array[i];
	    	var next = array[i+1]
	    	if (next < current) {
	    		array[i] = next;
	    		array[i+1] = current;
	    	}
	    }

	}
    return array;
}

function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */

   	var splitIndex = Math.floor((wholeArray.length/2));
   	var left = wholeArray.slice(0, splitIndex);
   	var right = wholeArray.slice(splitIndex);

   	var returnArray = [];
	returnArray.push(left);
	returnArray.push(right);

   	return returnArray;
}

function merge(leftArray, rightArray) {
	var resultArray = [];
	var indexLeft = 0;
	var indexRight = 0;

  		for (var i = 0; i < (leftArray.length + rightArray.length); i++) {
  			// debugger;
  			if (indexLeft === (leftArray.length)) {
				resultArray = resultArray.concat(rightArray.slice(indexRight));
				break;
			} else if (indexRight === (rightArray.length)) {
				resultArray = resultArray.concat(leftArray.slice(indexLeft));
				break;
			} else if (leftArray[indexLeft] < rightArray[indexRight]) {
				resultArray.push(leftArray[indexLeft]);
				indexLeft++;
				console.log("The left index is " + indexLeft);
			} else {
				resultArray.push(rightArray[indexRight]);
				indexRight++;
				console.log("The right index is " + indexRight);
			}

		}

	console.log("up a level")
	return resultArray;
}

function mergeSort(array) {

    //Where we split

    if (array.length <= 1) {
    	return array;
    }

    var leftArray = [];
    var rightArray = [];

    splitArray = split(array);

    leftArray = splitArray[0];
    rightArray = splitArray[1];

    leftArray = mergeSort(leftArray);
    rightArray = mergeSort(rightArray);

    //Where we merge

    array = merge(leftArray, rightArray);
    return array;
}












