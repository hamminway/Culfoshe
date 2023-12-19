package com.culfoshe.controller;

import com.culfoshe.dto.members.IndividualMemFormDTO;
import com.culfoshe.entity.members.IndividualMem;
import com.culfoshe.service.IndividualMemService;
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

    private final IndividualMemService individualMemService;

    private final PasswordEncoder passwordEncoder;

    @GetMapping(value = "/login")
    public String loginMember(){
        return "member/memberLoginForm";
    }

    @GetMapping(value = "/login/error")
    public String loginError(Model model){
        model.addAttribute("loginErrorMsg", "아이디 또는 비밀번호를 확인해주세요");
        return "member/memberLoginForm";
    }

    @GetMapping(value = "/new")
    public String memberForm(Model model) {
        model.addAttribute("memberFormDTO", new IndividualMemFormDTO());
        return "member/memberForm";
    }

    @PostMapping(value = "/new")
    public String memberForm(IndividualMemFormDTO memberFormDTO) {
        IndividualMem individualMem = IndividualMem.createMember(memberFormDTO, passwordEncoder);
        individualMemService.saveMember(individualMem);
        return "redirect:/";
    }


}
