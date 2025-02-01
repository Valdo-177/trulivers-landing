import Nav from "@/components/layout/Nav";
import Image from "next/image";
import movil from '@/assets/img/movil.png'
import aliados from '@/assets/img/movilAliados.png'
import Carrucel from "@/components/ui/Carrucel";
import { Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import movilAliados from "@/assets/img/movilAliados.png"
import { Global, IconBenet, IconRow, IconRow2, LogoUni, Message } from "@/assets/svg";
import estudiante from "@/assets/img/estudiante.jpg"
import helpPeople from "@/assets/img/joven.png"

const benefits = [
  {
    title: "Prueba Vocacional Personalizada",
    description: "Identifica carreras que se alineen con tus intereses y habilidades.",
  },
  {
    title: "Acceso a Universidades Aliadas",
    description: "Explora opciones académicas en nuestras instituciones destacadas.",
  },
  {
    title: "Bonos y Descuentos Únicos",
    description: "Ahorra hasta un 60% en matrículas de pregrado y posgrado.",
  },
  {
    title: "Asesoría Paso a Paso",
    description: "Nuestro equipo te acompaña en cada etapa, desde la orientación hasta la matrícula.",
  },
];

const BenefitCards = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 justify-items-center md:grid-cols-1 sm:max-h-[500px] lg:grid-cols-2 lg:w-[40rem] overflow-auto">
      {benefits.map((benefit, index) => (
        <div key={index} className="max-w-[329px] p-4 grid gap-4">
          <IconBenet />
          <h4 className="text-[28px] font-medium text-[#3D3D3D] leading-[30px]">{benefit.title}</h4>
          <p className="text-[16px] text-[#525252] font-normal leading-[20px]">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};


export default function Home() {
  const container = 'max-w-[75rem] mx-auto overflow-hidden'
  return (
    <>
      <div className="px-4 max-w-[75rem] mx-auto">
        <Nav />
        <section className="h-[50rem] flex items-center bgHero">
          <div className="flex flex-col gap-6 lg:w-[46rem] md:w-[36rem]">
            <span className="text-primaryBg uppercase text-[20px] font-semibold">Transforma tus sueños en realidad</span>
            <h1 className="text-[#3D3D3D] text-[60px] font-extrabold leading-[3.5rem]">EL PRIMER PASO HACIA TU FUTURO PROFESIONAL COMIENZA AQUÍ</h1>
            <p className="text-[#525252] text-[18px] w-[30rem]">Descubre la carrera ideal para ti con <strong>nuestra prueba psico-orientadora gratuita</strong> y <strong>obtén bonos tipo beca</strong> exclusivos para iniciar tu educación universitaria.</p>
            <div className="flex items-center gap-5">
              <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Haz tu prueba GRATIS</Button>
              <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Conoce Trulivers</Button>
            </div>
          </div>
        </section>
        <section className="sm:h-[50rem] my-[5rem] sm:my-0 flex items-center justify-center flex-col gap-8">
          <h2 className="font-semibold text-[30px] text-[#3D3D3D] w-[33rem] text-center leading-[2.3rem]">¿POR QUÉ ELEGIR TRULIVERS PARA <span className="text-primaryBg">PLANIFICAR TU FUTURO</span>?</h2>
          <div className="shadow-[0px_4px_14px_#0000001a] rounded-3xl h-[60rem] sm:h-[35rem] w-full justify-center sm:justify-normal overflow-hidden relative flex items-center px-[3rem] bg-amber-700 sm:bg-green-500 md:bg-blue-500 lg:bg-red-500">
            <BenefitCards />
            <Image src={movilAliados} alt="" className="md:w-[26rem] lg:w-[35rem] absolute md:top-10 lg:top-0 -right-[5rem] hidden md:block" />
          </div>
        </section>
        <section className="grid items-center justify-center justify-items-center h-[34rem]">
          <h2 className="font-semibold text-[30px] text-[#3D3D3D] w-[33rem] text-center leading-[2.3rem]">Toma el control de tu futuro desde el presente con claridad y confianza.</h2>
          <div className="flex items-center relative">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={item}
                className={`h-[209px] w-[209px] shadow-[0px_4px_14px_#0000003d] rounded-full overflow-hidden ${index > 0 ? '-ml-[5.5rem]' : ''
                  }`}
              >
                <Image
                  src={estudiante}
                  alt="Imagen de estudiante"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="bg-white absolute top-2 -left-[10rem] flex items-center gap-5 p-4 shadow-lg rounded-[20px]">
              <Message />
              <span className="font-medium text-[19px] w-[9rem] leading-[1.3rem]">Oportunidades de networking</span>
            </div>
            <div className="bg-white absolute bottom-2 -right-[10rem] flex items-center gap-5 p-4 shadow-lg rounded-[20px]">
              <Global />
              <div className="grid items-center">
                <span className="font-medium text-[20px]">20,000+</span>
                <span className="font-medium text-[14px]">Estudiantes impactados</span>
              </div>
            </div>
          </div>
          <div className="flex items-end w-[43rem] justify-between mt-[-12rem]">
            <IconRow />
            <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Reclama  tu bono aqui</Button>
            <IconRow2 />
          </div>
        </section>
        <section className="flex items-center justify-evenly h-[40rem]">
          <div>
            <Image src={helpPeople} alt="Imagen de seccion acerca de TRULIVERS" />
          </div>
          <div className="grid gap-5">
            <div>
              <span className="text-primaryBg uppercase text-[20px] font-semibold">Sobre Trulivers</span>
              <h2 className="font-semibold text-[30px] text-[#3D3D3D] w-[31rem] text-start leading-[2.3rem]">TU COMPAÑERO EN EL CAMINO A LA <span className="text-primaryBg">EDUCACIÓN SUPERIOR</span>?</h2>
              <p className="text-[#525252] text-[18px] w-[30rem]">Inspiramos a los jóvenes a descubrir su verdadera vocación y alcanzar sus sueños académicos.</p>
            </div>
            <li className="text-[#525252] text-[18px] w-[30rem] list-disc"><strong>Guía Personalizada:</strong> Nuestro test te ayuda a conectar tus talentos con las mejores oportunidades académicas.</li>
            <li className="text-[#525252] text-[18px] w-[30rem] list-disc"><strong>Beneficios Exclusivos:</strong> Accede a cupones en actividades recreativas y descuentos en matrículas gracias a nuestras alianzas con universidades destacadas.</li>
            <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Reclama  tu bono aqui</Button>
          </div>
        </section>
        <section className="flex items-center flex-col justify-center gap-[3rem] h-[20rem]">
          <h2 className="font-semibold text-[30px] text-[#3D3D3D] w-[33rem] text-center leading-[2.3rem]">Toma el control de tu futuro desde el presente con claridad y confianza.</h2>
          <div className="grid grid-cols-5 w-full gap-y-7 justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
              <LogoUni key={item}/>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}


// <main>
// <section className="bg-[#FBCD40] w-full">
//   <div className="px-4 border max-w-[75rem] mx-auto">
//     <Nav />
//     <div className="flex items-center flex-col gap-3 mt-12 relative h-[50rem] overflow-hidden">
//       <div className="bg-white w-max px-4 py-2 rounded-full">
//         <span>Transforma tus sueños en realidad</span>
//       </div>
//       <div>
//         <h1 className="text-5xl font-bold uppercase w-[35rem] text-center">Descubre tu camino académico con</h1>
//         <h2 className="text-5xl font-bold uppercase w-[35rem] text-center text-outline">Trulivers</h2>
//       </div>
//       <p className="w-[28rem] text-center">Trulivers conecta a jóvenes con su vocación y abre las puertas hacia la educación superior, ofreciendo beneficios exclusivos con nuestras universidades aliadas.</p>
//       <Image className="absolute w-[20rem] left-0 -bottom-[10pc] -rotate-6" src={movil} alt="Imagen de un telefono con una pantalla de la app de trulivers" />
//       <Image className="absolute w-[20rem] left-1/2 -translate-x-1/2 -bottom-[7pc]" src={movil} alt="Imagen de un telefono con una pantalla de la app de trulivers" />
//       <Image className="absolute w-[20rem] right-0 -bottom-[10pc] rotate-6" src={movil} alt="Imagen de un telefono con una pantalla de la app de trulivers" />
//     </div>
//   </div>
// </section>
// <section className={`${container} border h-[30rem] flex flex-col items-center justify-center`}>
//   <h2 className="font-bold text-2xl mb-5">Nuestros Servicios</h2>
//   <div className="grid grid-cols-2 items-center gap-5 justify-items-center">
//     <div className="items-center gap-1 w-[25rem] flex justify-center flex-col">
//       <div className="bg-[#B8B8B8] w-max p-3 rounded-xl">
//         <Activity size='2rem' />
//       </div>
//       <h3 className="font-semibold text-xl text-center">Orientación Vocacional Personalizada</h3>
//       <p className="text-sm text-center">Realiza nuestra prueba psico-orientadora y descubre la carrera ideal para ti.</p>
//     </div>
//     <div className="items-center gap-1 w-[25rem] flex justify-center flex-col">
//       <div className="bg-[#B8B8B8] w-max p-3 rounded-xl">
//         <Activity size='2rem' />
//       </div>
//       <h3 className="font-semibold text-xl">Acceso a Educación Superior</h3>
//       <p className="text-sm text-center">Te conectamos con universidades aliadas que ofrecen programas académicos a tu medida.</p>
//     </div>
//     <div className="items-center gap-1 w-[25rem] flex justify-center flex-col">
//       <div className="bg-[#B8B8B8] w-max p-3 rounded-xl">
//         <Activity size='2rem' />
//       </div>
//       <h3 className="font-semibold text-xl">Cupones Exclusivos</h3>
//       <p className="text-sm text-center">Obtén cupones con descuentos únicos de hasta el 60% en matrículas universitarias.</p>
//     </div>
//     <div className="items-center gap-1 w-[25rem] flex justify-center flex-col">
//       <div className="bg-[#B8B8B8] w-max p-3 rounded-xl">
//         <Activity size='2rem' />
//       </div>
//       <h3 className="font-semibold text-xl">Soporte Personalizado</h3>
//       <p className="text-sm text-center">Nuestro equipo está disponible para ayudarte a resolver tus dudas sobre el proceso educativo.</p>
//     </div>
//   </div>
// </section>
// <section className={`${container} border`}>
//   <div className="h-[45rem] flex items-end">
//     <div className="grid grid-cols-2 w-full">
//       <div className="flex justify-end">
//         <Image className="w-[26rem]" src={aliados} alt="imagen de un telefono con el logo de TRULIVERS" />
//       </div>
//       <div className="overflow-hidden flex flex-col justify-center">
//         <h2 className="font-extrabold text-2xl text-start uppercase w-[14rem]">Nuestros socios e inversores.</h2>
//         <Carrucel />
//         <button className="bg-[#F6C416] px-4 py-1 rounded-full w-max">Contáctate con nosotros</button>
//       </div>
//     </div>
//   </div>
// </section>
// </main>