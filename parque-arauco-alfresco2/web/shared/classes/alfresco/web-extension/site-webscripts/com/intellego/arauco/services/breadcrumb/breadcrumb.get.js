var nodeType = args.nodeType ? args.nodeType : null;
var nodeId = args.id ? args.id : null;
var siteSelected = args.siteSelected ? args.siteSelected : null;
var idTender = args.idTender ? args.idTender : null;

var url = '/arauco/breadcrumb?nodeType=' + nodeType + '&id=' + nodeId + '&siteSelected=' + siteSelected + '&idTender=' + idTender;
var connector = remote.connect("alfresco");

var data = connector.get(url);
model.resultSet = data;




