
//estudiantes

const estudiantes = document.querySelectorAll('#estudiante');

estudiantes.forEach(estudianteDiv => {
        
        const nombre = estudianteDiv.dataset.nombre;
        const descripcion = estudianteDiv.dataset.descripcion;

        const nombreElement = document.createElement('h1');
        nombreElement.textContent = nombre;

        const descripcionElement = document.createElement('p');
        descripcionElement.textContent = descripcion;


        estudianteDiv.appendChild(nombreElement);
        estudianteDiv.appendChild(descripcionElement);
});

//universidades
const universidad = document.querySelectorAll('#universidad');

universidad.forEach(universidadDiv => {
        const nombre = universidadDiv.dataset.nombre;
        const descripcion = universidadDiv.dataset.descripcion;

        const nombreElement = document.createElement('h1');
        nombreElement.textContent = nombre;

        const descripcionElement = document.createElement('p');
        descripcionElement.textContent = descripcion;


        
        universidadDiv.appendChild(nombreElement);
        universidadDiv.appendChild(descripcionElement);
});

//colegios

const colegio = document.querySelectorAll('#colegio');

colegio.forEach(colegioDiv => {
        const nombre = colegioDiv.dataset.nombre;
        const descripcion = colegioDiv.dataset.descripcion;

        const nombreElement = document.createElement('h1');
        nombreElement.textContent = nombre;

        const descripcionElement = document.createElement('p');
        descripcionElement.textContent = descripcion;


        
        colegioDiv.appendChild(nombreElement);
        colegioDiv.appendChild(descripcionElement);
});


let ElementosDiv = document.querySelectorAll('div');
ElementosDiv.forEach((ElementoDiv ) => {
    let elementoImagen = document.createElement('img');
    elementoImagen.setAttribute('src','img/'+ElementoDiv.className);
    ElementoDiv.append(elementoImagen);    
    
});
