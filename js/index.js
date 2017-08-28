window.onload = function(){
	var oBtn1 = document.getElementById('btn1');
	var oBtn2 = document.getElementById('btn2');
	var oDiv = document.getElementById('content');
	var oShow1 = document.getElementById('show1');
	var oShow2 = document.getElementById('show2');
	var oBody = document.getElementsByTagName('body')[0];
	var aBtn = oBody.getElementsByTagName('input');
	
	var arrImg = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.jpg']	
	var arrImg2 = ['img/6.jpg','img/7.jpg','img/8.jpg']
	var num = 0;
	var num1 = 0;
	
	oShow1.innerHTML = '<img />'+'<p></p>';
	var	oImg = oShow1.getElementsByTagName('img')[0];
	var	oP = oShow1.getElementsByTagName('p')[0];
	
	oShow2.innerHTML = '<img />' + '<p></p>';
	var	oImg2 = oShow2.getElementsByTagName('img')[0];
	var	oP2 = oShow2.getElementsByTagName('p')[0];
	
	//初始化
	function Tab(){
		oImg.src = arrImg[num];
		oP.innerHTML = num + 1 + '/' + arrImg.length;
		
		oImg2.src = arrImg2[num1];
		oP2.innerHTML = num1 + 1 + '/' + arrImg2.length;
	}
	Tab();
	
	function Show1(){
			num++;
			if(num >arrImg.length-1){
				num = 0;
			}
			Tab();
	}
	oShow1.onclick=function(){
		Show1();
	}
	
	function Show2(){
			num1++;
			if(num1 >arrImg2.length-1){
				num1 = 0;
			}
			Tab();
	}
	oShow2.onclick = function(){
		Show2();
	}
	
	oBtn1.onclick = function(){
		num--;
		num1--;
		if(num < 0){
			num = arrImg.length-1;
		}
		if(num1 < 0){
			num1 = arrImg2.length-1;
		}
		Tab();
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].className = '';
		}
		this.className = 'active';
	}
	
	oBtn2.onclick = function(){
		Show1();
		Show2();	
		for(var i=0; i<aBtn.length; i++){
			aBtn[i].className = '';
		}
		this.className = 'active';
	}
	
}
