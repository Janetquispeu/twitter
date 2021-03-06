window.addEventListener("load", function() {
	var btn=document.getElementById("btn");	
	btn.disabled=true;

	btn.addEventListener("click",function(e){
		e.preventDefault();
		var text = document.getElementById("text").value;
		publicarTexto(text);

		document.getElementById("text").value = "";
		document.getElementById("contador").innerHTML=140;
		btn.disabled=true;		
	});
	
	text.addEventListener("keydown",function(){
		contador(text);
	});
	
	text.addEventListener('keydown', autosize); 
    
});
function publicarTexto(text){
	var elemento=document.createElement("div");
	var conten=document.getElementById("conten");
	var hora = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'});
	elemento.innerText=text + hora;

	if(!conten.childNodes[0]){
		conten.appendChild(elemento);
	}else{
		conten.insertBefore(elemento,conten.childNodes[0]);
	}
}
function contador(text){
	btn.disabled=false;
	var limite =140;
	var longitud=document.getElementById("text").value.length;
	document.getElementById("contador").innerHTML=limite-longitud;

	if (longitud>120 && longitud<130) {
		document.getElementById("contador").classList.add("caracter120");
	}else if (longitud>130 && longitud<140) {
		document.getElementById("contador").classList.add("caracter130");
	}else if(longitud > 140){
		btn.disabled=true;
	document.getElementById("contador").classList.add("caracter140");
	}    
	else if(longitud==0){
		btn.disabled=true;
	}   
}

function autosize(){
  var el = this;
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  
}