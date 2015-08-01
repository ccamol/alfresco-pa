var name = args.name;
var uuid = args.uuid;
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
var extension = name.substr(name.lastIndexOf("."));
var newDocumentExtension = documentName+extension;
upload.properties["cm:name"] = newDocumentExtension;
upload.properties.content.write(content);
upload.properties.encoding = "UTF-8";
upload.save();
model.node=upload;
