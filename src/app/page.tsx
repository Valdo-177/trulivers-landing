import Nav from "@/components/layout/Nav";
import Image from "next/image";
import movil from '@/assets/img/movil.png'
import aliados from '@/assets/img/movilAliados.png'
import Carrucel from "@/components/ui/Carrucel";
import { Activity } from "lucide-react";

export default function Home() {
  const container = 'max-w-[75rem] mx-auto overflow-hidden'
  return (
    <main>
      <section className="bg-[#FBCD40] w-full">
        <div className="px-4 border max-w-[75rem] mx-auto">
          <Nav />
          <div className="flex items-center flex-col gap-3 mt-12 relative h-[50rem] overflow-hidden">
            <div className="bg-white w-max px-4 py-2 rounded-full">
              <span>Transforma tus sueños en realidad</span>
            </div>
            <div>
              <h1 className="text-5xl font-bold uppercase w-[35rem] text-center">Descubre tu camino académico con</h1>
              <h2 className="text-5xl font-bold uppercase w-[35rem] text-center text-outline">Trulivers</h2>
            </div>
            <p className="w-[28rem] text-center">Trulivers conecta a jóvenes con su vocación y abre las puertas hacia la educación superior, ofreciendo beneficios exclusivos con nuestras universidades aliadas.</p>
            <Image className="absolute w-[20rem] left-0 -bottom-[10pc] -rotate-6" src={movil} alt="Imagen de un telefono con una pantalla de la app de trulivers" />
            <Image className="absolute w-[20rem] left-1/2 -translate-x-1/2 -bottom-[7pc]" src={movil} alt="Imagen de un telefono con una pantalla de la app de trulivers" />
            <Image className="absolute w-[20rem] right-0 -bottom-[10pc] rotate-6" src={movil} alt="Imagen de un telefono con una pantalla de la app de trulivers" />
          </div>
        </div>
      </section>
      <section className={`${container} border`}>
        <div className="h-[45rem] flex items-end">
          <div className="grid grid-cols-2 w-full">
            <div className="flex justify-end">
              <Image className="w-[26rem]" src={aliados} alt="imagen de un telefono con el logo de TRULIVERS" />
            </div>
            <div className="overflow-hidden flex flex-col justify-center">
              <h2 className="font-extrabold text-2xl text-start uppercase w-[14rem]">Nuestros socios e inversores.</h2>
              <Carrucel />
              <button className="bg-[#F6C416] px-4 py-1 rounded-full w-max">Contáctate con nosotros</button>
            </div>
          </div>
        </div>
      </section>
      <section className={`${container} border h-[30rem] flex flex-col items-center justify-center`}>
        <h2 className="font-bold text-2xl mb-5">Nuestros Servicios</h2>
        <div className="grid grid-cols-2 items-center gap-5 justify-items-center">
          <div className="items-center gap-1 w-[25rem] flex justify-center flex-col">
            <div className="bg-[#B8B8B8] w-max p-3 rounded-xl">
              <Activity size='2rem' />
            </div>
            <h3 className="font-semibold text-xl text-center">Orientación Vocacional Personalizada</h3>
            <p className="text-sm text-center">Realiza nuestra prueba psico-orientadora y descubre la carrera ideal para ti.</p>
          </div>
          <div className="items-center gap-1 w-[25rem] flex justify-center flex-col">
            <div className="bg-[#B8B8B8] w-max p-3 rounded-xl">
              <Activity size='2rem' />
            </div>
            <h3 className="font-semibold text-xl">Acceso a Educación Superior</h3>
            <p className="text-sm text-center">Te conectamos con universidades aliadas que ofrecen programas académicos a tu medida.</p>
          </div>
          <div className="items-center gap-1 w-[25rem] flex justify-center flex-col">
            <div className="bg-[#B8B8B8] w-max p-3 rounded-xl">
              <Activity size='2rem' />
            </div>
            <h3 className="font-semibold text-xl">Cupones Exclusivos</h3>
            <p className="text-sm text-center">Obtén cupones con descuentos únicos de hasta el 60% en matrículas universitarias.</p>
          </div>
          <div className="items-center gap-1 w-[25rem] flex justify-center flex-col">
            <div className="bg-[#B8B8B8] w-max p-3 rounded-xl">
              <Activity size='2rem' />
            </div>
            <h3 className="font-semibold text-xl">Soporte Personalizado</h3>
            <p className="text-sm text-center">Nuestro equipo está disponible para ayudarte a resolver tus dudas sobre el proceso educativo.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
