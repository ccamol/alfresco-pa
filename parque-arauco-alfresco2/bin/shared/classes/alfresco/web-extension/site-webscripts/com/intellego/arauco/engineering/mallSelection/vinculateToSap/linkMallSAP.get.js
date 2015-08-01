var virtualMall= args.virtualMall ? args.virtualMall : null;
var realMall= args.realMall ? args.realMall : null;


var url = "/arauco/linkMallSAP?virtualMall=" + virtualMall + "&realMall=" + realMall;

var connector = remote.connect("alfresco");
var data = connector.call(url);

model.data=data;