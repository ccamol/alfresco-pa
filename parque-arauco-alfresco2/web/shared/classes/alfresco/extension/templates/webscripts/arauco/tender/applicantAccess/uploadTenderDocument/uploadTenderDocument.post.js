<import resource="classpath:alfresco/extension/objectModel.js">

var fileNode;

//logger.log(" ### /arauco/uploadTenderDocument ###");
//logger.log("alf_ticket: "+ args.alf_ticket);

//set path
var targetPath = companyhome.childByNamePath("Diccionario de datos");
//case: English Alfresco
if(targetPath == null || targetPath == undefined )
	targetPath = companyhome.childByNamePath("Data Dictionary");

var destinationFolder =  targetPath.childByNamePath("DocumentTest");

if(destinationFolder == null || destinationFolder == undefined )
	destinationFolder=createFolder("DocumentTest");

//get file content
var content = null;
var file = null;
for each (field in formdata.fields)
{
	if (field.name == "file" && field.isFile)
	{
		file = field.filename;
		content = field.content;
	}
}


if(content != null && file != null){
	if(destinationFolder != null ){
		//override file by name
		var query= "PATH:\"/app:company_home/app:dictionary/cm:"+search.ISO9075Encode("DocumentTest")+"/*\" AND @cm\\:name:\""+file+"\"";
		var resultSet=search.luceneSearch(query);
		var length = resultSet.length;
		if(resultSet.length>0){
			resultSet[0].remove();
		}
		
		var timeStamp = new Date().getTime();
		var upload = destinationFolder.createNode(timeStamp+ file, "cm:content");
		upload.properties.content.write(content);
		upload.properties.encoding = "UTF-8";
		
		
		fileNode = upload.properties["sys:node-uuid"];
//		logger.log("***************************************");
//		logger.log("/arauco/uploadTenderDocument fileNode: " + fileNode);
//		logger.log("***************************************");
		
		upload.save();
	}
}

model.uuid= fileNode;

function createFolder(folderName){
	return targetPath.createFolder(folderName);
}
