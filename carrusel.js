const imagenes = ["paisaje.jpg","pan.png","shadow.jpg"]  

let indice = 0;

function mostrarImagen(){
	document.getElementById("imagen").src = imagenes[indice];
}

function siguiente(){
	indice = (indice + 1) % imagenes.length;
	mostrarImagen();
}

function anterior(){
	indice = (indice - 1 + imagenes.length) % imagenes.length ;
	mostrarImagen();
}

 mostrarImagen();