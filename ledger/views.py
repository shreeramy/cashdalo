from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse, HttpResponse

from datetime import datetime
import json
import xlsxwriter
from .models import UserAccount, CashLedgerReport, NoteAvailable


def UserLoginView(request):
	if request.method == 'POST':
		email = request.POST.get('email')
		password = request.POST.get('password')
		user = authenticate(email=email, password=password)
		if user is not None:
			user = login(request, user)
			return redirect('/report/')
		else:
			messages.info(request, "you are not superuser")
			return redirect('/')
	elif request.user.is_authenticated:
		return redirect('/report/')
	else:
		return render(request, 'login.html')


def UserLogoutView(request):
	logout(request)
	return redirect('/')


def  LedgerReportReceivePayment(request):
	if request.user.is_authenticated:
		if request.method == "POST" and request.is_ajax():
			CashLedgerReport.objects.create(date=datetime.now(),
				particulars=request.POST.get('receive_from'),
				received_amount=request.POST.get('receive_ammount'),
				paid_amount=request.POST.get('paid_ammount'),
				remarks=request.POST.get('remarks'),
				receive_note_2000=request.POST.get('in_2000') if request.POST.get('in_2000') else None,
				receive_note_500=request.POST.get('in_500') if request.POST.get('in_500') else None,
				receive_note_200=request.POST.get('in_200') if request.POST.get('in_200') else None,
				receive_note_100=request.POST.get('in_100') if request.POST.get('in_100') else None,
				receive_note_50=request.POST.get('in_50') if request.POST.get('in_50') else None,
				receive_note_20=request.POST.get('in_20') if request.POST.get('in_20') else None,
				receive_note_10=request.POST.get('in_10') if request.POST.get('in_10') else None,
				receive_coin_5=request.POST.get('in_5') if request.POST.get('in_5') else None,
				receive_coin=request.POST.get('in_coin') if request.POST.get('in_coin') else None,
				paid_note_2000=request.POST.get('out_2000') if request.POST.get('out_2000') else None,
				paid_note_500=request.POST.get('out_500') if request.POST.get('out_500') else None,
				paid_note_200=request.POST.get('out_200') if request.POST.get('out_200') else None,
				paid_note_100=request.POST.get('out_100') if request.POST.get('out_100') else None,
				paid_note_50=request.POST.get('out_50') if request.POST.get('out_50') else None,
				paid_note_20=request.POST.get('out_20') if request.POST.get('out_20') else None,
				paid_note_10=request.POST.get('out_10') if request.POST.get('out_10') else None,
				paid_coin_5=request.POST.get('out_5') if request.POST.get('out_5') else None,
				paid_coin=request.POST.get('out_coin') if request.POST.get('out_coin') else None,
				)
			
			note_obj = NoteAvailable.objects.all().first()
			if not note_obj:
				NoteAvailable.objects.create(
					note_2000=request.POST.get('in_2000') if request.POST.get('in_2000') else 0,
					note_500=request.POST.get('in_500') if request.POST.get('in_500') else 0,
				    note_200=request.POST.get('in_200') if request.POST.get('in_200') else 0,
				    note_100=request.POST.get('in_100') if request.POST.get('in_100') else 0,
				    note_50=request.POST.get('in_50') if request.POST.get('in_50') else 0,
				    note_20=request.POST.get('in_20') if request.POST.get('in_20') else 0,
				    note_10=request.POST.get('in_10') if request.POST.get('in_10') else 0,
				    coin_5=request.POST.get('in_5') if request.POST.get('in_5') else 0,
				    coin=request.POST.get('in_coin') if request.POST.get('in_coin') else 0,
					)
			else:
				if request.POST.get('in_2000'):
					note_obj.note_2000 += int(request.POST.get('in_2000'))
				if request.POST.get('in_500'):
					note_obj.note_500 += int(request.POST.get('in_500'))
				if request.POST.get('in_200'):
					note_obj.note_200 += int(request.POST.get('in_200'))
				if request.POST.get('in_100'):
					note_obj.note_100 += int(request.POST.get('in_100'))
				if request.POST.get('in_50'):
					note_obj.note_50 += int(request.POST.get('in_50'))
				if request.POST.get('in_20'):
					note_obj.note_20 += int(request.POST.get('in_20'))
				if request.POST.get('in_10'):
					note_obj.note_10 += int(request.POST.get('in_10'))
				if request.POST.get('in_5'):
					note_obj.coin_5 += int(request.POST.get('in_5'))
				if request.POST.get('in_coin'):
					note_obj.coin += int(request.POST.get('in_coin'))


				if request.POST.get('out_2000'):
					note_obj.note_2000 -= int(request.POST.get('out_2000'))
				if request.POST.get('out_500'):
					note_obj.note_500 -= int(request.POST.get('out_500'))
				if request.POST.get('out_200'):
					note_obj.note_200 -= int(request.POST.get('out_200'))
				if request.POST.get('out_100'):
					note_obj.note_100 -= int(request.POST.get('out_100'))
				if request.POST.get('out_50'):
					note_obj.note_50 -= int(request.POST.get('out_50'))
				if request.POST.get('out_20'):
					note_obj.note_20 -= int(request.POST.get('out_20'))
				if request.POST.get('out_10'):
					note_obj.note_10 -= int(request.POST.get('out_10'))
				if request.POST.get('out_5'):
					note_obj.coin_5 -= int(request.POST.get('out_5'))
				if request.POST.get('out_coin'):
					note_obj.coin -= int(request.POST.get('out_coin'))

				note_obj.save()

			report_data = CashLedgerReport.objects.all().order_by('-date')
			return JsonResponse({"report_data": report_data.values()[0],
								 "date":  report_data[0].date.strftime('%B %d,%Y,%I:%M %P'),
								 "id": len(report_data)})
		else:
			report_data = CashLedgerReport.objects.all()
			note_data = NoteAvailable.objects.all().values().first()
			return render(request, 'report.html', {"report_data":report_data, "note_data": note_data})
	else:
		return redirect('/')


