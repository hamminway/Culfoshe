package com.culfoshe.entity.members;



import com.culfoshe.dto.members.IndividualMemFormDTO;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Table(name = "individualMem")
@Getter @Setter @ToString
public class IndividualMem {

    @Id
    @Column(name = "individualMem_Id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;

    @Email
    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String phoneNum;

    private String interest;
    private String interestArea;

    private String IndividualDomain;



    public static IndividualMem createMember(IndividualMemFormDTO individualMemFormDTO, PasswordEncoder passwordEncoder) {

        IndividualMem individualMem = new IndividualMem();

        individualMem.setEmail(individualMemFormDTO.getEmail());
        String password = passwordEncoder.encode(individualMemFormDTO.getPassword());
        individualMem.setPassword(password);

        individualMem.setName(individualMemFormDTO.getName());
        individualMem.setPhoneNum(individualMemFormDTO.getPhoneNum());

        individualMem.setInterest(individualMemFormDTO.getInterest());
        individualMem.setInterestArea(individualMemFormDTO.getInterestArea());
        individualMem.setIndividualDomain(individualMemFormDTO.getIndividualDomain());

        return individualMem;
    }

}
