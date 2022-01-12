window.addEventListener("load", function(event){
	//DOM 객체 찾아오기
	var loginform = document.getElementById("loginform");
	var loginbtn = document.getElementById("loginbtn");
	
	var email = document.getElementById("email");
	var pw = document.getElementById("pw");
	
	var msg = document.getElementById("msg");
	loginbtn.addEventListener("click", function(event){
		var flag = false;
		
		if (email.value.trim().length < 1) {
			msg.innerHTML = '이메일은 필수 입력입니다.<br/>';
			flag = true;
		} 
		
		if (pw.value.trim().length < 1) {
			msg.innerHTML += '비밀번호는 필수 입력입니다.<br/>';
			flag = true;
		} 
		
		if(flag == true){
			return;
		}
		var url="loginajax";
		
		var param = "?pw=" + pw.value + "&email=" + email.value;
		
		var request=new XMLHttpRequest();
		
		//요청 생성
		request.open("post", 'loginajax' + encodeURI(param), true);
		
		//요청 전송
		request.send('');
		
		//ajax 요청 응답이 오면
		request.addEventListener('load', function(e){
			 
			 //결과를 JSON 파싱
			 var map = JSON.parse(e.target.responseText);
			
			//로그인 성공하면 서버에게 요청 
			 if(map.result == true){
			 	location.href = "/";
			 }else{
			 //회원가입 실패한 경우
			 	msg.innerHTML = "잘못된 이메일이거나 비밀번호가 틀렸습니다.";
			 }
		  });
	});
});
