var uuid = args.uuid;
var version = args.version;
var comments = args.comments;

query = "@sys\\:node-uuid:"+uuid;
resultSet = search.luceneSearch(query);
var upload = resultSet[0];
if(version=="major"){
	upload.createVersion(comments, true);
}else if(version=="minor"){
	upload.createVersion(comments, false);
}
model.node=upload;