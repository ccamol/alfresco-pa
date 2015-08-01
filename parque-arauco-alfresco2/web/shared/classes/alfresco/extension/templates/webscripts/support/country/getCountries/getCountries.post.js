var response = CountrySrv.getAll();

if(response.status > -1){
	model.resultSet = response;
}else{
	model.resultSet = null;
}



