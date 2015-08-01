package com.intellego.parquearauco.baseprocessorextension;

import com.intellego.parquearauco.dto.Answer;
import com.intellego.parquearauco.security.interfaces.EntityManager;

public class Answers extends EntityManager<Answer> {

	public Answers() {
		super(Answer.class);
	}

}
