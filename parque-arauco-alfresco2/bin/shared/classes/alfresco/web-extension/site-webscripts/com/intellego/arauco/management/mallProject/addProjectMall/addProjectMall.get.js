var id= args.id ? args.id : null;
var name= args.name ? args.name : null;
var mall= args.mall ? args.mall : null;
var getTypeProject= args.getTypeProject ? args.getTypeProject : null;
var getStatusProject= args.getStatusProject ? args.getStatusProject : null;
var creationDate= args.creationDate ? args.creationDate : null;
var finishDate= args.finishDate ? args.finishDate : null;
var description= args.description ? args.description : null;

if(name!=null &&  mall!=null && getTypeProject!=null && getStatusProject!=null && creationDate!=null && finishDate!=null){
	var url = "/arauco/addProjectMall";
//    logger.log("La id es ::::::::::"+id);
	var params = new Array();
	params["id"] = id;
	params["name"] = name;
	params["mall"] = mall;
	params["getTypeProject"] = getTypeProject;
	params["getStatusProject"] = getStatusProject;
	params["creationDate"] = creationDate;
	params["finishDate"] = finishDate;
	params["description"] = description;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}