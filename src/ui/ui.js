

function openTab(evt, tabContentId){
	var x = document.getElementsByClassName("tabContent");
	for (var i = 0; i < x.length; ++i){
		x[i].className = x[i].className.replace(" selectedTab", "");
	}

	var tabLinks = document.getElementsByClassName("tabLink");
	for (i = 0; i < x.length; i++) {
		tabLinks[i].className = tabLinks[i].className.replace(" red", "");
	}

	document.getElementById(tabContentId).className += " selectedTab";
	evt.currentTarget.className += " red";
}