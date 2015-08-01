var contentviewer = new XML(config.script);


var username = context.user.id;
var jsonUser=remote.call('/arauco/userGroup?username='+username);
var jsonVal=eval('('+jsonUser+')');
var dataUser=jsonVal['data'];

var remote = remote.connect("alfresco");
var jsonStr=remote.call('/arauco/getUserTicket.json');
var json=eval('('+jsonStr+')');
var data=json['data'];

model.status=dataUser.status;
model.ticket=data.ticket;