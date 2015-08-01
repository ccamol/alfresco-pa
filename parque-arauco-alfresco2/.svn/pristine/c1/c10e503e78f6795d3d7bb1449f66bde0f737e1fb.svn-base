var nodeType = args.nodeType ? args.nodeType : null;
var nodeId = args.nodeId ? args.nodeId : null;
var idProject = args.idProject ? args.idProject : null;
var stageStatus = args.stageStatus ? args.stageStatus : null;

var url = '/arauco/getChecklistOperator?nodeType=' + nodeType + '&nodeId=' + nodeId + '&idProject='+idProject+'&stageStatus='+stageStatus;
var connector = remote.connect("alfresco");

var data = connector.get(url);
model.resultSet = data;




