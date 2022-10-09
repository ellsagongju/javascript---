$(document).ready(function () {



});

let qNum = 1;
let qCount = 0;
let qList = [];


function changeQ() {
    let qName=$('#q_list option:selected').text();
    let qCode=$('#q_list option:selected').val();
    let qAdd="";

		if(qCount>=10){
			alert('질문 최대 10개까지만 선택 가능합니다.');
			return false;
		}else if(qList.includes(qCode)){
			alert('이미 선택한 질문입니다.');
			return false;
		}else if(qCode.value=""){
			alert('질문을 선택하지 않았습니다.');
			return false;
		}else{
			qList.push("qDelBtn"+qCode);
			console.log(qList);
			
			qAdd='<div class="survey_list">';
			qAdd+='<label class="survey_text">';
			qAdd+=qName+"</label>";
			qAdd+='<button type="button" id="qDelBtn'+qNum+'" class="qDelBtn">';
			qAdd+='-</button></div>';
			
			console.log(qAdd);
			
			$('#survey-list_wrap').append(qAdd);
			qCount++;
			qNum++;
		}

}