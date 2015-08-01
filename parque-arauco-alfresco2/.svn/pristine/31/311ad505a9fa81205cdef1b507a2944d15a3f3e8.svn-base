package com.intellego.parquearauco.security.baseprocessorextension;

import java.util.List;

import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.dto.Node;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class Nodes extends EntityManager<Node>{

	public Nodes(){
		super(Node.class);
	}
	
	public Response<Node> parent(Integer idNode){
		
		Response<Node> result = new Response<Node>();
		Response<Node> node = new Response<Node>();
		
		node = this.getById(idNode);
		
		Node currentNode = node.getResult();
		
		if(currentNode!=null && currentNode.getParent()!=null && currentNode.getParent()>-1){
			result = this.getById(currentNode.getParent());
		}
		
		return result;
	}
	
	public Response<List<Node>> childrens(Integer idNode){
		
		Response<List<Node>> result = new Response<List<Node>>();

		if(idNode!=null && idNode>-1){
			String query = "FROM NodeEntity A WHERE A.parent = " + idNode;
			result = getAll(query);
		}
		
		return result;
	}

}
