var content = null;
var file = null;
var taskid = null;
var uuid = null;
content = (args.content !== null) ? args.content : null;
file = (args.name !== null) ? args.name : null;
taskid = (args.taskid !== null) ? args.taskid : null;
uuid = (args.uuid !== null) ? args.uuid : null;
//locate file attributes
for each (field in formdata.fields)
{
	if (field.name == "file" && field.isFile)
	{
		file = field.filename;
		content = field.content;
	}
}


if(content!=null && file!=null){
	var cpFolder = companyhome.childByNamePath("TaskTemp");
	if(cpFolder==null){
		cpFolder = companyhome.createFolder("TaskTemp");
	}
	taskFolder = companyhome.childByNamePath("TaskTemp/" + taskid);
	if(taskFolder==null){
		taskFolder = cpFolder.createFolder(taskid);
	}
	if(taskFolder!=null){
		query = "@sys\\:node-uuid:"+uuid;
		resultSet = search.luceneSearch(query);
		
		var upload = resultSet[0];
		var name = upload.properties["cm:name"];
		var documentName = name.substring(0, name.lastIndexOf("."));
		var extension = file.substring(file.lastIndexOf("."));
		var newDocumentExtension = documentName+extension;
		upload.properties["cm:name"] = newDocumentExtension;
//		logger.log("extension: "+newDocumentExtension);
		upload.properties.content.write(content);
		upload.properties.encoding = "UTF-8";
		upload.save();
		model.node=upload;
		}else{
		model.node=null;
	}
}