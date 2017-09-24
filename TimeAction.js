function ShopStatus(msg,w= '0'){
        var date_format = '12'; /* FORMAT CAN BE 12 hour (12) OR 24 hour (24)*/
        var d       = new Date();
        var hour    = d.getHours();  /* Returns the hour (from 0-23) */
        var minutes     = d.getMinutes();  /* Returns the minutes (from 0-59) */
        var result  = hour;
        var ext     = '';
        var sta     = '';
        var act ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(0, 100, 255);>\">Today Open</span><span style=\"color:green;font-size:25px;margin-top:20px;\">&nbsp;&#2705;</span>";
        var unact ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">Now Closed</span><span style=\"color:#ff0000;font-size:40px;margin-top:20px;\">&nbsp;&#9940;</span>";
        var msg ="<b>STATUS</b><span style=\"color:red;\"><b> :: </b></span><span style=\"color:rgb(255, 0, 29);\">"+msg+"</span><span style=\"color:red;\">&nbsp;&nbsp;&#9940;</span>";
         if(w==1){
            document.write(msg);
        }else{
            if(date_format == '12'){
                if(hour > 12){
                    ext = 'PM';
                    hour = (hour - 12);
                    if(hour < 10){
                        result = "0" + hour;
                    }else if(hour == 12){
                        hour = "00";
                        ext = 'AM';
                        sta = act;
                    }
                     if(hour<7){
                      sta = act;
                        }else{
                            sta = unact;
                        }
        }else if(hour < 12){
            result = ((hour < 10) ? "0" + hour : hour);
            ext = 'AM'; 
            if(hour<9){
             sta = unact;
              }else{
                sta = act;
                 }
      }else if(hour == 12){
        ext = 'PM';
        sta = act;
       }
    }   
    if(minutes < 10){
       minutes = "0" + minutes; 
    }
      result = sta; document.write(' <b>' +result+ '</b>');
  }
}
