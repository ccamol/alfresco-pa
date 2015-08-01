<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var status= bodyContent.status ? bodyContent.status : null;
var questionFilter = QuestionFilter();
var EQUALS_TO=0;
var categories=[];
var categoriesID=[];
var finalObjet=[];
var resultSet = null;
if(idTender !== null){
	questionFilter.tender.exact(idTender, EQUALS_TO);
//	questionFilter.status.exact(status, EQUALS_TO);
	resultSet = QuestionSrv.getListByFilter(questionFilter);
	logger.log("###########################SIZE: "+resultSet.result.size());
	if(resultSet.result.size()>0){
		for (var xx = 0; xx < resultSet.result.size(); xx++) {
//			logger.log(resultSet.result.get(xx).category.id);
			categoriesID.push(resultSet.result.get(xx).category.id);
		}
		categories = eliminarRepetidos(categoriesID);
		if(categories.length > 0){
			for (var i = 0; i < categories.length; i++) {
//				finalObjet.push(CategoriesSrv.getById(categories[i]).result);
				var resultCategories = CategoriesSrv.getById(categories[i]);
				finalObjet.push(resultCategories.result);
			}
			model.resultSet = finalObjet;
		}
	}else{
		model.resultSet = null;
	}

}else{
	model.resultSet = null;
}

function eliminarRepetidos(arreglo){
	var arreglo2 = arreglo;
	for (var m=0; m<arreglo2.length; m++){
		for (var n=0; n<arreglo2.length; n++){
			if(n!=m){
				if(arreglo2[m]==arreglo2[n]){
					//si hay términos iguales los suprime, y evalua el siguiente que ahora es el mismo término
					arreglo2.splice(n,1);  
					--n;            
				}
			}
		}
	}
	return arreglo2;
}