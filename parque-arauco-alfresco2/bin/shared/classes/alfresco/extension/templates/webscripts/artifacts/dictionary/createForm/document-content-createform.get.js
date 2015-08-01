var varName = args.name;
var varId = args.id;
var varPrefix = args.prefix;

var varExtension = "";
var varState="";

//logger.log("name: "+varName);
//logger.log("id: "+varId);
//logger.log("prefix: "+varPrefix);

if(varId!=null){
varExtension = GetDictionaryService.service(varName,varId, varPrefix);
varState = "true";
}else{
varExtension = "";
varState = "false";
}


model.state = varState;
model.id = varExtension;
//model.ticket='5849859495';
