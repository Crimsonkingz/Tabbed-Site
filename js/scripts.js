// var tab1 = document.getElementById("tab1");
// var tab2 = document.getElementById("tab2");
// var tab3 = document.getElementById("tab3");

// var tab1contents = document.getElementById("tab1_contents");
// var tab2contents = document.getElementById("tab2_contents");
// var tab3contents = document.getElementById("tab3_contents");

// "tabs" will be an array of the (list) elements with the class of tab
var tabs = document.getElementsByClassName("tab");

//"tabContents" will be an array of the (paragraph) elements with the class of contents
var tabContents = document.getElementsByClassName("contents");


// Loop through all of the tabs and add a click event handler
for (var i = 0; i < tabs.length; i++) {

	//This is where we use tabClick to return the actual function we want with the argument i
	 tabs[i].addEventListener('click', tabClick(i));	
}


// Have to use "closure" to pass the desired function an argument
// This is done by returning a function from a function that is passed the argument we want
function tabClick(i) {
	return function () {
	
		for (var j=0; j < tabs.length; j++) {
			
			tabs[j].classList.remove("selected");
			tabContents[j].classList.remove("active");
		
		}	
	
		tabs[i].classList.add("selected");
		tabContents[i].classList.add("active");
	}
}