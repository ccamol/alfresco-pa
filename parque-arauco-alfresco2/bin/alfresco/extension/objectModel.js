var GREATER_THAN = 2;
var GREATER_EQUALS_THAN = 1;
var EQUALS_TO = 0;
var LOWER_EQUALS_THAN = -1;
var LOWER_THAN = -2;

var STARTS_WITH_UPPERCASE = 3;
var ENDS_WITH_UPPERCASE = 4;
var CONTAINS_UPPERCASE = 5;
var STARTS_WITH = 6;
var ENDS_WITH = 7;
var CONTAINS = 8;

function Area(){
	var dto = Packages.com.intellego.parquearauco.security.dto.Area;
	return dto();
}

function Node(){
	var dto = Packages.com.intellego.parquearauco.security.dto.Node;
	return dto();
}

function Rol(){
	var dto = Packages.com.intellego.parquearauco.security.dto.Rol;
	return dto();
}

function Funcionality(){
	var dto = Packages.com.intellego.parquearauco.security.dto.Funcionality;
	return dto();
}

function Acl(){
	var dto = Packages.com.intellego.parquearauco.security.dto.Acl;
	var newDto = dto();
	newDto.rol=new Rol();
	return newDto;
}

function RolFuncionality(){
	var dto = Packages.com.intellego.parquearauco.security.dto.RolFuncionality;
	var newDto = dto();
	newDto.rol=new Rol();
	newDto.funcionality=new Funcionality();
	return newDto;
}

function NumericFilter(){
	var filter = Packages.com.intellego.parquearauco.security.filters.NumericFilter;
	return filter();
}

function TextFilter(){
	var filter = Packages.com.intellego.parquearauco.security.filters.TextFilter;
	return filter();
}

function DateFilter(){
	var filter = Packages.com.intellego.parquearauco.security.filters.DateFilter;
	return filter();
}

function BooleanFilter(){
	var filter = Packages.com.intellego.parquearauco.security.filters.BooleanFilter;
	return filter();
}

function NodeFilter(){
	var dto = Packages.com.intellego.parquearauco.security.filters.NodeFilter;
	return dto();
}

function RolFilter(){
	var dto = Packages.com.intellego.parquearauco.security.filters.RolFilter;
	return dto();
}

function FuncionalityFilter(){
	var dto = Packages.com.intellego.parquearauco.security.filters.FuncionalityFilter;
	return dto();
}

function AclFilter(){
	var dto = Packages.com.intellego.parquearauco.security.filters.AclFilter;
	return dto();
}

function RolFuncionalityFilter(){
	var dto = Packages.com.intellego.parquearauco.security.filters.RolFuncionalityFilter;
	return dto();
}

function Terms(){
	var dto = java.util.ArrayList;
	return dto();
}

function Response(){
	var dto = Packages.com.intellego.parquearauco.dto.Response;
	return dto();
}

function Classification(){
	var dto = Packages.com.intellego.parquearauco.classification.dto.Classification;
	return dto();
}

function FlowByDocumentFilter(){
	var dto = Packages.com.intellego.parquearauco.workflow.filters.FlowByDocumentFilter;
	return dto();
}

function CheckList(){
	var dto = Packages.com.intellego.parquearauco.dto.CheckList;
	return dto();
}

function CheckListFilter(){
	var dto = Packages.com.intellego.parquearauco.filters.CheckListFilter;
	return dto();
}

function CheckListResultSet(){
	var dto = Packages.com.intellego.parquearauco.dto.CheckListResultSet;
	return dto();
}

function CheckListComment(){
	var dto = Packages.com.intellego.parquearauco.dto.CheckListComment;
	return dto();
}

function CheckListCommentFilter(){
	var dto = Packages.com.intellego.parquearauco.filters.CheckListCommentFilter;
	return dto();
}

function EntryPoint(){
	var dto = Packages.com.intellego.parquearauco.classification.dto.EntryPoint;
	return dto();
}
