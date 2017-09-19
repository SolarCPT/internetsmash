
function ShopStatus(YourMessage,work=0){
var work=work;
var act ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(0, 100, 255);>\">Today Open</span><span style=\"color:rgb(0, 206, 0);\"><b> !!</b></span>";
var unact ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">Now Closed</span><span style=\"color:red;\"><b> !!</b></span>";
var date_obj = new Date();
	hr   = date_obj.getHours();
var ampm=(hr > 11) ? 'PM' : 'AM';
if(work === 1){
        var Newmsg="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">"+YourMessage+"</span><span style=\"color:red;\"></span>";
        document.write(Newmsg);
}else{
	if(hr==0){
	hr=12;
	document.write(unact);
}else if(ampm === "PM" && hr < 7 ){
	document.write(hr+" NOW ["+ampm+"] OPEN");
}else if(ampm === "AM" && hr > 8){
	document.write(hr+" NOW ["+ampm+"] OPEN");
}else{
	document.write(hr+" NOW ["+ampm+"] CLOSED");
}
}
//]]>
