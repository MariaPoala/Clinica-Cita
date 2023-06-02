import Baner from './../../components/ax_baner'
const products = [
  {
    id: 1,
    name: 'ATENCIÓN MEDICA',
    color: 'Nuevo servicio de la clinica Ortega',
    href: '#',
    imageSrc: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/Tres-fallas-que-los-hospitales-cometen-al-prestar-servicios-de-atencion-medica-GR.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 2,
    name: 'TRATAMIENTO MEDICO',
    color: 'Nuevo tratamiento medico de la clinica',
    href: '#',
    imageSrc: 'https://www.conexiones365.com/img/blog/salud-digital-el-concepto-que-revoluciono-la-atencion-medica.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 3,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://medlineplus.gov/images/Xray_share.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 4,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://d100mj7v0l85u5.cloudfront.net/s3fs-public/investigacion-sobre-IA-de-imagenes-medicas-G.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 5,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://i2.wp.com/www.reclamador.es/blog/wp-content/uploads/2017/06/GettyImages-687652532.jpg?fit=1200%2C800&ssl=1',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 6,
    name: 'Zip Tote Basket',
    color: 'White and black',
    href: '#',
    imageSrc: 'https://plustatic.com/8800/conversions/especialidades-medicas-mejor-pagadas-default.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  // More products...
]

export default function ServicioPage() {
  return (
    <>
    <Baner></Baner>
      <div className="">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Servicios:</h2>

          <div className="mt-2 grid grid-cols-2 gap-y-12 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-40 w-40 overflow-hidden rounded-lg ">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-40 w-60 object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-10">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex w-40 h-48 items-end justify-end overflow-hidden rounded-lg p-1">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-30"
                    />
                    <p className="relative text-lg font-semibold text-white">{product.price}</p>
                  </div>
                </div>
                <div className="mt-2">
                  <a
                    href={product.href}
                    className="relative  flex items-center bg-sky-500 w-40 justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Ingresar<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