def GetAvailableNote(request):
	if request.user.is_authenticated:
		if request.is_ajax():
			note_data = NoteAvailable.objects.all().values().first()
			return JsonResponse(note_data)
	else:
		return redirect('/')


def  LedgerReportPaidPayment(request):
	if request.user.is_authenticated:
		if request.method == "POST" and request.is_ajax():
			CashLedgerReport.objects.create(date=datetime.now(),
				particulars=request.POST.get('paid_to'),
				received_amount=request.POST.get('receive_ammount'),
				paid_amount=request.POST.get('paid_ammount'),
				remarks=request.POST.get('p_remarks'),
				paid_note_2000=request.POST.get('p_out_2000') if request.POST.get('p_out_2000') else None,
				paid_note_500=request.POST.get('p_out_500') if request.POST.get('p_out_500') else None,
				paid_note_200=request.POST.get('p_out_200') if request.POST.get('p_out_200') else None,
				paid_note_100=request.POST.get('p_out_100') if request.POST.get('p_out_100') else None,
				paid_note_50=request.POST.get('p_out_50') if request.POST.get('p_out_50') else None,
				paid_note_20=request.POST.get('p_out_20') if request.POST.get('p_out_20') else None,
				paid_note_10=request.POST.get('p_out_10') if request.POST.get('p_out_10') else None,
				paid_coin_5=request.POST.get('p_out_5') if request.POST.get('p_out_5') else None,
				paid_coin=request.POST.get('p_out_coin') if request.POST.get('p_out_coin') else None,
				receive_note_2000=request.POST.get('p_in_2000') if request.POST.get('p_in_2000') else None,
				receive_note_500=request.POST.get('p_in_500') if request.POST.get('p_in_500') else None,
				receive_note_200=request.POST.get('p_in_200') if request.POST.get('p_in_200') else None,
				receive_note_100=request.POST.get('p_in_100') if request.POST.get('p_in_100') else None,
				receive_note_50=request.POST.get('p_in_50') if request.POST.get('p_in_50') else None,
				receive_note_20=request.POST.get('p_in_20') if request.POST.get('p_in_20') else None,
				receive_note_10=request.POST.get('p_in_10') if request.POST.get('p_in_10') else None,
				receive_coin_5=request.POST.get('p_in_5') if request.POST.get('p_in_5') else None,
				receive_coin=request.POST.get('p_in_coin') if request.POST.get('p_in_coin') else None,
				)
			
			note_obj = NoteAvailable.objects.all().first()
			if not note_obj:
				return JsonResponse({"eror": "Insufficient Note"}, status=500)
			else:
				if request.POST.get('p_out_2000'):
					note_obj.note_2000 -= int(request.POST.get('p_out_2000'))
				if request.POST.get('p_out_500'):
					note_obj.note_500 -= int(request.POST.get('p_out_500'))
				if request.POST.get('p_out_200'):
					note_obj.note_200 -= int(request.POST.get('p_out_200'))
				if request.POST.get('p_out_100'):
					note_obj.note_100 -= int(request.POST.get('p_out_100'))
				if request.POST.get('p_out_50'):
					note_obj.note_50 -= int(request.POST.get('p_out_50'))
				if request.POST.get('p_out_20'):
					note_obj.note_20 -= int(request.POST.get('p_out_20'))
				if request.POST.get('p_out_10'):
					note_obj.note_10 -= int(request.POST.get('p_out_10'))
				if request.POST.get('p_out_5'):
					note_obj.coin_5 -= int(request.POST.get('p_out_5'))
				if request.POST.get('p_out_coin'):
					note_obj.coin -= int(request.POST.get('p_out_coin'))

				if request.POST.get('p_in_2000'):
					note_obj.note_2000 += int(request.POST.get('p_in_2000'))
				if request.POST.get('p_in_500'):
					note_obj.note_500 += int(request.POST.get('p_in_500'))
				if request.POST.get('p_in_200'):
					note_obj.note_200 += int(request.POST.get('p_in_200'))
				if request.POST.get('p_in_100'):
					note_obj.note_100 += int(request.POST.get('p_in_100'))
				if request.POST.get('p_in_50'):
					note_obj.note_50 += int(request.POST.get('p_in_50'))
				if request.POST.get('p_in_20'):
					note_obj.note_20 += int(request.POST.get('p_in_20'))
				if request.POST.get('p_in_10'):
					note_obj.note_10 += int(request.POST.get('p_in_10'))
				if request.POST.get('p_in_5'):
					note_obj.coin_5 += int(request.POST.get('p_in_5'))
				if request.POST.get('p_in_coin'):
					note_obj.coin += int(request.POST.get('p_in_coin'))

				note_obj.save()

			report_data = CashLedgerReport.objects.all().order_by('-date')
			return JsonResponse({"report_data": report_data.values()[0],
								 "date": report_data[0].date.strftime('%B %d,%Y,%I:%M %P'),
								 "id": len(report_data)})
		else:
			report_data = CashLedgerReport.objects.all()
			note_data = NoteAvailable.objects.all().values().first()
			return render(request, 'report.html', {"report_data":report_data, 'payment_entry': True,
											       "note_data": note_data})
	else:
		return redirect('/')


