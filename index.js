// a simple data set
var dataSet = [1, 2, 3, 4, 5, 6, 7];

d3.select('body')
	.selectAll()
	.data(dataSet)
	.enter().append('p') // appends paragraph for each data element
	.text('D3 is awesome!');
	// .text(function(d) { return d; }) // get and display the value of the data item