package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.Question;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class Questions extends EntityManager<Question> {

	public Questions() {
		super(Question.class);
	}

}
