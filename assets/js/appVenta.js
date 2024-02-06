// Venta:
/*
<h2>Propiedades en venta</h2>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Apartamento de lujo en zona exclusiva
                </h5>
                <p class="card-text">
                  Este apartamento de lujo está ubicado en una exclusiva zona
                  residencial
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 123 Luxury Lane,
                  Prestige Suburb, CA 45678
                </p>
                <p>
                  <i class="fas fa-bed"></i> 4 Habitaciones |
                  <i class="fas fa-bath"></i> 4 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 5.000</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-danger">
                  <i class="fa-solid fa-ban"></i> No se permiten mascotas
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">Apartamento acogedor en la montaña</h5>
                <p class="card-text">
                  Este apartamento acogedor está situado en lo alto de una
                  montaña con impresionantes vistas
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 789 Mountain Road,
                  Summit Peaks, CA 23456
                </p>
                <p>
                  <i class="fas fa-bed"></i> 2 Habitaciones |
                  <i class="fas fa-bath"></i> 1 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>1.200</p>
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
                src="https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  Penthouse de lujo con terraza panorámica
                </h5>
                <p class="card-text">
                  Este penthouse de lujo ofrece una terraza panorámica con
                  vistas espectaculares
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> 567 Skyline Avenue,
                  Skyview City, CA 56789
                </p>
                <p>
                  <i class="fas fa-bed"></i> 3 Habitaciones |
                  <i class="fas fa-bath"></i> 3 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> 4.500</p>
                <p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" class="btn btn-dark"
          >Ver todas las propiedades en venta</a
        >
*/

const seccionVenta = document.querySelector('#venta');

const propiedades_venta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        bannos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },

    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        bannos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },

    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        bannos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
];

let template = ''; // Creamos una varibale donde se agregara  el HTML generado dinamicamente que esta dnetro del for

for (let propiedadesVenta of propiedades_venta) {
    //agregamos unas variables que tomaran los resultado de las condiciones
    let fumar = ''
    let animal = ''

    if (propiedadesVenta.smoke == true) {
        fumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>'
    }else{
        fumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
    }

    if (propiedadesVenta.pets == true) {
        animal = '<p class="text-success"><i class="fas fa-paw"></i></i> Mascotas permitidas</p>'
    }else{
        animal = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
    }


    //creamos el html para mostrar la información en el DOM
     template += `            
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${propiedadesVenta.src}" class="card-img-top" alt="Imagen del departamento" />
                    <div class="card-body">
                        <h5 class="card-title">${propiedadesVenta.nombre}</h5>
                        <p class="card-text">${propiedadesVenta.descripcion}</p>
                        <p><i class="fas fa-map-marker-alt"></i> ${propiedadesVenta.ubicacion}</p>
                        <p><i class="fas fa-bed"></i> ${propiedadesVenta.habitaciones} | <i class="fas fa-bath"></i> ${propiedadesVenta.bannos}</p>
                        <p><i class="fas fa-dollar-sign"></i> ${propiedadesVenta.costo}</p>
                        ${fumar}
                        ${animal}
                    </div>
                </div>
            </div>`




}

//Agregamos  el HTML generado a nuestro contenedor de resultados
seccionVenta.innerHTML = `
    <h2>Propiedades en venta</h2> 
    <div class="row">
        ${template}
     <a href="propiedades_venta.html" class="btn btn-dark">Ver todas las propiedades</a>
    </div>
`;


