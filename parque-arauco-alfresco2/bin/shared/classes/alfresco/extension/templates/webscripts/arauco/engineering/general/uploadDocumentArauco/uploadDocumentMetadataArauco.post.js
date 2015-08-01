<import resource="classpath:alfresco/extension/objectModel.js">

var selectedElement = args.selectedElement;
var ticketUser = args.alf_ticket;
//logger.log("alf_ticket: "+ ticketUser);
var varState="";
var nodo1 ="";
var timestamp = new Date().getTime();
nodo1 = companyhome.childByNamePath("Diccionario de datos");
if(nodo1 == null || nodo1 == undefined ){
	nodo1 = companyhome.childByNamePath("Data Dictionary");
}
var varUuid="";
var destinationFolder =  nodo1.childByNamePath("DocumentTest");


if(destinationFolder==null || destinationFolder == undefined ) destinationFolder=createFolder("DocumentTest");


var content = null;
var file = null;
var varUuidAsoc = null;
var varNameRef = null;
var mimetype = null;

content = (args.content !== null) ? args.content : null;
file = (args.name !== null) ? args.name : null;

for each (field in formdata.fields)
{
	if (field.name == "file" && field.isFile)
	{
		file = field.filename;
		content = field.content;
	}
}


if(content!=null && file!=null){
	if(destinationFolder!=null ){
		var query= "PATH:\"/app:company_home/app:dictionary/cm:"+search.ISO9075Encode("DocumentTest")+"/*\" AND @cm\\:name:\""+file+"\"";
		var resultSet=search.luceneSearch(query);
		var length = resultSet.length;
		if(resultSet.length>0){
			resultSet[0].remove();
		}
		
		var timeStamp = new Date().getTime();
		var upload = destinationFolder.createNode(file, "cm:content");
		upload.properties.content.write(content);
		upload.properties.encoding = "UTF-8";
		var nodeName = upload.properties["cm:name"];
		upload.properties["cm:name"] = timeStamp + nodeName;
	
		varUuid = upload.properties["sys:node-uuid"];
		
		upload.save();
//		logger.log("create major version on uploadDocumentMetadataArauco.post.js");
		upload.createVersion("Versión inicial", true);
	}
}

model.uuid= varUuid;

function createFolder(folderName){
	return nodo1.createFolder(folderName);
}
