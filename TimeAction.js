function ShopStatus(msg,w="0"){
	var msg = msg;
	day = new Date();
	hr = day.getHours();
	var hrs =(hr>12)? 24 : 12;
	var ampm="";
	var act ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(0, 100, 255);>\">Today Open</span><span style=\"color:rgb(0, 206, 0);\"><b> !!</b></span>";
	var unact ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">Now Closed</span><span style=\"color:red;\"><b> !!</b></span>";
	msg ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">"+msg+"</span><span style=\"color:red;\"><b> !!</b></span>";
	if(w==1){
		document.write(msg);
	}else{
		if(hrs==24){
			ampm = "PM";
			hr-=12;
		}else if(ampm=="PM" && hr<7){
			 document.write(act);
		}else{
			document.write(unact);
		}
		if(hrs==12){
			ampm="AM";
			hr=hr;
		}else if(ampm=="AM" && hr>8){
			document.write(act);
		}else{
			document.write(unact);
		}
	}
}
