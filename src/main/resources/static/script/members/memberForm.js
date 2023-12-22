
  /*
  1. 전체 동의버튼 누르면 전체 체크
  1-1. 하나라도 체크박스를 해제하면 전체 해제
  */

  document.addEventListener('DOMContentLoaded', () => {
    const allcheck = document.getElementById('indickall');
    const evtBtn1 = document.getElementById('indick_a');
    const evtBtn2 = document.getElementById('indick_b');
    const evtBtn3 = document.getElementById('indick_c');
    const evtBtn4 = document.getElementById('indick_d');

    allcheck.addEventListener('click', (event)  => {

      const chckValue = event.currentTarget.checked;
      evtBtn1.checked = chckValue
      evtBtn2.checked = chckValue
      evtBtn3.checked = chckValue
      evtBtn4.checked = chckValue

    })

    evtBtn1.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
          allcheck.checked = false;
      }
    })

    evtBtn2.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
          allcheck.checked = false;
      }
    })

    evtBtn3.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
          allcheck.checked = false;
      }
    })

    evtBtn4.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
          allcheck.checked = false;
      }
    })
  });

  document.addEventListener('DOMContentLoaded', () => {
    const allcheck = document.getElementById('partckall');
    const evtBtn1 = document.getElementById('partner_a');
    const evtBtn2 = document.getElementById('partner_b');
    const evtBtn3 = document.getElementById('partner_c');
    const evtBtn4 = document.getElementById('partner_d');


    allcheck.addEventListener('click', (event)  => {

      const chckValue = event.currentTarget.checked;
      evtBtn1.checked = chckValue
      evtBtn2.checked = chckValue
      evtBtn3.checked = chckValue
      evtBtn4.checked = chckValue

    })

    evtBtn1.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
          allcheck.checked = false;
      }
    })

    evtBtn2.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
          allcheck.checked = false;
      }
    })

    evtBtn3.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
          allcheck.checked = false;
      }
    })

    evtBtn4.addEventListener('click', (event) => {
      if(event.currentTarget.checked == false){
          allcheck.checked = false;
      }
    })
  });

  /*
  2. 회원유형 선택에 따른 블러처리
  */


  $(document).ready(function(){

    $("#indic").click(function(){
      if($('#indic').is(':checked', true)){
        $('#agreebox_indi').find('input').prop('disabled', false);
        $('#agreebox_partner').find('input').prop('disabled', true);
      }
    })

    $("#partner").click(function(){
      if($('#partner').is(':checked', true)){
        $('#agreebox_indi').find('input').prop('disabled', true);
        $('#agreebox_partner').find('input').prop('disabled', false);
      }
    })

  });


  /*
  2. 회원유형에 따른 블럭 올리기
  */


  $(document).ready(function() {
    $("#partner").click(function() {

      $("#indicJoinBtn").hide();
      $("#partJoinBtn").show();

      $(".indexbox1").show();
      $(".indexbox2").hide();
      $(".indexbox1").css({"width":"500px", "height":"550px"});
      $("#allInfor").css({"width":"1500px", "height":"1400px"});
    });

    $("#indic").click(function() {

    $(".interestInfor").show();
    $("#indicJoinBtn").show();
    $("#partJoinBtn").hide();

    $(".indexbox1").hide();
    $(".indexbox2").show();
    $(".indexbox2").css({"width":"500px", "height":"790px"});
    $("#allInfor").css({"width":"1500px", "height":"1400px"});
  });
})


  /*
  3. 정규식
  - 아이디 정규식

  let idValue = document.getElementById('idInput')
  let idbtn = document.getElementById('idbtn')
  let idResult = document.getElementById('idchk')

  idValue.addEventListener("blur", function(){
    checkId();
  })

  function checkId(){
    let idexp=/^[a-zA-Z][0-9a-zA-Z]{6,20}/

    if(idValue.value.length == 0){
      idResult.innerHTML = "* 필수 입력입니다"
    }else if(idexp.test(idValue.value)){
      idResult.innerHTML = " "
    }else{
      idResult.innerHTML = "* 양식에 맞게 입력하세요"
    }
  }

  */


  /*
  3. 정규식
  - 이메일 정규식(개인)
  */

  let indicemail1 = document.getElementById('indicemail1')
  let indicemail2 = document.getElementById('indicemail2')
  let emailResult = document.getElementById('indicEmailchk')

  indicemail1.addEventListener("blur", function(){
    checklndicemail();
  })

  function checklndicemail(){
    let emailexp=/^[a-zA-Z0-9+-\_.]/

    if(indicemail1.value.length == 0){
      emailResult.innerHTML = "* 필수 입력입니다"
    }else if(emailexp.test(indicemail1.value)){
      emailResult.innerHTML = " "
    }else{
      emailResult.innerHTML = "* 이메일 주소를 입력하세요"
    }
  }

  indicemail2.addEventListener("blur", function(){
    checklndicemail1();
  })

  function checklndicemail1(){
    let emailexp2=/^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/

    if(indicemail2.value.length == 0){
      emailResult.innerHTML = "* 필수 입력입니다"
    }else if(emailexp2.test(indicemail2.value)){
      emailResult.innerHTML = " "
    }else{
      emailResult.innerHTML = "* 이메일 주소를 양식에 맞춰 입력하세요"
    }
  }

  /*
  3. 정규식
  - 이메일 정규식(파트너)
  */

  let partemail1 = document.getElementById('partemail1')
  let partemail2 = document.getElementById('partemail2')
  let partEmailchk = document.getElementById('partEmailchk')

  indicemail1.addEventListener("blur", function(){
    checkPartemail2();
  })

  function checkPartemail2(){
    let emailexp=/^[a-zA-Z0-9+-\_.]/

    if(indicemail1.value.length == 0){
      emailResult.innerHTML = "* 필수 입력입니다"
    }else if(emailexp.test(indicemail1.value)){
      emailResult.innerHTML = " "
    }else{
      emailResult.innerHTML = "* 이메일 주소를 입력하세요"
    }
  }

  indicemail2.addEventListener("blur", function(){
    checkPartemail3();
  })

  function checkPartemail3(){
    let emailexp2=/^[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]/

    if(indicemail2.value.length == 0){
      emailResult.innerHTML = "* 필수 입력입니다"
    }else if(emailexp2.test(indicemail2.value)){
      emailResult.innerHTML = " "
    }else{
      emailResult.innerHTML = "* 이메일 주소를 양식에 맞춰 입력하세요"
    }
  }



  /*
  3. 정규식
  - 비밀번호 정규식(개인)
  */

  let indicPwInput = document.getElementById('indicPwInput')
  let indicPwdChk = document.getElementById("indicPwdChk")

  indicPwInput.addEventListener("blur", function(){
    checkpassword();
  })

  function checkpassword(){
    let pwdexp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}/

    if(indicPwInput.value.length == 0){
      indicPwdChk.innerHTML = "* 필수 입력입니다"
    }else if(pwdexp.test(indicPwInput.value)){
      indicPwdChk.innerHTML = " "
    }else{
      indicPwdChk.innerHTML = "* 양식에 맞게 입력하세요"
    }
  }

  /*
  3. 정규식
  - 비밀번호 정규식(파트너)
  */

  let partPwInput = document.getElementById('partPwInput')
  let partPwdChk = document.getElementById("partPwdChk")

  partPwInput.addEventListener("blur", function(){
    checkpassword1();
  })

  function checkpassword1(){
    let pwdexp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}/

    if(partPwInput.value.length == 0){
      partPwdChk.innerHTML = "* 필수 입력입니다"
    }else if(pwdexp.test(partPwInput.value)){
      partPwdChk.innerHTML = " "
    }else{
      partPwdChk.innerHTML = "* 양식에 맞게 입력하세요"
    }
  }



  /*
  3. 정규식
  - 비밀번호 확인 정규식(개인)
  */

  let indicPwInputCheck = document.getElementById('indicPwInputCheck')
  let indicPwdDoubleChk = document.getElementById("indicPwdDoubleChk")

  indicPwInputCheck.addEventListener("blur", function(){
    passwordCheck();
  })

  function passwordCheck(){
    let pwdchkexp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}/

    if(indicPwInputCheck.value.length == 0){
      indicPwdDoubleChk.innerHTML = "* 동일한 비밀번호를 입력해주세요"
    }else if(pwdchkexp.test(indicPwInputCheck.value)){
      indicPwdDoubleChk.innerHTML= " "
    }else if(indicPwInput.value == indicPwInputCheck.value){
      indicPwdDoubleChk.innerHTML = " "
    }else{
      indicPwdDoubleChk.innerHTML = "* 동일한 비밀번호를 입력해주세요"
    }
  }

  /*
  3. 정규식
  - 비밀번호 확인 정규식(파트너)
  */

  let partPwInputCheck = document.getElementById('partPwInputCheck')
  let partPwdDoubleChk = document.getElementById("partPwdDoubleChk")

  partPwInputCheck.addEventListener("blur", function(){
    passwordCheck1();
  })

  function passwordCheck1(){
    let pwdchkexp=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,20}/

    if(partPwInputCheck.value.length == 0){
      partPwdDoubleChk.innerHTML = "* 동일한 비밀번호를 입력해주세요"
    }else if(pwdchkexp.test(partPwInputCheck.value)){
      partPwdDoubleChk.innerHTML= " "
    }else if(partPwInput.value == partPwInputCheck.value){
      partPwdDoubleChk.innerHTML = " "
    }else{
      partPwdDoubleChk.innerHTML = "* 동일한 비밀번호를 입력해주세요"
    }
  }



  /*
  3. 정규식
  - 개인 휴대폰 번호 정규식(개인)
  */

  let indicPhone = document.getElementById('indicPhone')
  let indicPhoneChk = document.getElementById('indicPhoneChk')

  indicPhone.addEventListener("blur", function(){
    checkNumber();
  })
  function checkNumber(){
    let phoneexp =/^[0-1]+-[0-9]+-[0-9]/

    if(indicPhone.value.length == 0){
      indicPhoneChk.innerHTML = "* 필수 입력입니다"
    }else if(phoneexp.test(indicPhone.value)){
      indicPhoneChk.innerHTML = " "
    }else{
      indicPhoneChk.innerHTML = "* 010 - 0000 - 0000 양식에 맞춰 입력하세요"
    }
  }

  /*
  3. 정규식
  - 개인 휴대폰 번호 정규식(파트너)
  */

  let partnerPhone = document.getElementById('partnerPhone')
  let partnerPhoneChk = document.getElementById('partnerPhoneChk')

  partnerPhone.addEventListener("blur", function(){
    checkNumber1();
  })
  function checkNumber1(){
    let phoneexp =/^[0-1]+-[0-9]+-[0-9]/

    if(partnerPhone.value.length == 0){
      partnerPhoneChk.innerHTML = "* 필수 입력입니다"
    }else if(phoneexp.test(partnerPhone.value)){
      partnerPhoneChk.innerHTML = " "
    }else{
      partnerPhoneChk.innerHTML = "* 010 - 0000 - 0000 양식에 맞춰 입력하세요"
    }
  }



  /*
  3. 정규식
  - 사업자 등록번호 정규식
  */

  let storeNum = document.getElementById('storeNum')
  let storeNumResult = document.getElementById('numchk')

  storeNum.addEventListener("blur", function(){
    checkStoreNum();
  })

  function checkStoreNum(){
    let partemailexp = /^[0-9]+-[0-9]+-[0-9]/

    if(storeNum.value.length == 0){
      storeNumResult.innerHTML = "* 필수 입력입니다"
    }else if(partemailexp.test(storeNum.value)){
      storeNumResult.innerHTML = " "
    }else{
      storeNumResult.innerHTML = "* 000 - 00 - 0000 양식에 맞춰 입력하세요"
    }
  }


  /*
      - 비밀번호 양식에 맞지 않을 때, '양식에 맞지 않습니다'를 추가로 띄워주기
      - 비밀번호와 비밀번호 확인이 일치하지 않을 때,
        '입력한 비밀번호가 일치하지 않습니다'로 멘트를 변경하기

  4. 사업장 소재지의 주소 입력창 후, 가져오기

  5. 선택 제한
      - 나의 관심사 선택 최대 3곳
      - 관심지역 선택 최대 3곳
  */

    let interest1 = document.getElementById('interest1')
    let interest2 = document.getElementById('interest2')
    let interest3 = document.getElementById('interest3')
    let interest4 = document.getElementById('interest4')
    let interest5 = document.getElementById('interest5')
    let interest6 = document.getElementById('interest6')
    let interest7 = document.getElementById('interest7')
    let interest8 = document.getElementById('interest8')
    let interest9 = document.getElementById('interest9')
    let interest10 = document.getElementById('interest10')
    let interest11 = document.getElementById('interest11')
    let interest12 = document.getElementById('interest12')
    let interest13 = document.getElementById('interest13')
    let interest14 = document.getElementById('interest14')
    let interest15 = document.getElementById('interest15')
    let interest16 = document.getElementById('interest16')
    let interest17 = document.getElementById('interest17')
    let interest18 = document.getElementById('interest18')

  interest1.addEventListener("click", function(){
    cssChange1();
  })

  function cssChange1() {
    if(interest1.style.backgroundColor == "rgb(16, 104, 63)"){
      interest1.style.color = "white";
      interest1.style.backgroundColor = "rgb(16, 104, 63)";
    }else{
      interest1.style.color = "white";
      interest1.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest2.addEventListener("click", function(){
    cssChange2();
  })

  function cssChange2() {
    if(interest2.style.color == "rgb(16, 104, 63)"){
      interest2.style.color = "white";
      interest2.style.backgroundColor = "rgb(16, 104, 63)";
    }else{
      interest2.style.color = "rgb(16, 104, 63)";
      interest2.style.backgroundColor = "white";
    }
  }

  interest3.addEventListener("click", function(){
    cssChange3();
  })

  function cssChange3() {
    if(interest3.style.color == "rgb(16, 104, 63)"){
      interest3.style.color = "white";
      interest3.style.backgroundColor = "rgb(16, 104, 63)";
    }else{
      interest3.style.color = "rgb(16, 104, 63)";
      interest3.style.backgroundColor = "white";
    }
  }

  interest4.addEventListener("click", function(){
    cssChange4();
  })

  function cssChange4() {
    if(interest4.style.color == "rgb(16, 104, 63)"){
      interest4.style.color = "white";
      interest4.style.backgroundColor = "rgb(16, 104, 63)";
    }else{
      interest4.style.color = "rgb(16, 104, 63)";
      interest4.style.backgroundColor = "white";
    }
  }

  interest5.addEventListener("click", function(){
    cssChange5();
  })

  function cssChange5() {
    if(interest5.style.color == "rgb(16, 104, 63)"){
      interest5.style.color = "white";
      interest5.style.backgroundColor = "rgb(16, 104, 63)";
    }else{
      interest5.style.color = "rgb(16, 104, 63)";
      interest5.style.backgroundColor = "white";
    }
  }

  interest6.addEventListener("click", function(){
    cssChange6();
  })

  function cssChange6() {
    if(interest6.style.color == "rgb(16, 104, 63)"){
      interest6.style.color = "white";
      interest6.style.backgroundColor = "rgb(16, 104, 63)";
    }else{
      interest6.style.color = "rgb(16, 104, 63)";
      interest6.style.backgroundColor = "white";
    }
  }

  interest7.addEventListener("click", function(){
    cssChange7();
  })

  function cssChange7() {
    if(interest7.style.backgroundColor == "rgb(16, 104, 63)"){
      interest7.style.color = "black";
      interest7.style.backgroundColor = "white";
    }else{
      interest7.style.color = "white";
      interest7.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest8.addEventListener("click", function(){
    cssChange8();
  })

  function cssChange8() {
    if(interest8.style.backgroundColor == "rgb(16, 104, 63)"){
      interest8.style.color = "black";
      interest8.style.backgroundColor = "white";
    }else{
      interest8.style.color = "white";
      interest8.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

	interest9.addEventListener("click", function(){
    cssChange9();
  })

  function cssChange9() {
    if(interest9.style.backgroundColor == "rgb(16, 104, 63)"){
      interest9.style.color = "black";
      interest9.style.backgroundColor = "white";
    }else{
      interest9.style.color = "white";
      interest9.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest10.addEventListener("click", function(){
    cssChange10();
  })

  function cssChange10() {
    if(interest10.style.backgroundColor == "rgb(16, 104, 63)"){
      interest10.style.color = "black";
      interest10.style.backgroundColor = "white";
    }else{
      interest10.style.color = "white";
      interest10.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest11.addEventListener("click", function(){
    cssChange11();
  })

  function cssChange11() {
    if(interest11.style.backgroundColor == "rgb(16, 104, 63)"){
      interest11.style.color = "black";
      interest11.style.backgroundColor = "white";
    }else{
      interest11.style.color = "white";
      interest11.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest12.addEventListener("click", function(){
    cssChange12();
  })

  function cssChange12() {
    if(interest12.style.backgroundColor == "rgb(16, 104, 63)"){
      interest12.style.color = "black";
      interest12.style.backgroundColor = "white";
    }else{
      interest12.style.color = "white";
      interest12.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest13.addEventListener("click", function(){
    cssChange13();
  })

  function cssChange13() {
    if(interest13.style.backgroundColor == "rgb(16, 104, 63)"){
      interest13.style.color = "black";
      interest13.style.backgroundColor = "white";
    }else{
      interest13.style.color = "white";
      interest13.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest14.addEventListener("click", function(){
    cssChange14();
  })

  function cssChange14() {
    if(interest14.style.backgroundColor == "rgb(16, 104, 63)"){
      interest14.style.color = "black";
      interest14.style.backgroundColor = "white";
    }else{
      interest14.style.color = "white";
      interest14.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest15.addEventListener("click", function(){
    cssChange15();
  })

  function cssChange15() {
    if(interest15.style.backgroundColor == "rgb(16, 104, 63)"){
      interest15.style.color = "black";
      interest15.style.backgroundColor = "white";
    }else{
      interest15.style.color = "white";
      interest15.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest16.addEventListener("click", function(){
    cssChange16();
  })

  function cssChange16() {
    if(interest16.style.backgroundColor == "rgb(16, 104, 63)"){
      interest16.style.color = "black";
      interest16.style.backgroundColor = "white";
    }else{
      interest16.style.color = "white";
      interest16.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest17.addEventListener("click", function(){
    cssChange17();
  })

  function cssChange17() {
    if(interest17.style.backgroundColor == "rgb(16, 104, 63)"){
      interest17.style.color = "black";
      interest17.style.backgroundColor = "white";
    }else{
      interest17.style.color = "white";
      interest17.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }

  interest18.addEventListener("click", function(){
    cssChange18();
  })

  function cssChange18() {
    if(interest18.style.backgroundColor == "rgb(16, 104, 63)"){
      interest18.style.color = "black";
      interest18.style.backgroundColor = "white";
    }else{
      interest18.style.color = "white";
      interest18.style.backgroundColor = "rgb(16, 104, 63)";
    }
  }
