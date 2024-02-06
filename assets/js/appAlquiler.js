
/*************************************ALQUILER *************************************** */

const seccionAlquiler = document.querySelector('#alquiler');

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        bannos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },

    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        bannos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        bannos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
];





let template_Alquiler = ''; // Creamos una varibale donde se agregara  el HTML generado dinamicamente que esta dnetro del for

for (let propiedadesAlquiler of propiedades_alquiler) {
    //agregamos unas variables que tomaran los resultado de las condiciones
    let fumar = ''
    let animal = ''

    if (propiedadesAlquiler.smoke == true) {
        fumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    }else{
        fumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
    }

    if (propiedadesAlquiler.pets == true) {
        animal = '<p class="text-success"><i class="fas fa-paw"></i></i> Mascotas permitidas</p>'
    }else{
        animal = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
    }


    //creamos el html para mostrar la información en el DOM
    template_Alquiler += `            
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedadesAlquiler.src}" class="card-img-top" alt="Imagen del departamento" />
                    <div class="card-body">
                        <h5 class="card-title">${propiedadesAlquiler.nombre}</h5>
                        <p class="card-text">${propiedadesAlquiler.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedadesAlquiler.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedadesAlquiler.habitaciones} | <i class="fas fa-bath"></i> ${propiedadesAlquiler.bannos}</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedadesAlquiler.costo}</p>
                        ${fumar}
                        ${animal}
                    </div>
                </div>
            </div>`




}



//Agregamos  el HTML generado a nuestro contenedor de resultados
seccionAlquiler.innerHTML = `
    <h2>Propiedades en alquiler</h2> 
    <div class="row">
        ${template_Alquiler}
     <a href="propiedades_alquiler.html" class="btn btn-dark">Ver todas las propiedades</a>
    </div>
`;


/*

<h2>Propiedades en alquiler</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Apartamento en el centro de la ciudad
                </h5>
                <p class="card-text">
                  Este apartamento de 2 habitaciones está ubicado en el corazón
                  de la ciudad, cerca de todo.
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Main Street,
                  Anytown, CA 91234
                </p>
                <p>
                  <i class="fas fa-bed"></i> 2 Habitaciones |
                  <i class="fas fa-bath"></i> 2 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 2.000</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Apartamento luminoso con vista al mar
                </h5>
                <p class="card-text">
                  Este hermoso apartamento ofrece una vista impresionante al mar
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 456 Ocean Avenue,
                  Seaside Town, CA 56789
                </p>
                <p>
                  <i class="fas fa-bed"></i> 3 Habitaciones |
                  <i class="fas fa-bath"></i> 3 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 2,500</p>
                <p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                  </p>
                  <p class="text-success">
                    <i class="fas fa-paw"></i> Mascotas permitidas
                  </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Condominio moderno en zona residencial
                </h5>
                <p class="card-text">
                  Este elegante condominio moderno está ubicado en una tranquila
                  zona residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Main Street,
                  Anytown, CA 91234
                </p>
                <p>
                  <i class="fas fa-bed"></i> 2 Habitaciones |
                  <i class="fas fa-bath"></i> 2 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 2,200</p>
                <p class="text-danger">
                    <i class="fas fa-smoking-ban"></i> No se permite fumar
                  </p>
                  <p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                  </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-dark"
          >Ver todas las propiedades en alquiler</a
        >


*/

