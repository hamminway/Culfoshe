package com.culfoshe.entity.members;

import com.culfoshe.dto.members.PartnerMemFormDTO;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.Email;

@Entity
@Table(name = "partnerMem")
@Getter @Setter @ToString
public class PartnerMem {

    @javax.persistence.Id
    @Column(name = "partnerMem_Id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;

    @Email
    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String PresidentName;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String phoneNum;

    private String storeName;

    @Column(nullable = false)
    private String storeNum;

    @Column(nullable = false)
    private String storeLocation;

    private String PartnerDomain;

    private String businessHours;

    @Column(nullable = false)
    private String signatureMenu; //이미지
    private String notice;

    @Column(nullable = false)
    private String storeImage;

    public static PartnerMem createMember(PartnerMemFormDTO partnerMemFormDTO, PasswordEncoder passwordEncoder) {

        PartnerMem partnerMem = new PartnerMem();

        partnerMem.setEmail(partnerMemFormDTO.getEmail());
        String password = passwordEncoder.encode(partnerMemFormDTO.getPassword());
        partnerMem.setPassword(password);

        /*partnerMem.setPresidentName(memberFormDTO.ge);*/
        partnerMem.setName(partnerMemFormDTO.getName());
        partnerMem.setPhoneNum(partnerMemFormDTO.getPhoneNum());

        partnerMem.setPartnerDomain(partnerMemFormDTO.getPartnerDomain());

        return partnerMem;
    }
}
