<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

//upload & overwrite image to Alfresco

var mallId = args.mallId ? args.mallId : null;
var imageUuid;
var node;
var content = null;
var file = null;
var statusMessage;
var statusCode = -1;

//logger.log("### args.mallId: " + mallId + " ###");

node = companyhome.childByNamePath("Diccionario de datos");
if(node == null || node == undefined)
	node = companyhome.childByNamePath("Data Dictionary");

var destinationFolder = node.childByNamePath("DocumentTest");
if(destinationFolder==null || destinationFolder == undefined)
	node.createFolder("DocumentTest");

content = (args.content !== null) ? args.content : null;
file = (args.name !== null) ? args.name : null;
//logger.log("### args.content: " + content + " ###");
//logger.log("### args.file: " + file + " ###");

for each (field in formdata.fields) {
//	logger.log("### formdata FIELD found ###");
	if (field.name == "file" && field.isFile) {
//		logger.log("### *FILE FIELD found ###");
		file = field.filename;
//		logger.log("### file:" + file + " ###");
		content = field.content;
//		logger.log("### content: " + content + " ###");
	}
}

//var fileFile = node.childByNamePath(file);
//if (fileFile !== null || fileFile !== undefined || fileFile !== '') {
//	
//}

if(content!=null && file!=null){
	if(destinationFolder!=null ){
		var query= "PATH:\"/app:company_home/app:dictionary/cm:"+search.ISO9075Encode("DocumentTest")+"/*\" AND @cm\\:name:\""+file+"\"";
		var resultSet=search.luceneSearch(query);
		if(resultSet.length>0){
			var timeStamp = new Date().getTime();
			file += "" + timeStamp;
		}
		
		var upload = destinationFolder.createNode(file, "cm:content");
		upload.properties.content.write(content);
		upload.properties.encoding = "UTF-8";
	
		imageUuid = upload.properties["sys:node-uuid"];
		upload.save();
//		logger.log("### File uploaded successfully! ###");
		statusMessage += "File uploaded successfully!";
		statusCode = 0;
//		logger.log("### 1st if statement done ###");
	} else {
		statusMessage += "Destination folder not found, Upload failed";
//		logger.log("### Destination folder not found, Upload failed ###");
	}
} else {
	statusMessage += "File not found, Upload failed";
//	logger.log("### File not found, Upload failed ###");
}

//DB: modify table "intellego_mall", columns "imageuuid" and "nameimage"
//logger.log("### imageUuid: " + imageUuid + " ###");
if (imageUuid != null || imageUuid != undefined) {
	var mallSrv = MallSrv.getById(mallId);
//	logger.log("### mallID: " + mallId + " ###");
	if (mallSrv.status == 1) {
		
		var mall = mallSrv.result;
		mall.setNameImage(file);
		mall.setImageUuid(imageUuid);

		MallSrv.update(mall);
		statusMessage += "\nDB updated successfully!";
//		logger.log("### DB updated successfully! ###");
		statusCode = 1;
	} else {
		statusMessage += "\n" + mallSrv.message;
//		logger.log("### " +  + mallSrv.message + " ###");
	}
} else {
	statusMessage += "\nImage UUID not found, DB update aborted"
//	logger.log("### Image UUID not found, DB update aborted ###");
}
model.code = statusCode;
model.message = statusMessage;
model.html = "test";