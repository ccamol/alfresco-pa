var nodeType= args.nodeType ? args.nodeType : null;
var id= args.id ? args.id : null;

var url = "/arauco/userSelected?nodeType=" + nodeType + "&id=" + id;

var connector = remote.connect("alfresco");
var data = connector.get(url);

model.data = data;








