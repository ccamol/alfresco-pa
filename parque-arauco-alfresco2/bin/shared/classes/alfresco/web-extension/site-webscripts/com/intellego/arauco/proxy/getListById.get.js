var type= args.type ? args.type : null;
var prefix = args.prefix ? args.prefix : null;
var id = args.id ? args.id : null;
var propertyId = args.propertyId ? args.propertyId : null;



if(type!=null && type!=null && type!=null && prefix!=null && prefix!=null && prefix!=null){
	var url = "/arauco/getListById?type=" + type + "&prefix=" + prefix + "&id=" + id + "&propertyId=" + propertyId;
	
	var connector = remote.connect("alfresco");
	var data = connector.call(url);
	model.resultSet = data;
}