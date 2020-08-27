let burger_menu = document.querySelector(".burger-menu");

function burg() {
	if (burger_menu.style.display === 'none') {
		burger_menu.style.display = 'block';
	}
	else {
		burger_menu.style.display = 'none';
	}
}