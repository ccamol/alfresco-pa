var filter= args.filter ? args.filter : null;

var url = "/arauco/searchUsers?filter=" + escape(filter);

var connector = remote.connect("alfresco");
var data = connector.get(url);

model.data = data;








