var bodyContent = eval('(' + requestbody.content + ')');
var filter= bodyContent.section ? bodyContent.section : null;

if (bodyContent.uuid !== null) var uuid = bodyContent.uuid;
if (bodyContent.documentType !== null) var documentType = bodyContent.documentType;

var query = null;
var resulSet = null;
var node = null;
var targetNode = null
var varExtension = null;
var prefix = "pa";

var siteFolder=companyhome.childByNamePath("Sites/arauco/documentlibrary");
if(siteFolder == null){

	siteFolder=companyhome.childByNamePath("Sitios/arauco/documentLibrary");

}


if (uuid != null || uuid != undefined || uuid != '') {
	query = "@sys\\:node-uuid:" + uuid;
	resultSet = search.luceneSearch(query);
	targetNode = resultSet[0];
}

targetNode.move(siteFolder);	



targetNode.properties.content.encoding = "UTF-8";
targetNode.save();


