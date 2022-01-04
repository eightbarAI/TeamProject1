package kr.co.teamproject.board;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BoardController {
	
	@RequestMapping(value  = "home", method = RequestMethod.GET)
	public String list(Model model) {
		return "home";
	}

}
