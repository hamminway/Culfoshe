package com.culfoshe.service;

import com.culfoshe.dto.members.IndividualMemFormDTO;
import com.culfoshe.dto.members.PartnerMemFormDTO;
import com.culfoshe.entity.members.IndividualMem;
import com.culfoshe.entity.members.PartnerMem;
import com.culfoshe.repository.IndividualMemRepository;
import com.culfoshe.repository.PartnerMemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class MemService implements UserDetailsService {

    private final IndividualMemRepository individualMemRepository;
    private final PartnerMemRepository partnerMemRepository;
    private final PasswordEncoder passwordEncoder;

    public IndividualMem saveIndividualMem(IndividualMemFormDTO individualMemFormDTO) {
        validateDulicateMember(individualMemFormDTO.getEmail());
        return individualMemRepository.save(IndividualMemFormDTO.createIndividualMem(individualMemFormDTO, passwordEncoder));
    }

    public PartnerMem savePartnerMem(PartnerMemFormDTO partnerMemFormDTO){
        validateDulicateMember(partnerMemFormDTO.getEmail());
        return partnerMemRepository.save(PartnerMemFormDTO.createPartnerMem(partnerMemFormDTO, passwordEncoder));
    }

    private void validateDulicateMember(String email) {
        IndividualMem findIndividualMem = individualMemRepository.findByEmail(email);
        PartnerMem findPartnerMem = partnerMemRepository.findByEmail(email);

        if(findIndividualMem != null || findPartnerMem != null) {
            throw new IllegalStateException("이미 가입된 회원입니다.");
        }
    }


    //memberRepository에서 받는 String id로 변경해줘야함
    @Override
    public UserDetails loadUserByUsername(String email)
                                    throws UsernameNotFoundException {
        IndividualMem individualMem = individualMemRepository.findByEmail(email);

       if(individualMem == null){
           throw new UsernameNotFoundException(email);
       }

       return User.builder()
               .username(individualMem.getEmail())
               .password(individualMem.getPassword())
               /*.roles(individualMem.getRole().toString())  //사용자 권한 설정*/
               .build();
    }
}
