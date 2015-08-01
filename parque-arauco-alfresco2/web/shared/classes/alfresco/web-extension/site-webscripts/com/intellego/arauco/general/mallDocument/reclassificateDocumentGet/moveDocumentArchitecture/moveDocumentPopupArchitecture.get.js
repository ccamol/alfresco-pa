var connector = remote.connect("alfresco");
var uuid = args.uuid;
var classification = args.classification;
var data = connector.get("/arauco/getMallList");
var result = eval('(' + data + ')');
model.classification=classification;
model.uuid = uuid;
model.resultSet = result["resultSet"];



