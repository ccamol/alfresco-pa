<import resource="classpath:alfresco/extension/objectModel.js">

var parent= args.parent ? args.parent : null;
var searchText= args.searchText ? args.searchText : null;
var dateFrom= args.dateFrom ? args.dateFrom : null;
var dateTo= args.dateTo ? args.dateTo : null;
var entryPointType= args.entryPointType ? args.entryPointType : null;
var entryPointId= args.entryPointId ? args.entryPointId : null;

if(parent==undefined) parent=null;
if(searchText==undefined) searchText=null;
if(entryPointType==undefined) entryPointType=null;
if(entryPointId==undefined) entryPointId=null;
if(dateFrom==undefined || dateFrom=='null') dateFrom=null;
if(dateTo==undefined || dateTo=='null') dateTo=null;

var arrayResultSet=new Array();
var counter = 0;

if(searchText==null) searchText='*';

if(entryPointType!=null && entryPointId!=null && parent!=null && parent!='null' && searchText!=null){
	
	var entryPoint = new EntryPoint();
	entryPoint.nodeType = entryPointType;
	entryPoint.nodeId = entryPointId;

	
	searchText = 'ALL:(' + searchText + ')';

	if (dateFrom!=null && dateTo!=null) { 
		var fromValues = dateFrom.split("/");
		var toValues = dateTo.split("/");
		var fromDate = fromValues[2] + "-" + fromValues[1] + "-" + fromValues[0];
		var toDate = toValues[2] + "-" + toValues[1] + "-" + toValues[0];
		searchText += ' AND @cm\\:modified:[' + fromDate + ' TO ' + toDate + ']' ;
	}

	if (dateFrom!=null && dateTo==null) { 
		var fromValues = dateFrom.split("/");
		var fromDate = fromValues[2] + "-" + fromValues[1] + "-" + fromValues[0];
		searchText += ' AND @cm\\:modified:' + fromDate;
	}

	var response = ClassificationService.getByUuid(parent);
//	logger.log("SEARCH TEXT: " + searchText)
	var childrens = ClassificationService.documentsByFilter(searchText, entryPoint, response.result);

	for(var i=0;i<childrens.result.size();i++){
		query='@sys\\:node-uuid:' + childrens.result.get(i);
		resultSet= search.luceneSearch(query);
		if(resultSet.length>0){
			arrayResultSet[counter]=resultSet[0];
			counter++;
		}
	}

	model.resultSet=arrayResultSet;
}else{
	model.resultSet=null;
}





