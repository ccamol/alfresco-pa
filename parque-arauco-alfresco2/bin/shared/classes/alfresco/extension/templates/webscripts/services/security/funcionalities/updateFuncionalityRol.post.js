<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var funcionalityid= bodyContent.funcionalityid ? bodyContent.funcionalityid : null;
var rolId= bodyContent.rolId ? bodyContent.rolId : null;
var value= bodyContent.value ? bodyContent.value : null;

var response = new Response();

var filter = new RolFuncionalityFilter();
filter.rol.exact(rolId, EQUALS_TO);
filter.funcionality.exact(funcionalityid, EQUALS_TO);

var rolFuncionalityList = RolFuncionalityService.getListByFilter(filter);

if(rolFuncionalityList!=null && rolFuncionalityList.result!=null && rolFuncionalityList.result.size()>0){
	var rolFuncionality = rolFuncionalityList.result.get(0);
	var rol = RolService.getById(rolId);
	var funcionality = FuncionalityService.getById(funcionalityid);
	rolFuncionality.rol=rol.result;
	rolFuncionality.funcionality=funcionality.result;
	if(value=="true"){
		rolFuncionality.value=true;
	}else{
		rolFuncionality.value=false;
	}
	response = RolFuncionalityService.update(rolFuncionality);
}else{
	var rolFuncionality = new RolFuncionality();
	var rol = RolService.getById(rolId);
	var funcionality = FuncionalityService.getById(funcionalityid);
	rolFuncionality.rol=rol.result;
	rolFuncionality.funcionality=funcionality.result;
	if(value=="true"){
		rolFuncionality.value=true;
	}else{
		rolFuncionality.value=false;
	}
	response = RolFuncionalityService.add(rolFuncionality);
}


model.response = response;
