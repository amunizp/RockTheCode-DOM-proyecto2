import './style.css'
let vendor = ''
let maxPrice = '0'
const products = [
  {
    name: '00 HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
  {
    name: '01 HP Essentials 255 G8 AMD',
    price: 300,
    stars: 0,
    reviews: 250,
    seller: 'Pedro por su casa',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1067/10674328/1266-alurin-flex-advance-amd-ryzen-5-5500u-8gb-500gb-ssd-156-windows-11-home-comprar.jpg'
  },
  {
    name: '02 HP Essentials 255 G8 AMD',
    price: 400,
    stars: 1,
    reviews: 250,
    seller: 'Andres y otros tres',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1065/10658853/1442-asus-tuf-gaming-f15-fx507zc4-hn002-intel-core-i7-12700h-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
    name: '03 HP Essentials 255 G8 AMD',
    price: 200,
    stars: 2,
    reviews: 250,
    seller: 'Fray Perico y su burrico',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1074/10741372/16-pccom-revolt-4060-intel-core-i7-13700h-32gb-500gb-ssd-rtx-4060-173-windows-11-home-comprar.jpg'
  },
  {
    name: '04 HP Essentials 255 G8 AMD',
    price: 250,
    stars: 3,
    reviews: 250,
    seller: 'Fray Perico y su burrico',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1073/10736940/1920-asus-tuf-gaming-f15-fx507vv4-lp035-intel-core-i9-13900h-32gb-1tb-ssd-rtx-4060-156.jpg'
  },
  {
    name: '05 HP Essentials 255 G8 AMD',
    price: 500,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1081/10811719/1406-asus-vivobook-15-f1504za-nj702-intel-core-i5-1235u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: '06 HP Essentials 255 G8 AMD',
    price: 459,
    stars: 5,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1081/10812169/1620-vanwin-intel-celeron-n5095-24gb-512-gb-ssd-156-c415f430-ac68-492a-8b6b-58a49001ede9.jpg'
  },
  {
    name: '07 HP Essentials 255 G8 AMD',
    price: 350,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1079/10796165/1406-hp-15-fd0017ns-intel-core-i3-n305-8gb-256gb-ssd-156.jpg'
  },
  {
    name: '08 HP Essentials 255 G8 AMD',
    price: 450,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1073/10733266/1752-hp-15-fd0076ns-intel-core-i5-1335u-16gb-512gb-ssd-156.jpg'
  },
  {
    name: '09 HP Essentials 255 G8 AMD',
    price: 550,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1057/10579901/1975-hp-victus-15-fa0012ns-intel-core-i5-12500h-16gb-512gb-ssd-rtx-3050-156.jpg'
  },
  {
    name: '10 HP Essentials 255 G8 AMD',
    price: 489,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-150-150/articles/1079/10792747/1824-acer-nitro-v-15-anv15-51-51pq-intel-core-i5-13420h-16gb-1tb-ssd-rtx-3050-156-review.jpg'
  }
]

const pintarProductos = (listadoProductos) => {
  const portatiles = document.querySelector('#app')
  portatiles.innerHTML = ''
  for (const producto of listadoProductos) {
    let stars = ''
    switch (producto.stars) {
      case 0:
        stars = '☆☆☆☆☆'
        break
      case 1:
        stars = '★☆☆☆☆'
        break
      case 2:
        stars = '★★☆☆☆'
        break
      case 3:
        stars = '★★★☆☆'
        break
      case 4:
        stars = '★★★★☆'
        break
      case 5:
        stars = '★★★★★'
        break
      default:
        console.log('no star rating')
    }
    let productoHTML = `
          <div class="producto">
              <div class="img">
                <img src="${producto.image}" />
              </div>
              <h3>${producto.name}</h3>
              <p class= "price">${producto.price}</p>
              <div class= "stars reviews"><p class="reviews">${stars} average out of ${producto.reviews} reviews!</p></div>
              <p class= "seller">${producto.seller}</div>
          </div>
      `
    portatiles.innerHTML += productoHTML
  }
}
const filtrarVendors = () => {
  const filtered = []

  for (const producto of products) {
    if (vendor.includes(producto.seller)) {
      filtered.push(producto)
    } else {
    }
  }
  // console.log(filtered)
  // console.log(vendor)
  if (vendor == '') {
    pintarProductos(products)
    let header = document.querySelector('h1')
    header.innerHTML = `Lista de Portatiles`
  } else {
    pintarProductos(filtered)
    let header = document.querySelector('h1')

    header.innerHTML = `Lista de productos de ${vendor}`
  }
}
const filtrarPrecios = (maxPrice) => {
  const filtered = []
  console.log(maxPrice)
  for (const producto of products) {
    if (producto.price <= maxPrice) {
      filtered.push(producto)
    } else {
      console.log(producto.price)
      console.log(filtered.price)
    }
  }
  // console.log(filtered)
  // console.log(vendor)
  // if (maxPrice == '') {
  //   pintarProductos(products)
  // } else {
  //   pintarProductos(filtered)
  // }
  let header = document.querySelector('h1')

  header.innerHTML = `Lista de productos que valen menos que  £${maxPrice}`
  pintarProductos(filtered)
  //TODO en algún momento despues de pintar todo bien decide reiniciar vite. Porque?
}
const myForm = document.createElement('form')

// document.body.appendChild(myFieldSet)
const pintarFiltroVendedores = (listadoProductos) => {
  //Crear el encabezado
  const myFieldSet = document.createElement('fieldset')
  myFieldSet.classList.add('vendorClass')
  const vendorFilterLabel = document.createElement('label')
  vendorFilterLabel.innerHTML = 'Filtra por Vendedor'
  vendorFilterLabel.setAttribute('for', 'vendorFilter')
  myFieldSet.appendChild(vendorFilterLabel)
  let mySelector = document.createElement('select')
  mySelector.id = 'vendorFilter'
  mySelector.innerHTML = `<option value="">Sin Filtro</option>`
  //crear lista sin duplicados
  let DuplicatedVendors = listadoProductos.map((vendedor) => vendedor.seller)
  let vendors = new Set(DuplicatedVendors)
  let listOfVendors = [...vendors]
  //añadir todas las opciones
  listOfVendors.forEach((vendor) => {
    mySelector.innerHTML += `<option value = "${vendor}"> ${vendor}</option>` //value tiene que ser insertado de otra manera value = ${vendor}
  })
  //pintar formularios
  myFieldSet.appendChild(mySelector)
  myForm.appendChild(myFieldSet)

  //avisa que algo cambia!
  mySelector.addEventListener('change', (event) => {
    vendor = event.target.value
    filtrarVendors()
  })
}
const pintarFiltroPrecios = (listadoProductos) => {
  //presentamos nueva seccion de formulario
  const myFieldSet = document.createElement('fieldset')
  myFieldSet.classList.add('priceClass')
  const priceFilterLabel = document.createElement('label')
  priceFilterLabel.innerHTML = 'Filtra por Precio'
  priceFilterLabel.setAttribute('for', 'priceFilter')
  myFieldSet.appendChild(priceFilterLabel)
  let myInput = document.createElement('input')
  myInput.id = 'priceFilter'
  myInput.type = 'number'
  let myButton = document.createElement('input')
  myButton.type = 'submit'
  myButton.value = 'Buscar'

  //lo pegamos todo en el HTML
  myFieldSet.appendChild(myInput)
  myFieldSet.appendChild(myButton)
  myForm.appendChild(myFieldSet)
  myInput.addEventListener('change', (event) => {
    // precio = event.target.value
    let maxPrice = event.target.value
    console.log(maxPrice)
    //TODO no se porque no funciona no veo nada en la consola por alguna razon recarga VITE pero filterar por vendedor no lo hace?
    //TODO funciona pero no como esperaría.
    filtrarPrecios(maxPrice)
  })
  // myButton.addEventListener('submit', (ev) => {
  //   console.log(ev)
  //   let precio = ev.value
  //   //ev.preventDefault() //creo que esto deberia evitar que funcione el submit de myinput
  //   //TODO no se porque no funciona no veo nada en la consola
  //   filtrarPrecios(precio)
  // })
}
const pintarLimpiarFitros = (listadoProductos) => {
  //presentamos nueva seccion de formulario
  const myFieldSet = document.createElement('fieldset')
  myFieldSet.classList.add('cleanClass')
  let myButton = document.createElement('input')
  myButton.type = 'submit'
  myButton.value = 'Limpiar Filtros'

  //lo pegamos todo en el HTML

  myFieldSet.appendChild(myButton)
  myForm.appendChild(myFieldSet)

  myButton.addEventListener('submit', (ev) => {
    console.log(ev)
    pintarProductos(listadoProductos)
    //TODO porque recarga la página entera?
  })
}
document.getElementById('app').insertAdjacentElement('beforebegin', myForm)

pintarProductos(products)
pintarFiltroVendedores(products)
pintarFiltroPrecios(products)
pintarLimpiarFitros(products)
//TODO idealmente mirar una manera de combinar los filtros.
//Se podria hacer usando los valores flitrarvendors() dentro de flitrarPrecios() y al reves?
