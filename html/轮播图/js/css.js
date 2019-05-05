

function getStyle(domObj,attr) {
	if(domObj.currentStyle){
		return domObj.currentStyle[attr];
	}else{
		return window.getComputedStyle(domObj)[attr];
	}
}




function setStyle(doB,sName,sx){
	for(let i=0;i<doB.length;i++){
		if(sName == opacity){
			doB[i].style = "sx";
		}
		doB[i].style = "sx"+"px";
	}
	
}


function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}