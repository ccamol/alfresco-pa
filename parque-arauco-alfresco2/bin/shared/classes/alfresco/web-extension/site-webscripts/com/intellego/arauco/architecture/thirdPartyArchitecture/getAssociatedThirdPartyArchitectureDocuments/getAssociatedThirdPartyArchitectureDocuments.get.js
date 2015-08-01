var stageId = args.stageId ? args.stageId : null;
var url = '/arauco/getAssociatedThirdPartyArchitectureDocuments?stageId='+stageId;
var connector = remote.connect("alfresco");
var data = connector.get(url);
var result = eval('(' + data + ')');

model.resultSet = result["resultSet"];