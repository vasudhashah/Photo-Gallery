function upDate(previewPic){
    x=document.getElementById("image");
    x.style.backgroundImage="url("+previewPic.src+")";
    x.innerHTML=previewPic.alt; 
	}

	function unDo(){
	x=document.getElementById("image");
    x.style.backgroundImage="";
    x.innerHTML="Hover over an image below to display here.";	
	}