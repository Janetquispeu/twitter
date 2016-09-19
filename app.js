window.addEventListener("load", function() {
	var btn=document.getElementById("btn");	
	btn.addEventListener("click",function(e){
		e.preventDefault();
		var text=document.getElementById("text").value;
		newtexto(text);
		document.getElementById("text").value="";
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
});

