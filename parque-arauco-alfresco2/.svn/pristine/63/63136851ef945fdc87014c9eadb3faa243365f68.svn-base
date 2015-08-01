var nodeType = args.nodeType ? args.nodeType : null;
var nodeId = args.nodeId ? args.nodeId : null;

var url = '/arauco/getCheckListThirdParty?nodeType=' + nodeType + '&nodeId=' + nodeId;
var connector = remote.connect("alfresco");

var data = connector.get(url);
model.resultSet = data;




