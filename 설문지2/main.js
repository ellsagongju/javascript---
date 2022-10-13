$(document).ready(function () {



});

let qNum = 1;
let qCount = 0;
let qList = [];
let qNumList = [];

function changeQ() {
    let qName=$('#q_list option:selected').text();
    let qCode=$('#q_list option:selected').val();
	let qAdd = "";

		if(qCount>=3){
			alert('질문 최대 3개까지만 선택 가능합니다.');
			return false;
		}else if(qList.includes(qCode)){
			alert('이미 선택한 질문입니다.');
			return false;
		}else if(qCode=""){
			alert('질문을 선택하지 않았습니다.');
			return false;
		} else {
			qNumList.push(qNum);
			let qWarp = qList.push(qCode);
			console.log(qWarp);
			
			qAdd = '<div class="survey_list">';
			qAdd+='<span class="survey_num">';
			qAdd+='Q'+qNum+"</span>";
			qAdd+='<label class="survey_text">';
			qAdd+=qName+"</label>";
			qAdd+='<button type="button" id="qDelBtn'+qWarp+'" class="qDelBtn">';
			qAdd+='-</button></div>';
			
			console.log(qAdd);
			
			$('#survey_list_wrap').append(qAdd);
			qCount++;
			qNum++;
		
			console.log(qNumList);
		}
}

$(document).on('click', '.qDelBtn', function(){
	//배열에서 빼주고 
	let q=$(this).attr('id'); //형제의 텍스트값
	// console.log(q);
	// console.log("인덱스: " + qList.indexOf(q));
	
	qList.splice(qList.indexOf($(this)), 1); //배열에서 원소 제거
	qNumList.splice(qNumList.indexOf($(this)), 1); //배열에서 원소 제거
	console.log(qNumList);
	
	//리무브 해주고
	$(this).parent().remove();
	qCount--;
	qNum--;
});