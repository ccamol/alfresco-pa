var nodes= args.nodes;
var nodeArray = new Array();
var resultSet = new Array();

if (nodes!=null || nodes!=undefined) 
{ 
	nodeArray=nodes.split(',');

	for(var i=0;i<nodeArray.length;i++){
		resultSet[i]=search.findNode(nodeArray[i]);
	}

	model.resultset = resultSet;
}


