var nodeIdSecurity;
var nodeTypeSecurity;


$(document).ready(function() {
	showBreadCrumb();
});

function deleteACL(aclId){
	$.ajax({
		url:'/share/page/dashlets/deleteAcl',
		type: "get",
		dataType: "html", 
		data : {
			aclId : aclId
		},
		async: false,  		
		success:   function(data) {
			if(data.status=="-1") 
				popupAlert("Se produjo un error al eliminar el ACL");
			refreshSelectSecurity();
		}
	});
}

function addACL(rolId, username){
	$.ajax({
		url:'/share/page/dashlets/addUpdateAcl',
		type: "get",
		dataType: "html", 
		data : {
			nodeType : nodeTypeSecurity,
			nodeId : nodeIdSecurity,
			rolId : rolId,
			username : username
		},
		async: false,  		
		success:   function(data) {
			if(data.status=="-1")
			popupAlert("Se produjo un error al agregar el ACL");
			refreshSelectSecurity();
		}
	});
}

function updateACL(aclId, rolId, username){
	var newRol=$("#documentalRol_" + aclId).val();
	
	$.ajax({
		url:'/share/page/dashlets/addUpdateAcl',
		type: "get",
		dataType: "html", 
		data : {
			nodeType : nodeTypeSecurity,
			nodeId : nodeIdSecurity,
			aclId : aclId,
			rolId : newRol,
			username : username
		},
		async: false,  		
		success:   function(data) {
			if(data.status=="-1")
			popupAlert("Se produjo un error al actualizar el ACL");
		}
	});
}

function searchUsers(){
	var userFilter = $("#searchUser").val();
	$.ajax({
		url:'/share/page/dashlets/searchUser',
		type: "get",
		dataType: "html", 
		data : {
			filter : userFilter,
		},
		async: false,  		
		success:   function(data) {
			$("#securityUsers").html(data);
		
		}
	});
}
function refreshSelectSecurity(){
	$.ajax({
		url:'/share/page/dashlets/userSelected',
		type: "get",
		dataType: "html", 
		data : {
			nodeType : nodeTypeSecurity,
			id : nodeIdSecurity
		},
		async: false,  		
		success:   function(data) {
			$("#securitySelected").html(data);
		}
	});
}


function selectSecurity(){
	nodeIdSecurity = getVars()["id"].replace(".", "");
	nodeTypeSecurity = getVars()["nodeType"];
	$.ajax({
		url:'/share/page/dashlets/selectUser',
		type: "get",
		dataType: "html", 
		data : {
			nodeType : nodeTypeSecurity,
			id : nodeIdSecurity
		},
		async: false,  		
		success:   function(data) {
			$("#securityUsers").remove();
			$("#userSelectedTable").remove();
			$("#securitySelected").remove();
			$("#searchUser").remove();
			popupMedium(data);
		}
	});
}

function selectProjectSecurity(projectType, projectId){
	
	nodeIdSecurity = projectId;
	nodeTypeSecurity = projectType;
	
	$.ajax({
		url:'/share/page/dashlets/selectUser',
		type: "get",
		dataType: "html", 
		data : {
			nodeType : nodeTypeSecurity,
			id : nodeIdSecurity
		},
		async: false,  		
		success:   function(data) {
			$("#securityUsers").remove();
			$("#userSelectedTable").remove();
			$("#securitySelected").remove();
			$("#searchUser").remove();
			popupMedium(data);
		}
	});
}

function showBreadCrumb(){
	nodeId = getVars()["id"];
	nodeType = getVars()["nodeType"];
//	siteSelected = getVars()["selected"];
	siteSelected = $("#siteId").val();
	idTender = getVars()["idTender"];

    $.ajax({
            url:'/share/page/dashlets/breadcrumb',
            type: "get",
            dataType: "html",
            async: false,
            data : {
                    nodeType : nodeType,
                    id : nodeId,
                    siteSelected : siteSelected,
                    idTender : idTender
            },
            success: function(data) {
                    $( "#alf-hd" ).append(data);
            }
    });
}

function getVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}