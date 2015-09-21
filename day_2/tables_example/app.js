document.getElementById("add-wine-button").addEventListener("click", function(event) {
	event.preventDefault();

	document
		.getElementById("add-wine-form")
		.classList
		.toggle("hide");
});

document
	.getElementById("color-picker")
	.addEventListener("change", function() {
		var rows = document.querySelectorAll("#wine-list tbody tr");

		for (var i = 0; i < rows.length; i++) {
			if (i % 2 === 0) {
				rows[i].setAttribute("style", "background-color: " + this.value);
			}
		}
	});

var checks = document.querySelectorAll("#toggle-visibility input");

for (var i = 0; i < checks.length; i++) {
	checks[i].addEventListener("change", function() {
		var search = this.value;

		var titles = document.querySelectorAll("#wine-list tr.titles td");

		for (var j = 0; j < titles.length; j++) {
			if (titles[j].innerHTML === search) {
				titles[j].classList.toggle("active");
			}
		}
	});
}