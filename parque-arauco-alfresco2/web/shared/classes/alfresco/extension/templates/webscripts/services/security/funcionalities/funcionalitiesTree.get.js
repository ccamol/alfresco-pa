<import resource="classpath:alfresco/extension/objectModel.js">
var filter= args.filter ? args.filter : null;
var rol= args.rol ? args.rol : null;

var functionalityFilter = new FuncionalityFilter(); 
functionalityFilter.area.exact(filter, EQUALS_TO);

functionalityFilter.nodeType.exact(1, EQUALS_TO);
model.mallFuncionalities = FuncionalityService.getListByFilter(functionalityFilter);

functionalityFilter = new FuncionalityFilter(); 
functionalityFilter.area.exact(filter, EQUALS_TO);

functionalityFilter.nodeType.exact(2, EQUALS_TO);
model.proyectFuncionalities = FuncionalityService.getListByFilter(functionalityFilter);

model.area=filter;
model.rol=RolService.getById(rol);
model.SecurityService=SecurityService;


if(filter!=null && filter==2){
	functionalityFilter = new FuncionalityFilter(); 
	functionalityFilter.area.exact(filter, EQUALS_TO);
	functionalityFilter.nodeType.exact(3, EQUALS_TO);
	model.sucFuncionalities = FuncionalityService.getListByFilter(functionalityFilter);
	
	functionalityFilter = new FuncionalityFilter(); 
	functionalityFilter.area.exact(filter, EQUALS_TO);
	functionalityFilter.nodeType.exact(4, EQUALS_TO);
	model.sucProyectFuncionalities = FuncionalityService.getListByFilter(functionalityFilter);
}

