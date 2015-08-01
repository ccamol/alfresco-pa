var varHost = args.host;
var varPort = args.port;
var ticketUser = args.alf_ticket;
var uuid = args.uuid;
var node = null;
var nodeName = null;


var varUuidAsoc = null;
var varNameRef = null;
var nodeAssoc = null;

if(uuid != null && uuid != ""){
	query = "@sys\\:node-uuid:"+uuid;
	resultSet = search.luceneSearch(query);
	if(resultSet.length>0){
		node = resultSet[0];
		nodeName = node.properties["cm:name"];
		nodeAssoc = node.assocs['pa:swfAssoc'];
		varUuidAsoc = nodeAssoc[0].properties["sys:node-uuid"];
	}
}


model.host = varHost;
model.port = varPort;
model.uuid = varUuidAsoc;
model.uuidOri = uuid;
model.nameRef = nodeName;
model.ticket = ticketUser;

function createFolder(folderName){
	return nodo1.createFolder(folderName);
}