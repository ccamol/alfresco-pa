var username=args.username;
var status="0";
if(username!=null || username!=undefined || username!=''){
	var person = people.getPerson(username);
	var src_groups=people.getContainerGroups(person);
	var groupName=null;
	for(var i=0;i<src_groups.length;i++){
		groupName=src_groups[i].properties["cm:authorityName"];
//		logger.log("GROUP: "+groupName);
		if(groupName=="GROUP_ALFRESCO_ADMINISTRATORS" || groupName=="GROUP_ADMINISTRADOR_CONTENIDOS"){
			status="1";
		}
			
	}
}

//logger.log('Status: '+status);

model.status=status;

