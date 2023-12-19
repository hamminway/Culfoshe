package com.culfoshe.service;

import com.culfoshe.entity.members.IndividualMem;
import com.culfoshe.repository.IndividualMemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
@RequiredArgsConstructor
public class IndividualMemService implements UserDetailsService {

    private final IndividualMemRepository individualMemRepository;

    public IndividualMem saveMember(IndividualMem individualMem) {
        validateDulicateMember(individualMem);
        return individualMemRepository.save(individualMem);
    }

    private void validateDulicateMember(IndividualMem individualMem) {
        IndividualMem findMember = individualMemRepository.findByEmail(individualMem.getEmail());

        if(findMember != null) {
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
