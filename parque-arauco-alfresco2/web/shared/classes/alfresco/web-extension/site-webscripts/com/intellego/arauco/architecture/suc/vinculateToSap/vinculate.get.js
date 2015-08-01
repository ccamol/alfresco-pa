var id= args.id ? args.id : null;
var sucName= args.sucName ? args.sucName : null;
var description= args.description ? args.description : null;
var storeM2= args.storeM2 ? args.storeM2 : null;
var mall= args.mall ? args.mall : null;

var url = "/arauco/selectSAPSuc?mall=" + mall;

var connector = remote.connect("alfresco");
var data = connector.call(url);

var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
model.status = result["status"];
model.message = result["message"];
model.id=id;
model.sucName=sucName;
model.description=description;
model.storeM2=storeM2;
