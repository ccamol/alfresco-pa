var parent= args.parent ? args.parent : null;
var searchText= args.searchText ? args.searchText : null;
var entryPointType= args.entryPointType ? args.entryPointType : null;
var entryPointId= args.entryPointId ? args.entryPointId : null;
var dateFrom= args.dateFrom ? args.dateFrom : null;
var dateTo= args.dateTo ? args.dateTo : null;

var parameters =  "?parent=" + parent + "&entryPointType=" + entryPointType + "&entryPointId=" + entryPointId;


if(searchText!=null && searchText!=undefined && searchText!='' && searchText!='null'){
	parameters += "&searchText=" + escape(searchText);
}
if(dateFrom!=null  && dateFrom!=undefined && dateFrom!='' && dateFrom!='null'){
	parameters += "&dateFrom=" + dateFrom;
}
if(dateTo!=null  && dateTo!=undefined && dateTo!='' && dateTo!='null'){
	parameters += "&dateTo=" + dateTo;
}



var url = "/arauco/searchTextOnTree?" + parameters; 

var connector = remote.connect("alfresco");
var data = connector.get(url);

model.resultSet = data;
