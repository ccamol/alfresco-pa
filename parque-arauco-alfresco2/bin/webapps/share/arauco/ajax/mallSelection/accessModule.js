var session;
var token="";
var nodeSession;
var typeMall=2;
var country=null;
var TypeMall=null;
$(document).ready(function() {
	$("#menos").hide();
	$("#mas").click(function(){
		$("#menos").show();
		$("#mas").toggle();
	});

	$("#menos").click(function(){
		$("#mas").show();
		$("#menos").toggle();
	});
	
	selectionMall("1");
	getCountry();
	$("#mallCountry").change(function(){
		country=$("#mallCountry").val();
		selectionMall(TypeMall);
	});
});

function selectionMall(mallType){
	$('#mallsList').html("");
	TypeMall= mallType;
	$.ajax({

		url:'/share/page/dashlets/mallList',
		type: "get",
		dataType: "html", 
		data: {
			filter : TypeMall,
			idCountry : country
		},
		success:   function(data) {

			$('#mallsList').html(data);
		}
	});
}

function selectionCommerce(){
	$.ajax({
		url:'/share/page/dashlets/getCommerce',
		type: "get",
		dataType: "html",  
		success:   function(data) {
			$('#typeCommerce').html(data);
		}
	});
}

function getManagement(id){
	window.location.replace("/share/page/site/arauco/thirdPartyModule?id="+id+"&nodeType="+typeMall);
}

function getCountry(){
	$.ajax({
		beforeSend: function(xhr){
//			xhr.setRequestHeader("Alfresco-CSRFToken",Alfresco.util.CSRFPolicy.getToken());
			//	xhr.setRequestHeader("Alfresco-CSRFToken",token);
		},
//		headers: {"Alfresco-CSRFToken":token },
		url:'/share/page/dashlets/getCountry',
		type: "get",
		dataType: "html",  
		success:   function(data) {
			$('#mallCountry').html(data);
		}
	});
}

function dologout(){
	$.ajax({
		url:'/share/page/dologout',
		type: "get",
		dataType: "html",  
		async: false,
		success:   function(data) {
			window.location.replace("/share/page/moduleAccess");
		}
	});
}
