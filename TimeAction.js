function ShopStatus(msg,w="0"){
	var msg = msg;
	day = new Date();
	hr = day.getHours();
	var hrs ="";
	var ampm="";
	if(hr>12 || hr ==0){
		hrs=24;
	}else{
		hrs=12;
	}
	var act ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(0, 100, 255);>\">Today Open</span><span style=\"color:rgb(0, 206, 0);\"><b> !!</b></span>";
	var unact ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">Now Closed</span><span style=\"color:red;\"><b> !!</b></span>";
	msg ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">"+msg+"</span><span style=\"color:red;\"><b> !!</b></span>";
	if(w==1){
		document.write(msg);
	}else{
		if(hrs==24){
			hr-=12;
			ampm = "PM";
		if(ampm=="PM" && hr<7){
			 document.write(act);
		}else if(ampm=="PM" && hr>6{
			document.write(unact);
		}
	}else if(hrs==12){
			ampm="AM";
			hr=hr;
		if(ampm=="AM" && hr>8){
			document.write(act);
		}else if(ampm=="AM" && hr< 9{{
			document.write(unact);
		}
	}
    }
}
