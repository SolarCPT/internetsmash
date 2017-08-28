 function displayTime()
 //<![CDATA[
    {
     var currentDate = new Date();
     var currentHour = currentDate.getHours();
     var currentMinute = currentDate.getMinutes();
     var currentSecond = currentDate.getSeconds();
     //currentHour = currentHour % 12;
     //currentHour= currentHour ? currentHour : 12; // the hour '0' should be '12'
     //var ampm=currentHour <= 12 ? 'PM' : 'AM';
     currentMinute = currentMinute < 10 ? '0'+currentMinute : currentMinute;
     currentSecond = currentSecond <10 ? '0'+currentSecond : currentSecond;
     document.getElementById('timeDiv').innerHTML =currentHour + ':' + currentMinute + ' : ' + currentSecond;
     t=setTimeout(function(){displayTime()},700);
    }
function ShopStatus(msg,work=0){
     var msg="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">  "+msg+"</span><span style=\"color:red;\"><b> !!</b></span>";
     var work=work;
     var act ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(0, 100, 255);>\">Today Open</span><span style=\"color:rgb(0, 206, 0);\"><b> !!</b></span>";
     var unact ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">Now Closed</span><span style=\"color:red;\"><b> !!</b></span>";
     var date_obj = new Date();
     var hour   = date_obj.getHours();
     var minute = date_obj.getMinutes();
     var amPM   = (hour > 11) ? "pm" : "am";
     if(work==1){
        document.write(msg);
     }else{
     if(hour > 12) {
     hour -= 12;
     } else if(hour == 0) {
     hour = "12";
     }
     if(minute < 10) {
     minute = "0" + minute;
     }
     if(amPM =="am" && hour > 8){
     document.write(act);
     }else if(amPM == "am" && hour < 9){
     document.write(unact);
     }else if(amPM == "pm" && hour > 11){
      document.write(act);
     }else if(amPM == "pm" && hour < 7){
     document.write(act);
     }else if(amPM == "pm" && hour > 6){
     document.write(unact);
     }
 }
     }
   //]]>
