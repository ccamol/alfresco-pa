<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">

var dateFrom= args.dateFrom ? args.dateFrom : null;
var dateTo= args.dateTo ? args.dateTo : null;

var projectResponse = null;
var projectList = null;
var resultSet = new Array();
var counter=0;

var fromTime=null;
var toTime=null;

if(dateFrom!=null && dateFrom!='null' && dateFrom!='' && dateTo!=null && dateTo!='null' && dateTo!=''){
	fromTime=formatDate(dateFrom);
	toTime=formatDate(dateTo);
}
//Proccess Architecture projects
projectResponse =ArchitectureProjectSrv.getAll();  

if(projectResponse.status>-1){           
	projectList = projectResponse.result;
}

if(projectList!=null && projectList.size()>0){
	for(i=0;i<projectList.size();i++){
		if(dateFrom!=null && dateFrom!='null' && dateFrom!='' && dateTo!=null && dateTo!='null' && dateTo!=''){
			if(projectList.get(i).createDate.getTime()>=fromTime.getTime() && projectList.get(i).createDate.getTime()<=toTime.getTime()){
				resultSet[counter]=new Array();
				resultSet[counter]['area']="Arquitectura";
				resultSet[counter]['mall']=projectList.get(i).mall.name;
				resultSet[counter]['type']="Proyecto mall";
				resultSet[counter]['project']=projectList.get(i).name;
				resultSet[counter]['status']=projectList.get(i).projectStatusEntity.name;
				counter++;
			}
		}else{
			resultSet[counter]=new Array();
			resultSet[counter]['area']="Arquitectura";
			resultSet[counter]['mall']=projectList.get(i).mall.name;
			resultSet[counter]['type']="Proyecto mall";
			resultSet[counter]['project']=projectList.get(i).name;
			resultSet[counter]['status']=projectList.get(i).projectStatusEntity.name;
			counter++;
		}
	}
}

//Proccess Engineering projects
projectResponse =EngineeringProjectSrv.getAll();  

if(projectResponse.status>-1){           
	projectList = projectResponse.result;
}

if(projectList!=null && projectList.size()>0){
	for(i=0;i<projectList.size();i++){
		if(dateFrom!=null && dateFrom!='null' && dateFrom!='' && dateTo!=null && dateTo!='null' && dateTo!=''){
			if(projectList.get(i).createdDate.getTime()>=fromTime.getTime() && projectList.get(i).createdDate.getTime()<=toTime.getTime()){
				resultSet[counter]=new Array();
				resultSet[counter]['area']="Ingeniería";
				resultSet[counter]['mall']=projectList.get(i).mall.name;
				resultSet[counter]['type']="Proyecto mall";
				resultSet[counter]['project']=projectList.get(i).name;
				resultSet[counter]['status']=projectList.get(i).projectStatusEntity.name;
				counter++;
			}
		}else{
			resultSet[counter]=new Array();
			resultSet[counter]['area']="Ingeniería";
			resultSet[counter]['mall']=projectList.get(i).mall.name;
			resultSet[counter]['type']="Proyecto mall";
			resultSet[counter]['project']=projectList.get(i).name;
			resultSet[counter]['status']=projectList.get(i).projectStatusEntity.name;
			counter++;
		}
	}
}


//Proccess Tendering projects
//if(dateFrom!=null && dateFrom=='null' && dateTo!=null && dateTo=='null'){
//	
//	
//}else{
//	projectResponse =TendersSrv.getAll();  
//	
//	if(projectResponse.status>-1){           
//		projectList = projectResponse.result;
//	}
//	
//	if(projectList.size()>0){
//		for(i=0;i<projectList.size();i++){
//			resultSet[counter]=new Array();
//			if(projectList.get(i).projectNodeType.id==2){
//				resultSet[counter]['area']="Ingeniería";
//			}
//			if(projectList.get(i).projectNodeType.id==10 || projectList.get(i).projectNodeType.id==4){
//				resultSet[counter]['area']="Arquitectura";
//			}
//			resultSet[counter]['mall']=projectList.get(i).mall.name;
//			resultSet[counter]['type']="Proyecto mall";
//			resultSet[counter]['project']=projectList.get(i).name;
//			resultSet[counter]['status']=projectList.get(i).projectStatusEntity.name;
//			counter++;
//		}
//	}
//
//}

model.resultSet=resultSet;

function formatDate(text){
	if(text==null||text==undefined||text==""){
		return null;
	}else{
		var dateValues = text.split("/");
		return new Date(dateValues[2],dateValues[1]-1,dateValues[0]);

	}
}


