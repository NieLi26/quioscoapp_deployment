// import { PrismaClient } from '@prisma/client'
import Layout from "@/layout/Layout";
import Producto from "@/components/Producto";
import useQuiosco from "@/hooks/useQuiosco";

export default function Home({categorias}) {

  const { categoriaActual } = useQuiosco();

  return (
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y Personaliza tu pedido a continuacion
      </p>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        { categoriaActual?.productos?.map(producto => (
          <Producto 
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </Layout>
  )
}

// forma 1 para traer datos desde prisma
// se recomienda cuando solo se mostrara en el mismo componente
// tambien se puede usar getStaticProps
// y la otra es con la api que nos da nextjs
// export const getServerSideProps = async () => {
//   const prisma = new PrismaClient()
//   const categorias = await prisma.categoria.findMany();
//   return { props: { categorias } }
// }