def SearchLedgerReport(request):
	if request.user.is_authenticated:
		report_data = CashLedgerReport.objects.all()
		if request.method == "POST" or request.is_ajax():
			if request.POST.get("search_by") == "empty":
				return render(request, 'report.html', {'search_trans': True, 
													   "no_record": "Please select a valid record"})
			if request.POST.get("search_by") == "date":
				try:
					datetime.strptime(request.POST.get("search_key"), '%Y-%m-%d')
					ledger_report = CashLedgerReport.objects.filter(date__date=request.POST.get("search_key")).values()
				except ValueError:
					return JsonResponse({'search_trans': True, 
										 "no_record": "Incorrect date format, should be YYYY-MM-DD"})
			if request.POST.get("search_by") == "particulars":
				ledger_report = CashLedgerReport.objects.filter(particulars=request.POST.get("search_key")).values()
			if request.POST.get("search_by") == "remarks":
				ledger_report = CashLedgerReport.objects.filter(remarks=request.POST.get("search_key")).values()
			if ledger_report.count() == 0:
				no_record = "No record found"
			else:
				no_record = False
			ledger_report = list(ledger_report)
			for report in ledger_report:
				report['date'] = report['date'].strftime('%B %d,%Y,%I:%M %P')
			return JsonResponse({'search_trans': True, 'ledger_report': ledger_report, "no_record": no_record})
		return render(request, 'report.html', {"report_data":report_data, 'search_trans': True})
	else:
		return redirect('/')


