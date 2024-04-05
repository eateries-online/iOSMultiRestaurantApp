import{H as _,m as i}from"./index.30bcee2d.js";const r=_("BookingStore",{state:()=>({has_data:!1,loading:!0,guest_list:[],date_list:[],time_slot:[],all_time_slot:[],reservation_date:"",tc:"",allowed_choose_table:!1,room_list:[],not_available_time:[],guest:1,reservation_time:"",reservation_uuid:"",steps:1,reservation_info:[],table_list:[],room_uuid:"",table_uuid:"",first_name:"",last_name:"",email_address:"",mobile_number:"",mobile_prefix:"",special_request:"",booking_data:[],cancel_reason:[],merchant_uuid:"",errors:"",summary:[],summary_loading:!1}),getters:{getSummary(t){return t.summary},hasError(t){return!!i.empty(t.errors)},getErrors(t){return t.errors},hasData(t){return t.has_data},isLoading(t){return t.loading},hasTimeSlot(t){return Object.keys(t.time_slot).length>0},getTimeList(t){return t.time_slot},bookingValid(){let t=!0;return this.guest<=0&&(t=!1),i.empty(this.reservation_date)&&(t=!1),i.empty(this.reservation_time)&&(t=!1),t},getSteps(t){return t.steps},getBooking(t){return t.booking_data},hasBookingData(t){return Object.keys(t.booking_data).length>0},getCancelReasonData(t){return t.cancel_reason},CanCancelReservation(t){return t.booking_data.cancel_reservation_stats.includes(t.booking_data.data.status)!==!0},bookingStatusColor(t){return t.booking_data.cancel_reservation_stats2.includes(t.booking_data.data.status)===!0?"text-red":t.booking_data.pending_reservation_stats.includes(t.booking_data.data.status)===!0?"text-blue":t.booking_data.completed_reservation_stats.includes(t.booking_data.data.status)===!0?"text-orange":"text-green"},getBookingStatusSteps(t){return t.booking_data.cancel_reservation_stats2.includes(t.booking_data.data.status)===!0?0:t.booking_data.confirm_reservation_stats.includes(t.booking_data.data.status)===!0?2:t.booking_data.completed_reservation_stats.includes(t.booking_data.data.status)===!0?3:t.booking_data.cancel_reservation_stats.includes(t.booking_data.data.status)===!0?4:1}},actions:{Getbookingattributes(t,a){this.loading=!0,i.fetchDataPostTable("Getbookingattributes","merchant_uuid="+t+"&id="+a).then(e=>{this.has_data=!0,this.guest_list=e.details.guest_list,this.date_list=e.details.date_list,this.time_slot=e.details.time_slot,this.all_time_slot=e.details.all_time_slot,this.reservation_date=e.details.default_date,this.tc=e.details.tc,this.allowed_choose_table=e.details.allowed_choose_table,this.room_list=e.details.room_list,this.not_available_time=e.details.not_available_time,this.guest=e.details.default_guest,i.empty(a)||(this.guest=e.details.data_booking.guest_number_raw,this.reservation_time=e.details.data_booking.reservation_time_raw,this.first_name=e.details.data_booking.first_name,this.last_name=e.details.data_booking.last_name,this.email_address=e.details.data_booking.email_address,this.special_request=e.details.data_booking.special_request,this.mobile_prefix=e.details.data_booking.phone_prefix,this.mobile_number=e.details.data_booking.contact_phone_without_prefix)}).catch(e=>{this.guest_list=[],this.date_list=[],this.time_slot=[],this.all_time_slot=[],this.reservation_date="",this.tc="",this.allowed_choose_table=!1,this.room_list=[],this.not_available_time=[]}).then(e=>{this.loading=!1})},Getbookingdetails(t){this.loading=!0,this.errors="",i.fetchDataPostTable2("Getbookingdetails","&id="+t).then(a=>{this.has_data=!0,this.guest_list=a.details.guest_list,this.date_list=a.details.date_list,this.time_slot=a.details.time_slot,this.all_time_slot=a.details.all_time_slot,this.reservation_date=a.details.default_date,this.tc=a.details.tc,this.allowed_choose_table=a.details.allowed_choose_table,this.room_list=a.details.room_list,this.not_available_time=a.details.not_available_time,this.guest=a.details.default_guest,this.merchant_uuid=a.details.merchant_uuid,i.empty(t)||(this.guest=a.details.data_booking.guest_number_raw,this.reservation_time=a.details.data_booking.reservation_time_raw,this.first_name=a.details.data_booking.first_name,this.last_name=a.details.data_booking.last_name,this.email_address=a.details.data_booking.email_address,this.special_request=a.details.data_booking.special_request,this.mobile_prefix=a.details.data_booking.phone_prefix,this.mobile_number=a.details.data_booking.contact_phone_without_prefix)}).catch(a=>{this.guest_list=[],this.date_list=[],this.time_slot=[],this.all_time_slot=[],this.reservation_date="",this.tc="",this.allowed_choose_table=!1,this.room_list=[],this.not_available_time=[],this.errors=a}).then(a=>{this.loading=!1})},getTimeslot(t,a){this.loading=!0,this.reservation_time="";let e="merchant_uuid="+t;e+="&reservation_date="+this.reservation_date,e+="&guest="+this.guest,e+="&id="+a,i.fetchDataPostTable("Gettimeslot",e).then(l=>{this.time_slot=l.details.time_slot,this.all_time_slot=l.details.all_time_slot,this.not_available_time=l.details.not_available_time}).catch(l=>{this.time_slot=[],this.all_time_slot=[],this.not_available_time=[]}).then(l=>{this.loading=!1})},isSelected(t){return this.reservation_time==t},isNotavailable(t){return Object.keys(this.not_available_time).length>0&&this.not_available_time.includes(t)===!0},SetBooking(t,a,e){this.loading=!0;let l="merchant_uuid="+t;l+="&reservation_date="+this.reservation_date,l+="&reservation_time="+this.reservation_time,l+="&guest="+this.guest,l+="&id="+a,i.fetchDataPostTable2("SetBooking",l).then(s=>{this.steps=2,this.reservation_info=s.details,this.table_list=s.details.table_list,i.empty(a)?(this.room_uuid="",this.table_uuid=""):(this.room_uuid=s.details.room_uuid,this.table_uuid=s.details.table_uuid),i.empty(s.details.user_data)||Object.keys(s.details.user_data).length>0&&(this.first_name=s.details.user_data.first_name,this.last_name=s.details.user_data.last_name,this.email_address=s.details.user_data.email_address,this.mobile_prefix=s.details.user_data.phone_prefix,this.mobile_number=s.details.user_data.contact_number_without_prefix)}).catch(s=>{i.notify("dark",s,"error",e)}).then(s=>{this.loading=!1})},resetReservation(t){this.steps=1,this.Getbookingattributes(t),this.guest=1,this.reservation_date="",this.reservation_time=""},getBookingDetails(t,a){this.loading=!0,this.errors="",i.fetchDataPostTable2("BookingDetails","id="+t).then(e=>{this.booking_data=e.details}).catch(e=>{this.booking_data=[],this.errors=e}).then(e=>{this.loading=!1,i.empty(a)||a()})},getCancelreason(t,a){this.loading=!0,i.fetchDataPostTable("getCancelreason","id="+t).then(e=>{this.cancel_reason=e.details.data}).catch(e=>{this.cancel_reason=[]}).then(e=>{this.loading=!1,i.empty(a)||a()})},getBookingSummary(){this.summary_loading=!0,i.fetchDataPostTable2("BookingSummary").then(t=>{this.summary=t.details.summary}).catch(t=>{this.summary=[]}).then(t=>{this.summary_loading=!1})}}});export{r as u};
