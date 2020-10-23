let dropmenu = document.querySelector('.navigation');
let ddcontent = document.querySelector('.isi-dmenu');
dropmenu.addEventListener('click',()=>{
	if(ddcontent.style.display===""){
		ddcontent.style.display="block";
	} else {
		ddcontent.style.display="";
	}
})