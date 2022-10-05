

// 항목추가형/항목선택형
$(function(){	
	$(document).on("change", "select[name=item]", function(){
		var value = $(this).find("option:selected").val();
		if (value == item_add) {
         $('.item_wrap01').show();
         $('.item_wrap02').hide();
		}
	});

})



$(document).ready(function () {

   // 답변항목 옵션 비/활성화 여부
   $("input:radio[name=bothChoice]").click(function(){      
   if($("input:radio[name=bothChoice]:checked").val()=='yes'){      
      $("#rankUse").attr("disabled", false);  //순위
      $("#numUse").attr("disabled", false);  // 최대수 체크

   } else if($("input:radio[name=bothChoice]:checked").val()=='no') {
      $("#rankUse").attr("disabled",true);
      $("#numUse").attr("disabled", true);
      $(".checkNum").attr("disabled",true);
   }
   });

   // 최대 수의 숫자 input 비/활성화 여부
   $("#numUse").click(function(){
      if (this.checked) {
         $(".checkNum").prop("disabled",false);
		}
		else{
			$(".checkNum").prop("disabled",true);
		}
	});

   
   // 항목 선택형 태그삭제
   $('.del_tag').click(function(){
      $(this).parent().hide();
   });

   // 항목 선택형 리스트 삭제
   $('.del_item_button').click(function(){
      $(this).parent().hide();
   });

});