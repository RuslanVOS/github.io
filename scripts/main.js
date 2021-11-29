var myImage=document.querySelector('img');
myImage.onclick=function() {
	var mySrc=myImage.getAttribute('src');
	if(mySrc==='images/vacuumator1.jpg') {
	myImage.setAttribute('src', 'images/vacuumator2.jpg');
	} else{
		myImage.setAttribute('src','images/vacuumator1.jpg');
	}
}
