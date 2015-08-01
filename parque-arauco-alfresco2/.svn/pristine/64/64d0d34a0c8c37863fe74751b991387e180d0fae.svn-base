function main() {

	var uuid = args.uuid ? args.uuid : null;	
	
	if (uuid != null) {

		var node = search.findNode("workspace://SpacesStore/" + uuid);
	
		if (node != null) {
			model.document = node;
		}
	}
}

main();