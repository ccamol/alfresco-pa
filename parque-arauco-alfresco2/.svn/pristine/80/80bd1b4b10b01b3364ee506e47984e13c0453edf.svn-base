var varHost = args.host;
var varPort = args.port;
var varprefix = args.prefix;
var ticketUser = args.alf_ticket;
var uuid = args.uuid;
var uuidPreview = args.uuidPreview;
var type = args.type ? args.type : null;
var node = null;
var nodeName = null;

var nodo1 = companyhome.childByNamePath("Diccionario de datos");
if(nodo1 == null){
	nodo1 = companyhome.childByNamePath("Data Dictionary");
}
var nodo2 = nodo1.childByNamePath("thumbnailsSwf");

if(nodo2==null) nodo2=createFolder("thumbnailsSwf");


var varUuidAsoc = null;
var varNameRef = null;
var mimetype = null;

if(uuid != null && uuid != ""){
	query = "@sys\\:node-uuid:"+uuid;
	resultSet = search.luceneSearch(query);
	if(resultSet.length>0){
		node = resultSet[0];
		nodeName = node.properties["cm:name"];
	}
}

//case: Tender Document
if(type == "tender") {
//	logger.log(" ### /arauco/generatePreview ### Tender document preview");
	varUuidAsoc = Transform.createFlashPreview(uuid);
} else {
//	logger.log(" ### /arauco/generatePreview ### NOT Tender document preview");
	varUuidAsoc = Transform.createFlashPreview(uuidPreview ,uuid);
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