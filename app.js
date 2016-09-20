window.addEventListener("load", function() {
	var btn=document.getElementById("btn");	
	btn.disabled=true;
	btn.addEventListener("click",function(e){
		e.preventDefault();
		var text=document.getElementById("text").value;
		newtexto(text);
		document.getElementById("text").value="";
		btn.disabled=true;
		
	});
	function newtexto(text){
		var elemento=document.createElement("div");
		var conten=document.getElementById("conten");
		elemento.innerText=text;
		if(!conten.childNodes[0]){
			conten.appendChild(elemento);
		}else{
			conten.insertBefore(elemento,conten.childNodes[0]);
		}
	}
	text.addEventListener("keydown",function(){
		contador(text);
	});
	function contador(text){
		btn.disabled=false;
		var limite =10;
		var longitud=document.getElementById("text").value.length;
		document.getElementById("contador").innerHTML=limite-longitud;
	}


});
