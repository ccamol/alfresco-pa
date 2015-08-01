var filter= args.filter ? args.filter : null;
var rol= args.rol ? args.rol : null;

var url = "/arauco/folderTree?filter=" + filter + "&rol=" + rol;

var connector = remote.connect("alfresco");
var data = connector.get(url);

//var result = eval('(' + data + ')');
model.resultSet = data;