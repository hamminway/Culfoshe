package com.culfoshe.controller;

import com.culfoshe.dto.members.IndividualMemFormDTO;
import com.culfoshe.dto.members.PartnerMemFormDTO;
import com.culfoshe.entity.members.IndividualMem;
import com.culfoshe.service.MemService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

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
    public String individualMemForm(Model model) {
        model.addAttribute("IndividualMemFormDTO", new IndividualMemFormDTO());
        model.addAttribute("PartnerMemFormDTO", new PartnerMemFormDTO());

        return "members/memberForm";
    }

    @PostMapping(value = "/newIndividual")
    public String individualMemForm(@Valid IndividualMemFormDTO individualMemFormDTO, BindingResult bindingResult, Model model) {

        if(bindingResult.hasErrors()){
            return "members/memberForm";
        }

        try {
            memService.saveIndividualMem(individualMemFormDTO);
            System.out.println(individualMemFormDTO.toString());
        } catch (IllegalStateException e) {
            model.addAttribute("errorMessage", e.getMessage());
            return "member/memberForm";
        }

        return "redirect:/";
    }

    @PostMapping(value = "/newPartner")
    public String partnerMemForm(@Valid PartnerMemFormDTO partnerMemFormDTO, BindingResult bindingResult, Model model) {

        if(bindingResult.hasErrors()){
            return "members/memberForm";
        }

        try {
            memService.savePartnerMem(partnerMemFormDTO);
            System.out.println(partnerMemFormDTO.toString());
        } catch (IllegalStateException e) {
            model.addAttribute("errorMessage", e.getMessage());
            return "member/memberForm";
        }

        return "redirect:/";
    }

}
