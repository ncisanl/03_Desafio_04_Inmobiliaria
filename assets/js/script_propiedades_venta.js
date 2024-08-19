let htmlPropertiesSale = "";

const propertiesSale = [
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
  {
    src: "https://www.bienesonline.com/usa/photos/departamento-en-venta-en-estados-unidos-codigo-14-6060-14097881150.jpg",
    alt: "Imagen del departamento 04",
    name: "Vive el sueño con un apartamento a pasos de la playa",
    description:
      "Moderno apartamento con vistas al mar, ideal para relajarse y disfrutar",
    location: "456 Oakwood Drive, Pine Valley, TX 78901",
    bedrooms: 2,
    bathrooms: 3,
    cost: 3800,
    smoke: true,
    pets: false,
  },
  {
    src: "https://static1.sosiva451.com/87297521/2c9fa739-47f4-418e-9bda-71059bea2e75_u_small.jpg",
    alt: "Imagen del departamento 05",
    name: "Apartamento exclusivo en la playa",
    description:
      "Elegante apartamento frente al mar, perfecto para vivir o vacacionar tranquilamente",
    location: "123 Maple Lane, River Bend, FL 67890",
    bedrooms: 3,
    bathrooms: 2,
    cost: 4600,
    smoke: false,
    pets: true,
  },
  {
    src: "https://img.jamesedition.com/listing_images/2023/05/24/15/03/52/4a2c3df8-81aa-4a6b-8bb2-9b1b3ef11264/je/507x312xc.jpg",
    alt: "Imagen del departamento 06",
    name: "Paraíso rural en una casa en el corazón del campo",
    description:
      "Encantadora casa rural con amplios terrenos, ideal para disfrutar de la naturaleza",
    location: "456 Oakwood Drive, Pine Valley, TX 78901",
    bedrooms: 5,
    bathrooms: 6,
    cost: 9000,
    smoke: true,
    pets: true,
  },
  {
    src: "https://imganuncios.mitula.net/venta_hoteleria_santiago_merced_estados_unidos_1510026705518468890.jpg",
    alt: "Imagen del departamento 07",
    name: "Tu nuevo hogar en el centro de la ciudad",
    description: "Casa elegante y céntrica, ideal para vivir cerca de todo",
    location: "123 Urban Avenue, City Center, NY 10001",
    bedrooms: 2,
    bathrooms: 2,
    cost: 3000,
    smoke: false,
    pets: true,
  },
];

for (let propertySale of propertiesSale) {
  propertySale.cost = propertySale.cost
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  let templatePropertiesSale = `
<div class="col-md-4 mb-4">
<div class="card">
<img src = "${propertySale.src}" class="card-img-top" alt="${propertySale.alt}" />
<div class="card-body">
<h5 class="card-title">${propertySale.name}</h5>
<p class="card-text">${propertySale.description}</p>
<p><i class="fas fa-map-marker-alt"></i> ${propertySale.location}</p>
<p><i class="fas fa-bed"></i> ${propertySale.bedrooms} Habitaciones |
<i class="fas fa-bath"></i> ${propertySale.bathrooms} Baños</p>
<p><i class="fas fa-dollar-sign"></i> ${propertySale.cost}</p>
`;

  if (propertySale.smoke) {
    templatePropertiesSale =
      templatePropertiesSale +
      `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`;
  } else {
    templatePropertiesSale =
      templatePropertiesSale +
      `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;
  }

  if (propertySale.pets) {
    templatePropertiesSale =
      templatePropertiesSale +
      `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>
</div>
</div>
</div>
`;
  } else {
    templatePropertiesSale =
      templatePropertiesSale +
      `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>
</div>
</div>
</div>
`;
  }

  htmlPropertiesSale += templatePropertiesSale;
}

const propertiesSaleSection = document.querySelector(
  ".properties-sale-section",
);

propertiesSaleSection.innerHTML = htmlPropertiesSale;
