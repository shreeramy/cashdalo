from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.http import JsonResponse

from datetime import datetime
import json
from .models import UserAccount, CashLedgerReport, NoteAvailable


def UserLoginView(request):
	if request.method == 'POST':
		email = request.POST.get('email')
		password = request.POST.get('password')
		print(email, password)
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
								 "date": str(report_data[0].date.date()),
								 "id": len(report_data)})
		else:
			report_data = CashLedgerReport.objects.all()
			return render(request, 'report.html', {"report_data":report_data})
	else:
		return redirect('/')


def GetAvailableNote(request):
	if request.user.is_authenticated:
		if request.is_ajax():
			note_data = NoteAvailable.objects.all().values().first()
			return JsonResponse(note_data)
	else:
		return redirect('/')


def ReceiptEntryView(request):
	if request.user.is_authenticated:
		report_data = CashLedgerReport.objects.all()
		return render(request, 'report.html', {"report_data":report_data, 'receipt_entry': True})
	else:
		return redirect('/')


def PaymentEntryView(request):
	if request.user.is_authenticated:
		report_data = CashLedgerReport.objects.all()
		return render(request, 'report.html', {"report_data":report_data, 'payment_entry': True})
	else:
		return redirect('/')


def  LedgerReportPaidPayment(request):
	if request.user.is_authenticated:
		if request.method == "POST" and request.is_ajax():
			print("LedgerReportPaidPayment",request.POST)
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
								 "date": str(report_data[0].date.date()),
								 "id": len(report_data)})
		else:
			report_data = CashLedgerReport.objects.all()
			return render(request, 'report.html', {"report_data":report_data})
	else:
		return redirect('/')