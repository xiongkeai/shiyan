

function moveYun(domObj,styleAttr,startValue,endValue,direction,step,timeSpace){
	var value = startValue;

	var myTimer = setInterval(function(){
		value = value+direction*step;
		
		if(direction>0?value>=endValue:value<=endValue){
			value = endValue;
			window.clearInterval(myTimer);
		}

		if(styleAttr=="opacity"){
			domObj.style[styleAttr] = value;
		}else{
			domObj.style[styleAttr] = value+"px";
		}
	},timeSpace);	
}
	

function moveYun02(domObj,styleAttr,endValue,timeLong){

	var startValue=parseInt(getStyle(domObj,styleAttr));

	var direction = startValue>endValue?-1:1;

	var timeSpace =  10;
	var step =Math.abs(startValue-endValue)/(timeLong/timeSpace) ;

	moveYun(domObj,styleAttr,startValue,endValue,direction,step,timeSpace);
	
}


function slideInOut(domObjOut,styleAttr,endValue,timeLong,domObjIn,diff){
	var startValue=parseInt(getStyle(domObjOut,styleAttr));

	var direction = startValue>endValue?-1:1;

	
	var timeSpace =  10;
	var step =Math.abs(startValue-endValue)/(timeLong/timeSpace) ;

	
	var value = startValue;

	var myTimer = setInterval(function(){
		
		value = value+direction*step;
		
		
		if(direction>0?value>=endValue:value<=endValue){
			value = endValue;
			window.clearInterval(myTimer);
		}

		
		domObjOut.style[styleAttr] = value+"px";
		domObjIn.style[styleAttr] = (value+diff)+"px";
		
	},timeSpace);

}


function fadeInOut(domObjOut,timeLong,domObjIn){

	var startValue=1;
	var endValue = 0;

	var direction = -1;


	var timeSpace =  10;
	var step =Math.abs(startValue-endValue)/(timeLong/timeSpace) ;

	
	var value = startValue;

	var myTimer = setInterval(function(){
		
		value = value+direction*step;
		
	
		if(direction>0?value>=endValue:value<=endValue){
			value = endValue;
			window.clearInterval(myTimer);
		}

		domObjOut.style.opacity = value;
		domObjIn.style.opacity = (1-value);
		
	},timeSpace);

}



	
function parabola03(domObj,startPoint,endPoint,timeLong,openDirection,func){

	let x = endPoint.x-startPoint.x;
	let y = endPoint.y-startPoint.y;
	
	
	let p;
	switch(openDirection){
		case "左": p = Math.abs(y*y/(2*x));break; 
		case "上": p = Math.abs(x*x/(2*y));break; 
		case "右": p = Math.abs(y*y/(2*x));break; 
		case "下": p = Math.abs(x*x/(2*y));break; 
		default: p = Math.abs(y*y/(2*x));break;
	}
	
	let left = 0;
	let top1 = 0;
	

	let direction;
	switch(openDirection){
		case "左":  direction=-1;break;
		case "上":  direction=-1;break;
		case "右":  direction=1;break; 
		case "下":  direction=1;break; 
		default:direction=1;break;
	}
	
	let timeSpace = 10;
	
	
	let dis;
	switch(openDirection){
		case "左":; 
		case "右":dis = startPoint.x-endPoint.x;break; 
		case "上": 
		case "下":dis = startPoint.y-endPoint.y;break; 
		default:dis = startPoint.x-endPoint.x;break;
	}
	let step = Math.abs(dis)/(timeLong/timeSpace);
	
	var myTimer = setInterval(function(){
		
		switch(openDirection){
			case "左":
			case "右":{
						
						let VDirection = endPoint.y>startPoint.y?1:-1;
						
						left=left+direction*step;

					    top1= VDirection*Math.sqrt(2*p*Math.abs(left));
						break;
			          }
			case "上": 
			case "下":{
						
						let HDirection = endPoint.x>startPoint.x?1:-1;
						top1=top1+direction*step;
					    left= HDirection*Math.sqrt(2*p*Math.abs(top1));//x^2 = 2py
						break; 
			          } 
			default:{
						
						let VDirection = endPoint.y>startPoint.y?1:-1;
						left=left+direction*step;
					    top1= VDirection*Math.sqrt(2*p*Math.abs(left));
						break;
			        }
		}
				

		
		let isOver = false;
		switch(openDirection){
			case "左":if(left<=endPoint.x-startPoint.x){
						left=endPoint.x-startPoint.x;
						isOver = true;
					}
					break;  
			case "右":if(left>=(endPoint.x-startPoint.x)){
						left=endPoint.x-startPoint.x;
						isOver = true;
					}
					break;
			case "上": if(top1<=(endPoint.y-startPoint.y)){
							top1=endPoint.y-startPoint.y;
							isOver = true;
						}
						break;
			case "下":if(top1>=(endPoint.y-startPoint.y)){
							top1=endPoint.y-startPoint.y;
							isOver = true;
						}
						break;
			default:if(left>=(endPoint.x-startPoint.x)){
						left=endPoint.x-startPoint.x;
						isOver = true;
					}
					break;
		}
		
		if(isOver){
			window.clearInterval(myTimer);	
			func();
		}
		
		domObj.style.left = left+startPoint.x+"px";
		domObj.style.top = top1+startPoint.y+"px";		
	},timeSpace);
}