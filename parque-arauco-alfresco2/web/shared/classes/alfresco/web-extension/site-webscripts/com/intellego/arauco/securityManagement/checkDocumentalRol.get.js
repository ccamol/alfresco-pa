var nodeId= args.id ? args.id : null;
var nodeType= args.nodeType ? args.nodeType : null;
var documentalRol= args.documentalRol ? args.documentalRol : null;

var url = "/arauco/checkDocumentalRol?nodeType=" + nodeType + "&id=" + nodeId + "&documentalRol=" + documentalRol;

var connector = remote.connect("alfresco");
var data = connector.get(url);

model.data = data;








