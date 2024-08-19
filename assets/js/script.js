let htmlPropertiesSaleHome = "";
let htmlPropertiesRentHome = "";

const propertiesSaleHome = [
  {
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    alt: "Imagen del departamento 01",
    name: "Apartamento de lujo en zona exclusiva",
    description:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    location: "123 Luxury Lane, Prestige Suburb, CA 45678",
    bedrooms: 4,
    bathrooms: 4,
    cost: 5000,
    smoke: false,
    pets: false,
  },
  {
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    alt: "Imagen del departamento 02",
    name: "Apartamento acogedor en la montaña",
    description:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    location: "789 Mountain Road, Summit Peaks, CA 23456",
    bedrooms: 2,
    bathrooms: 1,
    cost: 1200,
    smoke: true,
    pets: true,
  },
  {
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    alt: "Imagen del departamento 03",
    name: "Penthouse de lujo con terraza panorámica",
    description:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    location: "567 Skyline Avenue, Skyview City, CA 56789",
    bedrooms: 3,
    bathrooms: 3,
    cost: 4500,
    smoke: false,
    pets: true,
  },
];

const propertiesRentHome = [
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    alt: "Imagen del departamento 04",
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
    alt: "Imagen del departamento 05",
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
    alt: "Imagen del departamento 06",
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
];

for (let propertySaleHome of propertiesSaleHome) {
  propertySaleHome.cost = propertySaleHome.cost
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  let templatePropertiesSaleHome = `
<div class="col-md-4 mb-4">
<div class="card">
<img src = "${propertySaleHome.src}" class="card-img-top" alt="${propertySaleHome.alt}" />
<div class="card-body">
<h5 class="card-title">${propertySaleHome.name}</h5>
<p class="card-text">${propertySaleHome.description}</p>
<p><i class="fas fa-map-marker-alt"></i> ${propertySaleHome.location}</p>
<p><i class="fas fa-bed"></i> ${propertySaleHome.bedrooms} Habitaciones |
<i class="fas fa-bath"></i> ${propertySaleHome.bathrooms} Baños</p>
<p><i class="fas fa-dollar-sign"></i> ${propertySaleHome.cost}</p>
`;

  if (propertySaleHome.smoke) {
    templatePropertiesSaleHome =
      templatePropertiesSaleHome +
      `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
  } else {
    templatePropertiesSaleHome =
      templatePropertiesSaleHome +
      `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  }

  if (propertySaleHome.pets) {
    templatePropertiesSaleHome =
      templatePropertiesSaleHome +
      `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
</div>
</div>
</div>
`;
  } else {
    templatePropertiesSaleHome =
      templatePropertiesSaleHome +
      `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
</div>
</div>
</div>
`;
  }

  htmlPropertiesSaleHome += templatePropertiesSaleHome;
}

for (let propertyRentHome of propertiesRentHome) {
  propertyRentHome.cost = propertyRentHome.cost
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  let templatePropertiesRentHome = `
<div class="col-md-4 mb-4">
<div class="card">
<img src = "${propertyRentHome.src}" class="card-img-top" alt="${propertyRentHome.alt}" />
<div class="card-body">
<h5 class="card-title">${propertyRentHome.name}</h5>
<p class="card-text">${propertyRentHome.description}</p>
<p><i class="fas fa-map-marker-alt"></i> ${propertyRentHome.location}</p>
<p><i class="fas fa-bed"></i> ${propertyRentHome.bedrooms} Habitaciones |
<i class="fas fa-bath"></i> ${propertyRentHome.bathrooms} Baños</p>
<p><i class="fas fa-dollar-sign"></i> ${propertyRentHome.cost}</p>
`;

  if (propertyRentHome.smoke) {
    templatePropertiesRentHome =
      templatePropertiesRentHome +
      `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
  } else {
    templatePropertiesRentHome =
      templatePropertiesRentHome +
      `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  }

  if (propertyRentHome.pets) {
    templatePropertiesRentHome =
      templatePropertiesRentHome +
      `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
</div>
</div>
</div>
`;
  } else {
    templatePropertiesRentHome =
      templatePropertiesRentHome +
      `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
</div>
</div>
</div>
`;
  }

  htmlPropertiesRentHome += templatePropertiesRentHome;
}

const propertiesSaleSectionHome = document.querySelector(
  ".properties-sale-section-home",
);
const propertiesRentSectionHome = document.querySelector(
  ".properties-rent-section-home",
);

propertiesSaleSectionHome.innerHTML = htmlPropertiesSaleHome;
propertiesRentSectionHome.innerHTML = htmlPropertiesRentHome;
