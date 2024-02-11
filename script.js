const form = document.getElementById("MyForm");
function volume_sphere(e)
{
	e.preventDefault();

	let r = Number(form.radius.value);
	form.volume.value = ((4 * Math.PI * r ** 3) /3).toFixed(4);
	
	
}
window.onload = () => form.addEventListener("submit", volume_sphere);