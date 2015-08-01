
var url = "/arauco/getTicket";


var connector = remote.connect("alfresco");
//logger.log("entro a buscar el ticket");
var data = connector.post(url,jsonUtils.toJSONString(""),"application/json");

var result = eval('(' + data + ')');


model.ticket = result.ticket;

//logger.log("el ticket es:"+result.ticket);


