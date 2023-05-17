function setCookie(cname, cvalue, nbrSec) {
 var d = new Date();
 d.setTime(d.getTime() + (nbrSec*1000));
 var expires = "expires="+d.toUTCString();
 document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
 var name = cname + "=";
 var ca = document.cookie.split(';');
 for(var i=0; i<ca.length; i++) {
 var c = ca[i];
 while (c.charAt(0)==' ') c = c.substring(1);
 if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
 }
 return "";
}

function checkCookie() {
    var stotal = getCookie('stotal');
//alert("stotal="+stotal+"\ntotalAm="+totalAm+"\ndate1="+date1+"\nimage="+image);

    //var arrTrans = getCookie('cnum'); //.split('|');

    if (stotal != null && stotal != "") {
        document.getElementById("stotal").innerHTML = stotal;
        //document.getElementById("img1").src = image;
    }
    else {
        //nothing
    }
}
