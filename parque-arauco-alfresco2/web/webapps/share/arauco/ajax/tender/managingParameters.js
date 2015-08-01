$(document).ready(function() {	
	showQuestionsAnswers();
	$('input[type=radio][name=categoryType]').change(function() {
		enableParticipants();
	});
});



function showQuestionsAnswers(){
	$.ajax({
		url:'/share/service/dashlets/questionsAnswers',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			filter : idTenderManaging
		},

		success:   function(data) {
			$('#parameterInf').html(data);
		}
	});	

	getCategories(idTenderManaging);
	getCategoriesTender(idTenderManaging);
}



function getCategories(idTenderMan){
	$.ajax({
		url:'/share/service/dashlets/getCategories?idTender='+idTenderMan,
		type: "get",
		dataType: "html",  
		async: false, 
		success:   function(data) {
			$('#getCategories').html(data);
		}
	});	
}

function getCategoriesTender(idTenderMan){
	$.ajax({
		url:'/share/service/dashlets/getTenderCategories?idTender='+idTenderMan,
		type: "get",
		dataType: "html",  
		async: false, 
		success:   function(data) {
			$('#TenderCategories').html(data);
		}
	});	
}

function addCategoryToTender(idCategory){
	$.ajax({
		url:'/share/page/dashlets/addTenderCategory?idTender='+idTenderManaging+'&idCategory='+idCategory,
		type: "get",
		dataType: "html",  
		async: false, 
		success:   function(data) {
			popupSuccessTender('Categoría vinculada a la Licitación');
		}
	});	

	getCategories(idTenderManaging);
	getCategoriesTender(idTenderManaging);
}






function addCategory(){

	$.ajax({
		url:'/share/service/dashlets/addCategory',
		type: "get",
		dataType: "html",  
		async: false,  
		data : {
			name : $("#name").val(),
			description : $("#description").val(),
			categoryType : $("#categoryType").val(),
		},
		success:   function(data) {

			var status = parseInt(data);

			if (status>0) {
//				popupSuccess('Categoria creada');
				popupSuccessTender('Categoria creada');
				$("#name").val('');
				$("#description").val('');
			}
			if (status==-1) {
				popupAlert('Error a Crear Categoria');
				$("#name").val('');
				$("#description").val('');
			}
			if (status==-2) {
				popupAlert('Debe Ingresar Todos Los Datos');
				$("#name").val('');
				$("#description").val('');
			}


		}
	});

	getCategories(idTenderManaging);
	getCategoriesTender(idTenderManaging);
}


function removeCategoryToTender(idCategory){
	$.ajax({
		url:'/share/page/dashlets/removeTenderCategory?idTenderCategory='+idCategory,
		type: "get",
		dataType: "html",  
		async: false, 
		success:   function(data) {
			popupSuccessTender('Categoría desvinculada de la Licitación');
		}
	});	
	getCategories(idTenderManaging);
	getCategoriesTender(idTenderManaging);
}

function enableParticipants(){
	var participant = $("input[name=categoryType]:checked").val();
	$.ajax({
		url:'/share/service/dashlets/enableParticipants',
		type: "get",
		dataType: "html",  
		async: true,  
		data : {
			idTender : idTenderManaging,
			participant : participant

		},
		success:   function(data) {
			if(participant == 0){
				popupSuccessTender("Participantes Deshabilidatos");
			}else if(participant == 1){
				popupSuccessTender("Participantes Habilidatos");
			}
		}
	});

}

function callbackAlert(msg){
	popupAlert(msg);
}