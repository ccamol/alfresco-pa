
var listType = args.listType ? args.listType : null;

var url = "/arauco/administration/dataListField?listType=" + listType;
var connector = remote.connect("alfresco");

var data = connector.get(url);

//var result = eval('(' + data + ')');

model.resultSet = data;
