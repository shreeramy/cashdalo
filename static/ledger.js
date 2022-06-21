$(document).ready(function() {

	var count_2000 = 0; var count_500 = 0;
	var count_200 = 0; var count_100 = 0;
	var count_50 = 0; var count_20 = 0;
	var count_10 = 0; var count_5 = 0;
	var count_coin = 0; 
	var total = 0

	var p_count_2000 = 0; var p_count_500 = 0;
	var p_count_200 = 0; var p_count_100 = 0;
	var p_count_50 = 0; var p_count_20 = 0;
	var p_count_10 = 0; var p_count_5 = 0;
	var p_count_coin = 0
	var p_total = 0

	if ($("#receive_div").attr("class")){
		$("input[name=in_2000]").keyup(function() {
			$("#count_2000").text(Number($("input[name=in_2000]").val()) * 2000)
			count_2000 = Number($("#count_2000").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_2000]").val() == ''){
				$("input[name=out_2000]").prop("disabled",false)
			}else{
				$("input[name=out_2000]").prop("disabled",true)
			}
		});
		$("input[name=in_500]").keyup(function() {
			$("#count_500").text(Number($("input[name=in_500]").val()) * 500)
			count_500 = Number($("#count_500").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_500]").val() == ''){
				$("input[name=out_500]").prop("disabled",false)
			}else{
				$("input[name=out_500]").prop("disabled",true)
			}
		});
		$("input[name=in_200]").keyup(function() {
			$("#count_200").text(Number($("input[name=in_200]").val()) * 200)
			count_200 = Number($("#count_200").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_200]").val() == ''){
				$("input[name=out_200]").prop("disabled",false)
			}else{
				$("input[name=out_200]").prop("disabled",true)
			}
		});
		$("input[name=in_100]").keyup(function() {
			$("#count_100").text(Number($("input[name=in_100]").val()) * 100)
			count_100 = Number($("#count_100").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_100]").val() == ''){
				$("input[name=out_100]").prop("disabled",false)
			}else{
				$("input[name=out_100]").prop("disabled",true)
			}
		});
		$("input[name=in_50]").keyup(function() {
			$("#count_50").text(Number($("input[name=in_50]").val()) * 50)
			count_50 = Number($("#count_50").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_50]").val() == ''){
				$("input[name=out_50]").prop("disabled",false)
			}else{
				$("input[name=out_50]").prop("disabled",true)
			}
		});
		$("input[name=in_20]").keyup(function() {
			$("#count_20").text(Number($("input[name=in_20]").val()) * 20)
			count_20 = Number($("#count_20").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_20]").val() == ''){
				$("input[name=out_20]").prop("disabled",false)
			}else{
				$("input[name=out_20]").prop("disabled",true)
			}
		});
		$("input[name=in_10]").keyup(function() {
			$("#count_10").text(Number($("input[name=in_10]").val()) * 10)
			count_10 = Number($("#count_10").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_10]").val() == ''){
				$("input[name=out_10]").prop("disabled",false)
			}else{
				$("input[name=out_10]").prop("disabled",true)
			}
		});
		$("input[name=in_5]").keyup(function() {
			$("#count_5").text(Number($("input[name=in_5]").val()) * 5)
			count_5 = Number($("#count_5").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_5").val() == ''){
				$("input[name=out_5]").prop("disabled",false)
			}else{
				$("input[name=out_5]").prop("disabled",true)
			}
		});
		$("input[name=in_coin]").keyup(function() {
			$("#count_coin").text(Number($("input[name=in_coin]").val()) * 1)
			count_coin = Number($("#count_coin").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=in_coin]").val() == ''){
				$("input[name=out_coin]").prop("disabled",false)
			}else{
				$("input[name=out_coin]").prop("disabled",true)
			}
		});


		$("input[name=out_2000]").keyup(function() {
			$("#count_2000").text(Number($("input[name=out_2000]").val()) * -2000)
			count_2000 = Number($("#count_2000").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_2000]").val() == ''){
				$("input[name=in_2000]").prop("disabled",false)
			}else{
				$("input[name=in_2000]").prop("disabled",true)
			}
		});
		$("input[name=out_500]").keyup(function() {
			$("#count_500").text(Number($("input[name=out_500]").val()) * -500)
			count_500 = Number($("#count_500").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_500]").val() == ''){
				$("input[name=in_500]").prop("disabled",false)
			}else{
				$("input[name=in_500]").prop("disabled",true)
			}
		});
		$("input[name=out_200]").keyup(function() {
			$("#count_200").text(Number($("input[name=out_200]").val()) * -200)
			count_200 = Number($("#count_200").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_200]").val() == ''){
				$("input[name=in_200]").prop("disabled",false)
			}else{
				$("input[name=in_200]").prop("disabled",true)
			}
		});
		$("input[name=out_100]").keyup(function() {
			$("#count_100").text(Number($("input[name=out_100]").val()) * -100)
			count_100 = Number($("#count_100").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_100]").val() == ''){
				$("input[name=in_100]").prop("disabled",false)
			}else{
				$("input[name=in_100]").prop("disabled",true)
			}
		});
		$("input[name=out_50]").keyup(function() {
			$("#count_50").text(Number($("input[name=out_50]").val()) * -50)
			count_50 = Number($("#count_50").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_50]").val() == ''){
				$("input[name=in_50]").prop("disabled",false)
			}else{
				$("input[name=in_50]").prop("disabled",true)
			}
		});
		$("input[name=out_20]").keyup(function() {
			$("#count_20").text(Number($("input[name=out_20]").val()) * -20)
			count_20 = Number($("#count_20").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_20]").val() == ''){
				$("input[name=in_20]").prop("disabled",false)
			}else{
				$("input[name=in_20]").prop("disabled",true)
			}
		});
		$("input[name=out_10]").keyup(function() {
			$("#count_10").text(Number($("input[name=out_10]").val()) * -10)
			count_10 = Number($("#count_10").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_10]").val() == ''){
				$("input[name=in_10]").prop("disabled",false)
			}else{
				$("input[name=in_10]").prop("disabled",true)
			}
		});
		$("input[name=out_5]").keyup(function() {
			$("#count_5").text(Number($("input[name=out_5]").val()) * -5)
			count_5 = Number($("#count_5").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_5]").val() == ''){
				$("input[name=in_5]").prop("disabled",false)
			}else{
				$("input[name=in_5]").prop("disabled",true)
			}
		});
		$("input[name=out_coin]").keyup(function() {
			$("#count_coin").text(Number($("input[name=out_coin]").val()) * -1)
			count_coin = Number($("#count_coin").text())
			total = (count_2000 + count_500 + count_200 + count_100 + count_50
						+ count_20 + count_10 + count_5 + count_coin)
			$("#total").text(total)
			if ($("input[name=out_coin]").val() == ''){
				$("input[name=in_coin]").prop("disabled",false)
			}else{
				$("input[name=in_coin]").prop("disabled",true)
			}
		});

	   $("#receive_payment_form").submit(function(e){
		   	e.preventDefault();
		   	$("#rec_from_span").empty();
		   	$("#remarks_span").empty();
		   	var rec_from = $("#rec_from").val();
	 		var received_ammount = $("#rec_amm").val();
	 		var remarks = $("#remarks").val();
		   	var form_data = $(this).serializeArray();
		   	if (rec_from == "") {
		   		$("#rec_from_span").text("Please fill receive from field")
		   	}
		   	else if (received_ammount=='') {
		 		$.ajax({
		 			type: 'GET',
		 			url: '/get-note/',
		 			success: function(note_data){
		 				if (note_data){
			 				$("#note_2000").text(note_data.note_2000)
			 				$("#note_500").text(note_data.note_500)
			 				$("#note_200").text(note_data.note_200)
			 				$("#note_100").text(note_data.note_100)
			 				$("#note_50").text(note_data.note_50)
			 				$("#note_20").text(note_data.note_20)
			 				$("#note_10").text(note_data.note_10)
			 				$("#coin_5").text(note_data.coin_5)
			 				$("#coin").text(note_data.coin)

			 				Swal.fire({
							  icon: 'error',
							  title: 'Oops...',
							  text: 'PLEASE CHECK AMOUNT!',
							})
		 				}
		 			}
		 		});
		 	}
		 	else if (remarks == "") {
		 		$("#remarks_span").text("Please fill remarks")
		 	}
		 	else if (Number(received_ammount) != Number(total)){
		 		Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'RECEIVE AMOUNT NOT MATCHED WITH TOTAL AMOUNT!',
				})
		 	}
			else{
		 		$.ajax({
		 			type: 'POST',
		 			url: '/report/',
		 			dataType: 'json',
		 			data: form_data,
		 			success: function(report_data){
		 				id=report_data.id
		 				date = report_data.date
		 				report_data = report_data.report_data
		 				if (report_data){
		 					$("#report_table_list").append(
		 						`
		 							<tr>
		 								<td>${id}</td>
		 								<td>${date}</td>
		 								<td>${report_data.particulars || ''}</td>
		 								<td>${report_data.received_amount || ''}</td>
		 								<td>${report_data.paid_amount || ''}</td>
		 								<td>${report_data.remarks || ''}</td>
		 								<td>${report_data.receive_note_2000 || ''}</td>
		 								<td>${report_data.receive_note_500 || ''}</td>
		 								<td>${report_data.receive_note_200 || ''}</td>
		 								<td>${report_data.receive_note_100 || ''}</td>
		 								<td>${report_data.receive_note_50 || ''}</td>
		 								<td>${report_data.receive_note_20 || ''}</td>
		 								<td>${report_data.receive_note_10 || ''}</td>
		 								<td>${report_data.receive_coin_5 || ''}</td>
		 								<td>${report_data.receive_coin || ''}</td>
		 								<td>${report_data.paid_note_2000 || ''}</td>
		 								<td>${report_data.paid_note_500 || ''}</td>
		 								<td>${report_data.paid_note_200 || ''}</td>
		 								<td>${report_data.paid_note_100 || ''}</td>
		 								<td>${report_data.paid_note_50 || ''}</td>
		 								<td>${report_data.paid_note_20 || ''}</td>
		 								<td>${report_data.paid_note_10 || ''}</td>
		 								<td>${report_data.paid_coin_5 || ''}</td>
		 								<td>${report_data.paid_coin || ''}</td>
		 							</tr>
		 						`)
		 					location.reload(true);
		 				}
		 			}
	  			});
	  		}
	  	});
	}

	if ($("#paid_div").attr("class")){
		$("input[name=p_out_2000]").keyup(function() {
			$("#p_count_2000").text(Number($("input[name=p_out_2000]").val()) * -2000)
			p_count_2000 = Number($("#p_count_2000").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_2000]").val() == ''){
				$("input[name=p_in_2000]").prop("disabled",false)
			}else{
				$("input[name=p_in_2000]").prop("disabled",true)
			}
		});
		$("input[name=p_out_500]").keyup(function() {
			$("#p_count_500").text(Number($("input[name=p_out_500]").val()) * -500)
			p_count_500 = Number($("#p_count_500").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_500]").val() == ''){
				$("input[name=p_in_500]").prop("disabled",false)
			}else{
				$("input[name=p_in_500]").prop("disabled",true)
			}
		});
		$("input[name=p_out_200]").keyup(function() {
			$("#p_count_200").text(Number($("input[name=p_out_200]").val()) * -200)
			p_count_200 = Number($("#p_count_200").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_200]").val() == ''){
				$("input[name=p_in_200]").prop("disabled",false)
			}else{
				$("input[name=p_in_200]").prop("disabled",true)
			}
		});
		$("input[name=p_out_100]").keyup(function() {
			$("#p_count_100").text(Number($("input[name=p_out_100]").val()) * -100)
			p_count_100 = Number($("#p_count_100").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_100]").val() == ''){
				$("input[name=p_in_100]").prop("disabled",false)
			}else{
				$("input[name=p_in_100]").prop("disabled",true)
			}
		});
		$("input[name=p_out_50]").keyup(function() {
			$("#p_count_50").text(Number($("input[name=p_out_50]").val()) * -50)
			p_count_50 = Number($("#p_count_50").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_50]").val() == ''){
				$("input[name=p_in_50]").prop("disabled",false)
			}else{
				$("input[name=p_in_50]").prop("disabled",true)
			}
		});
		$("input[name=p_out_20]").keyup(function() {
			$("#p_count_20").text(Number($("input[name=p_out_20]").val()) * -20)
			p_count_20 = Number($("#p_count_20").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_20]").val() == ''){
				$("input[name=p_in_20]").prop("disabled",false)
			}else{
				$("input[name=p_in_20]").prop("disabled",true)
			}
		});
		$("input[name=p_out_10]").keyup(function() {
			$("#p_count_10").text(Number($("input[name=p_out_10]").val()) * -10)
			p_count_10 = Number($("#p_count_10").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_10]").val() == ''){
				$("input[name=p_in_10]").prop("disabled",false)
			}else{
				$("input[name=p_in_10]").prop("disabled",true)
			}
		});
		$("input[name=p_out_5]").keyup(function() {
			$("#p_count_5").text(Number($("input[name=p_out_5]").val()) * -5)
			p_count_5 = Number($("#p_count_5").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_5]").val() == ''){
				$("input[name=p_in_5]").prop("disabled",false)
			}else{
				$("input[name=p_in_5]").prop("disabled",true)
			}
		});
		$("input[name=p_out_coin]").keyup(function() {
			$("#p_count_coin").text(Number($("input[name=p_out_coin]").val()) * -1)
			p_count_coin = Number($("#p_count_coin").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_out_coin]").val() == ''){
				$("input[name=p_in_coin]").prop("disabled",false)
			}else{
				$("input[name=p_in_coin]").prop("disabled",true)
			}
		});


		$("input[name=p_in_2000]").keyup(function() {
			$("#p_count_2000").text(Number($("input[name=p_in_2000]").val()) * 2000)
			p_count_2000 = Number($("#p_count_2000").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_2000]").val() == ''){
				$("input[name=p_out_2000]").prop("disabled",false)
			}else{
				$("input[name=p_out_2000]").prop("disabled",true)
			}
		});
		$("input[name=p_in_500]").keyup(function() {
			$("#p_count_500").text(Number($("input[name=p_in_500]").val()) * 500)
			p_count_500 = Number($("#p_count_500").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_500]").val() == ''){
				$("input[name=p_out_500]").prop("disabled",false)
			}else{
				$("input[name=p_out_500]").prop("disabled",true)
			}
		});
		$("input[name=p_in_200]").keyup(function() {
			$("#p_count_200").text(Number($("input[name=p_in_200]").val()) * 200)
			p_count_200 = Number($("#p_count_200").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_200]").val() == ''){
				$("input[name=p_out_200]").prop("disabled",false)
			}else{
				$("input[name=p_out_200]").prop("disabled",true)
			}
		});
		$("input[name=p_in_100]").keyup(function() {
			$("#p_count_100").text(Number($("input[name=p_in_100]").val()) * 100)
			p_count_100 = Number($("#p_count_100").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_100]").val() == ''){
				$("input[name=p_out_100]").prop("disabled",false)
			}else{
				$("input[name=p_out_100]").prop("disabled",true)
			}
		});
		$("input[name=p_in_50]").keyup(function() {
			$("#p_count_50").text(Number($("input[name=p_in_50]").val()) * 50)
			p_count_50 = Number($("#p_count_50").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_50]").val() == ''){
				$("input[name=p_out_50]").prop("disabled",false)
			}else{
				$("input[name=p_out_50]").prop("disabled",true)
			}
		});
		$("input[name=p_in_20]").keyup(function() {
			$("#p_count_20").text(Number($("input[name=p_in_20]").val()) * 20)
			p_count_20 = Number($("#p_count_20").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_20]").val() == ''){
				$("input[name=p_out_20]").prop("disabled",false)
			}else{
				$("input[name=p_out_20]").prop("disabled",true)
			}
		});
		$("input[name=p_in_10]").keyup(function() {
			$("#p_count_10").text(Number($("input[name=p_in_10]").val()) * 10)
			p_count_10 = Number($("#p_count_10").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_10]").val() == ''){
				$("input[name=p_out_10]").prop("disabled",false)
			}else{
				$("input[name=p_out_10]").prop("disabled",true)
			}
		});
		$("input[name=p_in_5]").keyup(function() {
			$("#p_count_5").text(Number($("input[name=p_in_5]").val()) * 5)
			p_count_5 = Number($("#p_count_5").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_5]").val() == ''){
				$("input[name=p_out_5]").prop("disabled",false)
			}else{
				$("input[name=p_out_5]").prop("disabled",true)
			}
		});
		$("input[name=p_in_coin]").keyup(function() {
			$("#p_count_coin").text(Number($("input[name=p_in_coin]").val()) * 1)
			p_count_coin = Number($("#p_count_coin").text())
			p_total = (p_count_2000 + p_count_500 + p_count_200 + p_count_100 + p_count_50
						+ p_count_20 + p_count_10 + p_count_5 + p_count_coin)
			$("#p_total").text(p_total)
			if ($("input[name=p_in_coin]").val() == ''){
				$("input[name=p_out_coin]").prop("disabled",false)
			}else{
				$("input[name=p_out_coin]").prop("disabled",true)
			}
		});

		
	   $("#paid_payment_form").submit(function(e){
		   	e.preventDefault();
		   	$("#paid_to_span").empty();
		   	$("#p_remarks_span").empty();
		   	var paid_to = $("#paid_to").val();
	 		var paid_ammount = $("#paid_ammount").val();
	 		var remarks = $("#p_remarks").val();
		   	var form_data = $(this).serializeArray();
		   	if (paid_to == "") {
		   		$("#paid_to_span").text("Please fill paid field")
		   	}
		   	else if (paid_ammount=='') {
		 		$.ajax({
		 			type: 'GET',
		 			url: '/get-note/',
		 			success: function(note_data){
		 				if (note_data){
			 				$("#p_note_2000").text(note_data.note_2000)
			 				$("#p_note_500").text(note_data.note_500)
			 				$("#p_note_200").text(note_data.note_200)
			 				$("#p_note_100").text(note_data.note_100)
			 				$("#p_note_50").text(note_data.note_50)
			 				$("#p_note_20").text(note_data.note_20)
			 				$("#p_note_10").text(note_data.note_10)
			 				$("#p_coin_5").text(note_data.coin_5)
			 				$("#p_coin").text(note_data.coin)

			 				Swal.fire({
							  icon: 'error',
							  title: 'Oops...',
							  text: 'PLEASE CHECK AMOUNT!',
							})
		 				}
		 			}
		 		});
			 }
			else if (paid_ammount){
				$.ajax({
		 			type: 'GET',
		 			url: '/get-note/',
		 			success: function(note_data){
		 				if (Number(note_data.note_2000) < Number($("input[name=p_out_2000]").val())){console.log("20000")
		 					$("#p_note_2000").text(Number(note_data.note_2000) - Number($("input[name=p_out_2000]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK 2000 NOTE!',
								})
		 					return
		 				}
		 				else{
		 					$("#p_note_2000").text(Number(note_data.note_2000))
		 				}
		 				if (Number(note_data.note_500) < Number($("input[name=p_out_500]").val())){
		 					$("#p_note_500").text(Number(note_data.note_500) - Number($("input[name=p_out_500]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK 500 NOTE!',
								})
		 					return
		 				}else{
		 					$("#p_note_500").text(Number(note_data.note_500))
		 				}
		 				if (Number(note_data.note_200) < Number($("input[name=p_out_200]").val())){
		 					$("#p_note_200").text(Number(note_data.note_200) - Number($("input[name=p_out_200]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK 200 NOTE!',
								})
		 					return
		 				}else{
		 					$("#p_note_200").text(Number(note_data.note_200))
		 				}
		 				if (Number(note_data.note_100) < Number($("input[name=p_out_100]").val())){
		 					$("#p_note_100").text(Number(note_data.note_100) - Number($("input[name=p_out_100]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK 100 NOTE!',
								})
		 					return
		 				}else{
		 					$("#p_note_100").text(Number(note_data.note_100))
		 				}
		 				if (Number(note_data.note_50) < Number($("input[name=p_out_50]").val())){
		 					$("#p_note_50").text(Number(note_data.note_50) - Number($("input[name=p_out_50]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK 50 NOTE!',
								})
		 					return
		 				}else{
		 					$("#p_note_50").text(Number(note_data.note_50))
		 				}
		 				if (Number(note_data.note_20) < Number($("input[name=p_out_20]").val())){
		 					$("#p_note_20").text(Number(note_data.note_20) - Number($("input[name=p_out_20]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK 20 NOTE!',
								})
		 					return
		 				}else{
		 					$("#p_note_20").text(Number(note_data.note_20))
		 				}
		 				if (Number(note_data.note_10) < Number($("input[name=p_out_10]").val())){
		 					$("#p_note_10").text(Number(note_data.note_10) - Number($("input[name=p_out_10]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK 10 NOTE!',
								})
		 					return
		 				}else{
		 					$("#p_note_10").text(Number(note_data.note_10))
		 				}
		 				if (Number(note_data.coin_5) < Number($("input[name=p_out_5]").val())){
		 					$("#p_coin_5").text(Number(note_data.coin_5) - Number($("input[name=p_out_5]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK 5 COIN!',
								})
		 					return
		 				}else{
		 					$("#p_coin_5").text(Number(note_data.coin_5))
		 				}
		 				if (Number(note_data.coin) < Number($("input[name=p_out_coin]").val())){
		 					$("#p_coin").text(Number(note_data.coin) - Number($("input[name=p_out_coin]").val()))
		 					Swal.fire({
								  icon: 'error',
								  title: 'Oops...',
								  text: 'PLEASE CHECK coin!',
								})
		 					return
		 				}else{
		 					$("#p_coin").text(Number(note_data.coin))
		 				}

		 				if (remarks == "") {
					 		$("#p_remarks_span").text("Please fill remarks")
					 		return
					 	}
					 	else if (Number(-paid_ammount) != Number(p_total)){
					 		Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'PAID AMOUNT NOT MATCHED WITH TOTAL AMOUNT!',
							})
							return
					 	}
					 	else {
					 		$.ajax({
					 			type: 'POST',
					 			url: '/paid-report/',
					 			dataType: 'json',
					 			data: form_data,
					 			success: function(report_data){
					 				id=report_data.id
					 				date = report_data.date
					 				report_data = report_data.report_data
					 				if (report_data){
					 					$("#report_table_list").append(
					 						`
					 							<tr>
					 								<td>${id}</td>
					 								<td>${date}</td>
					 								<td>${report_data.particulars || ''}</td>
					 								<td>${report_data.received_amount || ''}</td>
					 								<td>${report_data.paid_amount || ''}</td>
					 								<td>${report_data.remarks || ''}</td>
					 								<td>${report_data.receive_note_2000 || ''}</td>
					 								<td>${report_data.receive_note_500 || ''}</td>
					 								<td>${report_data.receive_note_200 || ''}</td>
					 								<td>${report_data.receive_note_100 || ''}</td>
					 								<td>${report_data.receive_note_50 || ''}</td>
					 								<td>${report_data.receive_note_20 || ''}</td>
					 								<td>${report_data.receive_note_10 || ''}</td>
					 								<td>${report_data.receive_coin_5 || ''}</td>
					 								<td>${report_data.receive_coin || ''}</td>
					 								<td>${report_data.paid_note_2000 || ''}</td>
					 								<td>${report_data.paid_note_500 || ''}</td>
					 								<td>${report_data.paid_note_200 || ''}</td>
					 								<td>${report_data.paid_note_100 || ''}</td>
					 								<td>${report_data.paid_note_50 || ''}</td>
					 								<td>${report_data.paid_note_20 || ''}</td>
					 								<td>${report_data.paid_note_10 || ''}</td>
					 								<td>${report_data.paid_coin_5 || ''}</td>
					 								<td>${report_data.paid_coin || ''}</td>
					 							</tr>
					 						`)
					 					location.reload(true); 
					 				}
					 			},
					 			error: function(error){
					 				Swal.fire({
									    icon: 'error',
									    title: 'Oops...',
									    text: error.error,
									})
					 			}
	  						});
						}
					}
	  			});
			}
		});
	}
});