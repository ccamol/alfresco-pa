var name = args.name;
var uuid = args.uuid;
var version = args.version;
var comments = args.comments;
var file = null;
var content = null;

for each (field in formdata.fields){
	if (field.name == "file" && field.isFile){
		file = field.filename;
		content = field.content;
	}
}

query = "@sys\\:node-uuid:"+uuid;
resultSet = search.luceneSearch(query);
var upload = resultSet[0];
var name = upload.properties["cm:name"];
var documentName = name.substr(0, name.lastIndexOf("."));
var extension = file.substr(file.lastIndexOf("."));
var newDocumentExtension = documentName+extension;
upload.properties.content.write(content);

upload.properties['cm:name']=upload.properties['pa:documentType'] + extension; 
upload.save();
if(version=="major"){
//	logger.log("create major version on versionContentDocument.post.js");
	upload.createVersion(comments, true);
}else if(version=="minor"){
//	logger.log("create minor version on versionContentDocument.post.js");
	upload.createVersion(comments, false);
}
model.node=upload;