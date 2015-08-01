<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idSuc= bodyContent.filter ? bodyContent.filter : null;
var sucProjectFilter = null;
var EQUALS_TO = 0;
var username=person.properties.userName;
var resultProjectSuc=[];
var resultStage=[];
var resultSetProjectSuc = null;
var projectStageFilter = null;
var ListStage = null;
//logger.log("CTL 1: " + idSuc);
var checkListStage = null;
if(username!=null || username!=undefined || username!=''){
	var person = people.getPerson(username);
	var src_groups=people.getContainerGroups(person);
//	logger.log("CTL 2: " + person);
	if(src_groups.length>0){
		for(var i=0;i<src_groups.length;i++){
			var nodes = null;
			var query = null;
//			groupId=src_groups[i].properties["cm:authorityName"];
			groupName = src_groups[i].properties["cm:authorityDisplayName"];
//			logger.log("CTL 3: " + groupName);
			if(groupName!=null && groupName != undefined && groupName != ''){
//				nameGroupDisplay.push(groupName);
				query = 'TYPE:"paList:operator" AND @paList\\:operatorType:1 AND @paList\\:description:"'+groupName+'"';
				nodes = search.luceneSearch(query);
//				logger.log("CTL 4: " + query + " LENGTH: " + nodes.length);
				if(nodes.length > 0){
//					logger.log("CTL 5:");
					var idList = nodes[0].properties["paList:id"];
					if(idList != null && idList != ''){
//						logger.log("CTL 6:");
						var sucElement = SucSrv.getById(idSuc);
						sucProjectFilter = new SucProjectFilter();
						sucProjectFilter.operator.exact(idList, EQUALS_TO);
						sucProjectFilter.sucEntity.exact(sucElement.result.id, EQUALS_TO);
						resultSetProjectSuc = SucProjectSrv.getListByFilter(sucProjectFilter);
						for (var p = 0; p < resultSetProjectSuc.result.size(); p++) {
							resultProjectSuc.push(resultSetProjectSuc.result.get(p));
							projectStageFilter = new ProjectStageFilter();
							idProject = resultSetProjectSuc.result.get(p).id;
							idTypeProject= resultSetProjectSuc.result.get(p).projectType.id;
							projectStageFilter.idProject.exact(idProject, EQUALS_TO);
							projectStageFilter.idProjectType.exact(idTypeProject, EQUALS_TO);
							ListStage = ProjectStagesSrv.getListByFilter(projectStageFilter);
							for (var z = 0; z < ListStage.result.size(); z++) {
//								logger.log("CTL 7:");
								var idStageSuc = ListStage.result.get(z).stageType.id;
								checkListStage = new CheckListFilter();
								checkListStage.external.exact(1 , EQUALS_TO);
								checkListStage.stageId.exact(idStageSuc , EQUALS_TO);
								checkListStage.nodeType.exact(7 , EQUALS_TO);
								var resultCheckListStage = CheckListService.getListByFilter(checkListStage).result;
								if(resultCheckListStage.size()>0){
									resultStage.push(ListStage.result.get(z));
								}
							}
						}
					}
				}
			}
		}
	}

}

model.resultSet = resultProjectSuc;
model.resultSetStatus = resultStage;

//----------------------------------- ----------------------

//if(username!=null || username!=undefined || username!=''){
//var person = people.getPerson(username);
//var src_groups=people.getContainerGroups(person);
//var groupId=null;
//var groupName = null;
//var groupNameProfile = new Array();
//var groupNameRol = new Array();
//var j = 0;
//var k = 0;
//var z = 0;
//var nameGroupDisplay=[];
//var sucFilter = new SucFilter();
//var sucProjectFilter = new SucProjectFilter();
//var statusStage=null;
//if(src_groups.length>0){
//for(var i=0;i<src_groups.length;i++){
//groupId=src_groups[i].properties["cm:authorityName"];
//groupName = src_groups[i].properties["cm:authorityDisplayName"];
//if(groupName!=null && groupName != undefined && groupName != ''){
//nameGroupDisplay.push(groupName);
//}
//}
//}
//}
//var idProject;
//var idTypeProject;
//var operatorFilter = new OperatorFilter();
//for(var a=0;a<nameGroupDisplay.length;a++){
//operatorFilter.name.exact(nameGroupDisplay[a], CONTAINS);
//var operatorsObject = OperatorSrv.getListByFilter(operatorFilter);
//for (var i = 0; i < operatorsObject.result.size(); i++) {
//sucProjectFilter.operator.exact(operatorsObject.result.get(i).id, EQUALS_TO);
//sucProjectFilter.sucEntity.exact(idSuc, EQUALS_TO);
//var resultSetProjectSuc = SucProjectSrv.getListByFilter(sucProjectFilter);
//for (var h = 0; h < resultSetProjectSuc.result.size(); h++) {
//idProject = resultSetProjectSuc.result.get(h).id;
//idTypeProject= resultSetProjectSuc.result.get(h).projectType.id;
//projectStageFilter.idProject.exact(idProject, EQUALS_TO);
//projectStageFilter.idProjectType.exact(idTypeProject, EQUALS_TO);
//resultProjectStageFilter = ProjectStagesSrv.getListByFilter(projectStageFilter);
//for (var p = 0; p < resultProjectStageFilter.result.size(); p++) {
//resultProjectFilterElements.push(resultProjectStageFilter.result.get(p));
//}
//projectSucElements.push(resultSetProjectSuc.result.get(h));
//}
//}
//}
//model.resultSet = projectSucElements;
//model.resultSetStatus = resultProjectFilterElements;