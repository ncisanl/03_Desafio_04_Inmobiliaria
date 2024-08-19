let htmlPropertiesRent = "";

const propertiesRent = [
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    alt: "Imagen del departamento 01",
    name: "Apartamento en el centro de la ciudad",
    description:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo",
    location: "123 Main Street, Anytown, CA 91234",
    bedrooms: 2,
    bathrooms: 2,
    cost: 2000,
    smoke: false,
    pets: true,
  },
  {
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Imagen del departamento 02",
    name: "Apartamento luminoso con vista al mar",
    description:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    location: "456 Ocean Avenue, Seaside Town, CA 56789",
    bedrooms: 3,
    bathrooms: 3,
    cost: 2500,
    smoke: true,
    pets: true,
  },
  {
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    alt: "Imagen del departamento 03",
    name: "Condominio moderno en zona residencial",
    description:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    location: "123 Main Street, Anytown, CA 91234",
    bedrooms: 2,
    bathrooms: 2,
    cost: 2200,
    smoke: false,
    pets: false,
  },
  {
    src: "https://a0.muscache.com/im/pictures/e4780fb2-5b0e-449e-a87c-048f5b4f0b11.jpg?im_w=720",
    alt: "Imagen del departamento 04",
    name: "Sasa de playa con vistas espectaculares",
    description:
      "Casa de playa frente al mar, perfecta para relajarte y desconectar",
    location: "321 Seaside Avenue, Coastal Town, CA 90210",
    bedrooms: 4,
    bathrooms: 2,
    cost: 1800,
    smoke: true,
    pets: false,
  },
  {
    src: "https://previews.123rf.com/images/grispb/grispb2010/grispb201000436/157133015-dos-casas-caba%C3%B1a-rodeada-de-vegetaci%C3%B3n-casas-en-renta-compra-una-caba%C3%B1a-pueblo-de-caba%C3%B1as-campo.jpg",
    alt: "Imagen del departamento 05",
    name: "Escapada rural en esta acogedora casa en el campo",
    description:
      "Casa acogedora en el campo, perfecta para una escapada relajante",
    location: "654 Country Lane, Greenfield, WI 54321",
    bedrooms: 1,
    bathrooms: 1,
    cost: 2000,
    smoke: false,
    pets: true,
  },
  {
    src: "https://media.diariolasamericas.com/p/e4749306f5efc90333c1f582df766790/adjuntos/216/imagenes/100/107/0100107977/855x0/smart/real-estate-pixabayjpg.jpg",
    alt: "Imagen del departamento 06",
    name: "Vive el ritmo urbano en esta casa en el centro",
    description: "Casa moderna en el corazón de la ciudad, cerca de todo",
    location: "789 City Square, Downtown, IL 60614",
    bedrooms: 3,
    bathrooms: 2,
    cost: 4500,
    smoke: true,
    pets: true,
  },
  {
    src: "https://a0.muscache.com/im/pictures/5b2a5847-eae1-432e-bbf2-be13a9941c16.jpg?im_w=480",
    alt: "Imagen del departamento 07",
    name: "Retiro rural con encanto en el campo",
    description: "Casa rústica en el campo, perfecta para una escapada relajante",
    location: "987 Farmstead Road, Meadowbrook, OH 44130",
    bedrooms: 4,
    bathrooms: 3,
    cost: 6000,
    smoke: false,
    pets: true,
  },
];

for (let propertyRent of propertiesRent) {
  propertyRent.cost = propertyRent.cost
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  let templatePropertiesRent = `
<div class="col-md-4 mb-4">
<div class="card">
<img src = "${propertyRent.src}" class="card-img-top" alt="${propertyRent.alt}" />
<div class="card-body">
<h5 class="card-title">${propertyRent.name}</h5>
<p class="card-text">${propertyRent.description}</p>
<p><i class="fas fa-map-marker-alt"></i> ${propertyRent.location}</p>
<p><i class="fas fa-bed"></i> ${propertyRent.bedrooms} Habitaciones |
<i class="fas fa-bath"></i> ${propertyRent.bathrooms} Baños</p>
<p><i class="fas fa-dollar-sign"></i> ${propertyRent.cost}</p>
`;

  if (propertyRent.smoke) {
    templatePropertiesRent =
      templatePropertiesRent +
      `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
  } else {
    templatePropertiesRent =
      templatePropertiesRent +
      `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  }

  if (propertyRent.pets) {
    templatePropertiesRent =
      templatePropertiesRent +
      `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
</div>
</div>
</div>
`;
  } else {
    templatePropertiesRent =
      templatePropertiesRent +
      `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
</div>
</div>
</div>
`;
  }

  htmlPropertiesRent += templatePropertiesRent;
}

const propertiesRentSection = document.querySelector(
  ".properties-rent-section",
);

propertiesRentSection.innerHTML = htmlPropertiesRent;
