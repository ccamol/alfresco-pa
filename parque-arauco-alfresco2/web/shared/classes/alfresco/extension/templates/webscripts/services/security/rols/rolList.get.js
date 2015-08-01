<import resource="classpath:alfresco/extension/objectModel.js">

var filter= args.filter ? args.filter : null;

var rolFilter = new RolFilter();
var terms = new Terms();

if(filter!=null){
	var filters = filter.split(" ");
	for(i=0;i<filters.length;i++){
		terms.add(filters[i]);
	}
	
	rolFilter.name.containsMultiple(terms);
}

model.resultSet = RolService.getListByFilter(rolFilter);






