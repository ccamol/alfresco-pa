var id= args.id ? args.id : null;

var url = "/arauco/selectSAPMall";

var connector = remote.connect("alfresco");
var data = connector.call(url);

var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
model.status = result["status"];
model.message = result["message"];
model.id=id;