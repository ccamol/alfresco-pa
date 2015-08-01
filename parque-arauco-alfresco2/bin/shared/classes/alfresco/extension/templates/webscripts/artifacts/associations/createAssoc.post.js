var uuid = args.uuid; 
var uuidBase = args.uuidBase;
var site = args.site;
var siteFolder  = null;
var documentName = null;

if(site !== null && site !== undefined && site !== ''){
	siteFolder=companyhome.childByNamePath("Sites/"+site+"/documentlibrary");
}

var newDate = new Date();
var timeStamp = new Date().getTime();
var day = newDate.getDay();
var month = newDate.getMonth();
var fullYear = newDate.getFullYear();

var yearFolder = siteFolder.childByNamePath(fullYear);
if(yearFolder == null){
	yearFolder = siteFolder.createFolder(fullYear);
}


var monthFolder = yearFolder.childByNamePath(month);
if(monthFolder == null){
	monthFolder = yearFolder.createFolder(month);
}

var dayFolder = monthFolder.childByNamePath(day);
if(dayFolder == null){
	dayFolder = monthFolder.createFolder(day);
}


var newUuid = uuid.split("##");
var destNode;

var sourceNode = search.findNode("workspace://SpacesStore/"+uuidBase);
for(var i=0;i<newUuid.length;i++){
	destNode = search.findNode("workspace://SpacesStore/"+newUuid[i]);
	if(destNode !== null && destNode !== undefined && destNode !== ''){
		sourceNode.createAssociation(destNode, "pa:downlaodAssoc");
		documentName = destNode.properties["cm:name"];
		destNode.properties["cm:name"]= timeStamp + documentName;
		destNode.save();
		destNode.move(dayFolder);
	}
	
}