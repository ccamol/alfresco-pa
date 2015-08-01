var consultId = args.consultId ? args.consultId : null;

if(consultId !== null){
	model.consultId = consultId;
}else{
	model.consultId = null;
}