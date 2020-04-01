window.onload = function() {
var inp = document.getElementsByTagName('input');
for (var i = inp.length-1; i>=0; i--) {
if ('radio'===inp[i].type) inp[i].checked = false;
}
}



function questiontwo() {
	var a = document.getElementById("LIRADS1");
	var b = document.getElementById("LIRADS2");
	var c = document.getElementById("malignant");
	var f = document.querySelector('input[name=lesioncrit]:checked').value;
	var g = document.getElementById("furtherchar");
	var h = document.getElementById("TIVV");
	var i = document.getElementById("calculator");

	
	if (f==1) {
		a.style.display = "block";
		b.style.display = "none";
		c.style.display = "none";
		g.style.display = "none";
		h.style.display = "none";
		i.style.display = "none";
	}
	
	else if (f==2) {
		a.style.display = "none";
		b.style.display = "block";
		c.style.display = "none";
		g.style.display = "none";
		h.style.display = "none";
		i.style.display = "none";		
	}
	
	else if (f==3) {
		a.style.display = "none";
		b.style.display = "none";
		c.style.display = "block";
		g.style.display = "none";
		h.style.display = "none";
		i.style.display = "none";
	}
	
	else if (f==4) {
		a.style.display = "none";
		b.style.display = "none";
		c.style.display = "none";
		g.style.display = "none";
		h.style.display = "block";
		i.style.display = "none";
	}
	
	else {
		a.style.display = "none";
		b.style.display = "none";
		c.style.display = "none";
		g.style.display = "block";
		h.style.display = "none";
		i.style.display = "block";		
	}
	
}






function LIRADSALG() {
	var a = document.querySelector('input[name=enhance]:checked').value;
	var b = document.querySelector('input[name=size]:checked').value;
	var c = document.querySelector('input[name=washout]:checked').value;
	var d = document.querySelector('input[name=capsule]:checked').value;
	var e = document.querySelector('input[name=incsize]:checked').value;
	var maj = c + d + e;
	var L;
	var m = document.getElementById("LIRADS");

	
	if (a==1 && b==3 && maj>=2) {
		L = "LR-5";
	} else if (a==1 && b==3 && maj==1) {
		L = "LR-5";}
	else if (a==1 && b==3 && maj==0) {
		L = "LR-4";}

	else if (a==1 && b==2 && c==1 && d==1 && e==1) {
		L = "LR-5";}
	else if (a==1 && b==2 && c==1 && d==1) {
		L = "LR-5";}
	else if (a==1 && b==2 && c==1 && e==1) {
		L = "LR-5";}
	else if (a==1 && b==2 && d==1 && e==1) {
		L = "LR-5";}
			
	else if (a==1 && b==2 && e==1) {
		L = "LR-5";}
	else if (a==1 && b==2 && c==1) {
		L = "LR-5";}
	else if (a==1 && b==2 && d==1) {
		L = "LR-4";}
	else if (a==1 && b==2 && maj==0) {
		L = "LR-3";}

	else if (a==1 && b==1 && maj>=2) {
		L = "LR-4";
	} else if (a==1 && b==1 && maj==1) {
		L = "LR-4";}
	else if (a==1 && b==1 && maj==0) {
		L = "LR-3";}

	else if (a==0 && b==3 && maj>=2) {
		L = "LR-4";
	} else if (a==0 && b==3 && maj==1) {
		L = "LR-4";}
	else if (a==0 && b==3 && maj==0) {
		L = "LR-3";}



	else if (a==0 && b==2 && c==1 && d==1 && e==1) {
		L = "LR-4";}
	else if (a==0 && b==2 && c==1 && d==1) {
		L = "LR-4";}
	else if (a==0 && b==2 && c==1 && e==1) {
		L = "LR-4";}
	else if (a==0 && b==2 && d==1 && e==1) {
		L = "LR-4";}
	else if (a==0 && b==2 && e==1) {
		L = "LR-3";}
	else if (a==0 && b==2 && c==1) {
		L = "LR-3";}
	else if (a==0 && b==2 && d==1) {
		L = "LR-3";}
	else if (a==0 && b==2 && maj==0) {
		L = "LR-3";}

    else if (a==0 && b==1 && c==1 && d==1 && e==1) {
        L = "LR-4";}
    else if (a==0 && b==1 && c==1 && d==1) {
        L = "LR-4";}
    else if (a==0 && b==1 && c==1 && e==1) {
        L = "LR-4";}
    else if (a==0 && b==1 && d==1 && e==1) {
        L = "LR-4";}
    else if (a==0 && b==1 && e==1) {
        L = "LR-3";}
    else if (a==0 && b==1 && c==1) {
        L = "LR-3";}
    else if (a==0 && b==1 && d==1) {
        L = "LR-3";}
    else if (a==0 && b==1 && maj==0) {
        L = "LR-3";}      
    


	document.getElementById("LIRADS").innerHTML = L;
	


	if (L == "LR-3") {
		m.style.backgroundColor = "#FFFF01";
	}
	else if (L == "LR-4") {
		m.style.backgroundColor = "#FD9303";
	}
	else if (L == "LR-5") {
		m.style.backgroundColor = "#FC0001";
	}
	else {
		m.style.backgroundColor = "#FC0001";	
	}

}

function GoHome() {
	var x = document.getElementById("crit");
	var y = document.getElementById("furtherchar");
	x.style.display = "none";
	y.style.display = "none";
	document.getElementById("appropriate").innerHTML = "LIRADS is not appropriate for this lesion.";
	}

function Proceed() {
	var x = document.getElementById("crit");
	document.getElementById("appropriate").innerHTML = "LIRADS is appropriate for this lesion.";
	x.style.display = "block";
}

function LRTRfunc() {
	var a = document.querySelector('input[name=mass]:checked').value;
	var b = document.querySelector('input[name=trenh]:checked').value;
	var L;
	if (a==1 && b==2) {
		L = "LR-TR Viable";
		}
	else if (b==1) {
		L = "LR-TR Equivocal";
		}
	else {
		L = "LR-TR Nonviable";
		}
	
	document.getElementById("LRTR").innerHTML = L;	
	}	





function ANC() {
	var x = document.getElementById("ANC");
	x.style.display = "block";
}

function NANC() {
	var x = document.getElementById("ANC");
	x.style.display = "none";
}
