<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var idTender= bodyContent.idTender ? bodyContent.idTender : null;
var idTypeStage = bodyContent.idTypeStage ? bodyContent.idTypeStage : null;

var userAlfresco = person.properties.userName;
var questionFilter = QuestionFilter();
var EQUALS_TO = 0;
var CONTAINS = 8;
var status=1;
var NO_EQUALS_TO = 9;
var consultsArray=[];
var resultSet =null;
var categories=[];
var categoriesID=[];
var finalObjet=[];
if(idTender !== null){
	questionFilter.tender.exact(idTender, EQUALS_TO);
	questionFilter.author.exact(userAlfresco, EQUALS_TO);
//	questionFilter.status.exact(idTypeStage, EQUALS_TO);
	resultSet = QuestionSrv.getListByFilter(questionFilter);
	if(resultSet.status > -1){
		for (var xx = 0; xx < resultSet.result.size(); xx++) {
//			logger.log(resultSet.result.get(xx).category.id);
			categoriesID.push(resultSet.result.get(xx).category.id);
		}
	}else{
		model.resultSet = null;
	}
	questionFilter.author.exact(userAlfresco, NO_EQUALS_TO);
	questionFilter.publicationStatus.exact(status, EQUALS_TO);
	resultSet = QuestionSrv.getListByFilter(questionFilter);
	if(resultSet.status > -1){
		for (var xx = 0; xx < resultSet.result.size(); xx++) {
//			logger.log(resultSet.result.get(xx).category.id);
			categoriesID.push(resultSet.result.get(xx).category.id);
		}
		categories = eliminarRepetidos(categoriesID);
		for (var i = 0; i < categories.length; i++) {
			var resultCategories = CategoriesSrv.getById(categories[i]);
			finalObjet.push(resultCategories.result);
		}
	}else{
		model.resultSet = null;
	}
	model.resultSet = finalObjet;
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