def ExportToExcelReport(request):
	if request.user.is_authenticated:
		report_data = CashLedgerReport.objects.all().order_by('-date').values_list('id', 'date', 'particulars',
				'received_amount', 'paid_amount', 'remarks', 'receive_note_2000', 'receive_note_500', 
				'receive_note_200', 'receive_note_100','receive_note_50', 'receive_note_20', 'receive_note_10',
				'receive_coin_5', 'receive_coin', 'paid_note_2000', 'paid_note_500', 'paid_note_200', 
				'paid_note_100', 'paid_note_50', 'paid_note_20', 'paid_note_10', 'paid_coin_5', 'paid_coin')
		note_data = NoteAvailable.objects.all().values_list('note_2000', 'note_500', 'note_200', 'note_100',
			'note_50', 'note_20', 'note_10', 'coin_5', 'coin').first()
		report_lists = []
		for report in report_data:
			reports = list(report)
			reports.pop(1)
			reports.insert(1, report[1].strftime('%B %d,%Y,%I:%M %P'))
			report_lists.append(reports)
		workbook = xlsxwriter.Workbook('worksheet_file.xlsx')
		green_color = workbook.add_format(properties={'font_color': 'green'})
		red_color = workbook.add_format(properties={'font_color': 'red'})
		bg_note = workbook.add_format(properties={'bold': True, 'font_color': '#00C7CE'})
		report_head = workbook.add_format(properties={'bold': True,}) 
		worksheet = workbook.add_worksheet()
		col = 1
		note_header = ['Note 2000', 'Note 500', 'Note 200', 'Note 100', 'Note 50', 'Note 20', 
					   'Note 10', 'Note 5', 'Note coins', 'Total Amount']
		for header in note_header:
			worksheet.write(0, col, header, bg_note)
			col += 1
		worksheet.write(1, 0, "NOTE AVAILABLE", bg_note)
		worksheet.write(2, 0, "AMOUNT AVAILABLE", bg_note)
		col = 1
		notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1]
		total_amount = 0
		count = 0
		for note in note_data:
			total_amount += notes[count] * note
			worksheet.write(1, col, note, bg_note)
			worksheet.write(2, col, notes[count] * note, bg_note)
			count += 1
			col += 1
		worksheet.write(2, col, total_amount, bg_note)
		col = 0
		report_header = ['id', 'date', 'particulars', 'received_amount', 'paid_amount', 'remarks', 
		 'receive_note_2000', 'receive_note_500', 'receive_note_200', 'receive_note_100',
		 'receive_note_50', 'receive_note_20', 'receive_note_10', 'receive_coin_5', 'receive_coin',
		 'paid_note_2000', 'paid_note_500', 'paid_note_200', 'paid_note_100', 'paid_note_50', 'paid_note_20',
		 'paid_note_10', 'paid_coin_5', 'paid_coin']
		for header in report_header:
			worksheet.write(3, col, header, report_head)
			col += 1
		for row_num, row_data in enumerate(report_lists, 4):
			for col_num, col_data in enumerate(row_data):
				if col_num == 3 or col_num >= 6 and col_num <= 14:
					worksheet.write(row_num, col_num, col_data, green_color)
				elif col_num == 4 or col_num >= 15 and col_num <= 23:
					worksheet.write(row_num, col_num, col_data, red_color)
				else:
					worksheet.write(row_num, col_num, col_data)

		workbook.close()
		with open("worksheet_file.xlsx", "rb") as excel:
			data = excel.read()
		response = HttpResponse(data, content_type='application/ms-excel')  
		response['Content-Disposition'] = 'attachment; filename="report_file.xlsx"'
		return response
	else:
		return redirect('/')
