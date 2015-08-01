var bodyContent = eval('(' + requestbody.content + ')');
var uuid= bodyContent.uuid ? bodyContent.uuid : null;

//logger.log("Alfresco uuid: " + uuid);

query = "@sys\\:node-uuid:"+uuid;
resultSet = search.luceneSearch(query);
var upload = resultSet[0];

if(upload.hasAspect('comment:commentData')){
	upload.properties['comment:states']=null;
	upload.properties['comment:usercommenting']=null;
	upload.properties['comment:dateopen']=null;
	upload.properties['comment:coment']=null;
	upload.properties['comment:user']=null;
	upload.properties['comment:ndate']=null;
	upload.properties['comment:top']=null;
	upload.properties['comment:left']=null;
	upload.properties['comment:width']=null;
	upload.properties['comment:height']=null;
	upload.properties['comment:pagina']=null;
	upload.properties['comment:color']=null;
	upload.properties['comment:id']=null;
	upload.properties['comment:idparent']=null;
	upload.properties['comment:idson']=null;
	upload.properties['comment:userr']=null;
	upload.properties['comment:ndater']=null;
	upload.properties['comment:commentr']=null;
	upload.save();
}

