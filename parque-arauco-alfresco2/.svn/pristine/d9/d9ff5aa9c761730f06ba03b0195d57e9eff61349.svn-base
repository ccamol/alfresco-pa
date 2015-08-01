package com.intellego.parquearauco.filters;


import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;
import com.intellego.parquearauco.security.filters.TextFilter;

public class CheckListCommentFilter extends ObjectFilter {

	private static final long serialVersionUID = 1L;
	private NumericFilter id;
	private NumericFilter nodeType;
	private NumericFilter nodeId;
	private NumericFilter idDocument;
	private TextFilter uuid;
	private TextFilter comment;
	
	public CheckListCommentFilter(){
		this.id = new NumericFilter();
		this.id.setField("id");

		this.nodeType = new NumericFilter();
		this.nodeType.setField("nodeType");

		this.nodeId = new NumericFilter();
		this.nodeId.setField("nodeId");

		this.idDocument = new NumericFilter();
		this.idDocument.setField("idDocument");

		this.uuid = new TextFilter();
		this.uuid.setField("uuid");

		this.comment = new TextFilter();
		this.comment.setField("comment");

	}

	public NumericFilter getId() {
		return id;
	}

	public void setId(NumericFilter id) {
		this.id = id;
	}

	public NumericFilter getNodeType() {
		return nodeType;
	}

	public void setNodeType(NumericFilter nodeType) {
		this.nodeType = nodeType;
	}

	public NumericFilter getNodeId() {
		return nodeId;
	}

	public void setNodeId(NumericFilter nodeId) {
		this.nodeId = nodeId;
	}

	public NumericFilter getIdDocument() {
		return idDocument;
	}

	public void setIdDocument(NumericFilter idDocument) {
		this.idDocument = idDocument;
	}

	public TextFilter getUuid() {
		return uuid;
	}

	public void setUuid(TextFilter uuid) {
		this.uuid = uuid;
	}

	public TextFilter getComment() {
		return comment;
	}

	public void setComment(TextFilter comment) {
		this.comment = comment;
	}
	
}
