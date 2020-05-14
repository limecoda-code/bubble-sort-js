function bubbleSort(items = []) {
  var n = items.length;

  for (var i = 0; i < n; i++) {
		for (var j = 0; j < (n + (i - 1)); j++) {
    	if (items[j] > items[j+1]) {
    	  var higherItem = items[j];
    	  items[j] = items[j+1];
    	  items[j+1] = higherItem;
    	}
		}
  }

  return items;
}

// Sort list of integers
console.log(bubbleSort([8,2,3,7,5,0]));

// Sort list of strings
console.log(bubbleSort(['kiwi','banana','raspberries','pear','apple','orange']));
