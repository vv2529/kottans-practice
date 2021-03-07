const navbar = document.getElementById('navbar');

/*
 * Events
 */

document.getElementById('navbar-toggle').addEventListener('click', function() {
	navbar.classList.toggle('shown');
});

navbar.addEventListener('click', function(event) {
	// delegate clicks from <li>s to <nav>
	const elem = event.target;
	if (elem.nodeName != 'LI') return;

	const id = elem.dataset.id;
	displayData(id, elem.textContent);
	navbar.classList.remove('shown');
});

document.getElementById('btn-go').addEventListener('click', function() {
	window.open(currentPage);
})

/*
 * Functionality
 */

let currentPage = 'home';

function displayData(id, title) {
	if (id == currentPage) return;
	const section = document.getElementById(id);
	if (section) {
		if (id == 'home') {
			document.getElementById('btn-go').classList.remove('shown');
		} else {
			document.getElementById('btn-go').classList.add('shown');
		}

		document.getElementById(currentPage).classList.remove('shown');
		document.getElementById(id).classList.add('shown');
		document.getElementById('page-title').textContent = title;
		currentPage = id;
	}
}
