package com.culfoshe.controller;

import com.culfoshe.dto.members.IndividualMemFormDTO;
import com.culfoshe.entity.members.IndividualMem;
import com.culfoshe.service.MemService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemService memService;
    private final PasswordEncoder passwordEncoder;

    @GetMapping(value = "/login")
    public String loginMember(){
        return "members/memberLoginForm";
    }

    @GetMapping(value = "/login/error")
    public String loginError(Model model){
        model.addAttribute("loginErrorMsg", "아이디 또는 비밀번호를 확인해주세요");
        return "members/memberLoginForm";
    }

    @GetMapping(value = "/new")
    public String memberForm(Model model) {
        model.addAttribute("IndividualMemFormDTO", new IndividualMemFormDTO());
        return "members/memberForm";
    }

    @PostMapping(value = "/new")
    public String memberForm(IndividualMemFormDTO individualMemFormDTO) {
        memService.saveIndividualMem(individualMemFormDTO);
        return "redirect:/";
    }


}
