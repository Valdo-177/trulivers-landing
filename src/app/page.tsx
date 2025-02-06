import Image from "next/image";
import { Button } from "@/components/ui/button";
import movilAliados from "@/assets/img/movilAliados.png"
import { Global, IconBenet, IconRow, IconRow2, LogoUni, Message } from "@/assets/svg";
import estudiante from "@/assets/img/estudiante.jpg"
import helpPeople from "@/assets/img/joven.png"
import Fasq from "@/components/ui/Fasq";

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
        <div key={index} className="sm:max-w-[329px] max-w-full w-full p-4 grid sm:gap-4 gap-2">
          <IconBenet className="scale-[0.7] sm:scale-1" />
          <h4 className="sm:text-[28px] text-[22px] font-medium text-[#3D3D3D] leading-[30px]">{benefit.title}</h4>
          <p className="text-[16px] text-[#525252] font-normal leading-[20px]">{benefit.description}</p>
        </div>
      ))}
    </div>
  );
};


export default function Home() {

  return (
    <>
      <div className="px-4 max-w-[75rem] mx-auto">
        <section className="sm:h-[50rem] h-[40rem] flex items-center bgHero">
          <div className="flex flex-col gap-6 lg:w-[46rem] md:w-[36rem]">
            <span className="text-primaryBg uppercase text-2xl font-semibold leading-[1.3rem]">Transforma tus sueños en realidad</span>
            <h1 className="text-[#3D3D3D] text-4xl lg:text-5xl font-extrabold sm:leading-[3.5rem] leading-[2.1rem]">EL PRIMER PASO HACIA TU FUTURO PROFESIONAL COMIENZA AQUÍ</h1>
            <p className="text-[#525252] leading-7 sm:w-[30rem]">Descubre la carrera ideal para ti con <strong>nuestra prueba psico-orientadora gratuita</strong> y <strong>obtén bonos tipo beca</strong> exclusivos para iniciar tu educación universitaria.</p>
            <div className="flex items-center gap-5">
              <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Haz tu prueba GRATIS</Button>
              <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Conoce Trulivers</Button>
            </div>
          </div>
        </section>
        <section className="sm:h-[50rem] my-[5rem] sm:my-0 flex items-center justify-center flex-col gap-8">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[33rem] text-center sm:leading-[2.3rem]">¿POR QUÉ ELEGIR TRULIVERS PARA <span className="text-primaryBg">PLANIFICAR TU FUTURO</span>?</h2>
          <div className="shadow-[0px_4px_14px_#0000001a] rounded-3xl h-max sm:h-[35rem] w-full justify-center sm:justify-normal overflow-hidden relative flex items-center sm:px-[3rem] px-[1rem] ">
            <BenefitCards />
            <Image src={movilAliados} alt="" className="md:w-[26rem] lg:w-[35rem] absolute md:top-10 lg:top-0 -right-[5rem] hidden md:block" />
          </div>
        </section>
        <section className="grid items-center justify-center justify-items-center h-[34rem]">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[33rem] text-center sm:leading-[2.3rem]">Toma el control de tu futuro desde el presente con claridad y confianza.</h2>
          <div className="flex items-center relative">
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={item}
                className={`sm:h-[209px] sm:w-[209px] h-[109px] w-[109px] shadow-[0px_4px_14px_#0000003d] rounded-full overflow-hidden ${index > 0 ? '-ml-[5.5rem]' : ''
                  }`}
              >
                <Image
                  src={estudiante}
                  alt="Imagen de estudiante"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            <div className="absolute sm:top-2 top-[-3.5rem] sm:-left-[10rem] -left-[5rem] flex items-center sm:gap-5 gap-2 p-4 shadow-lg rounded-[20px]">
              <Message className="scale-[0.8] sm:scale-1" />
              <span className="font-medium sm:text-[19px] text-[16px] w-[9rem] leading-[1.3rem]">Oportunidades de networking</span>
            </div>
            <div className="bg-white absolute sm:bottom-2 bottom-[-3.5rem] sm:-right-[10rem] -right-[5rem] flex items-center sm:gap-5 gap-2 p-4 shadow-lg rounded-[20px]">
              <Global className="scale-[0.8] sm:scale-1" />
              <div className="grid items-center">
                <span className="font-medium sm:text-[20px] text-[16px]">20,000+</span>
                <span className="font-medium text-[14px]">Estudiantes impactados</span>
              </div>
            </div>
          </div>
          <div className="flex items-end sm:w-[43rem] justify-between sm:mt-[-12rem]">
            <IconRow className="hidden sm:block" />
            <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Reclama  tu bono aqui</Button>
            <IconRow2 className="hidden sm:block" />
          </div>
        </section>
        <section className="flex items-center justify-evenly h-[40rem]">
          <div className="hidden lg:block">
            <Image src={helpPeople} alt="Imagen de seccion acerca de TRULIVERS" />
          </div>
          <div className="grid gap-5">
            <div>
              <span className="text-primaryBg uppercase sm:text-[20px] text-[16px] font-semibold">Sobre Trulivers</span>
              <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[31rem] text-start leading-[2.3rem]">TU COMPAÑERO EN EL CAMINO A LA <span className="text-primaryBg">EDUCACIÓN SUPERIOR</span>?</h2>
              <p className="text-[#525252] sm:text-[18px] sm:w-[30rem]">Inspiramos a los jóvenes a descubrir su verdadera vocación y alcanzar sus sueños académicos.</p>
            </div>
            <li className="text-[#525252] sm:text-[18px] sm:w-[30rem] list-disc"><strong>Guía Personalizada:</strong> Nuestro test te ayuda a conectar tus talentos con las mejores oportunidades académicas.</li>
            <li className="text-[#525252] sm:text-[18px] sm:w-[30rem] list-disc"><strong>Beneficios Exclusivos:</strong> Accede a cupones en actividades recreativas y descuentos en matrículas gracias a nuestras alianzas con universidades destacadas.</li>
            <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>Reclama  tu bono aqui</Button>
          </div>
        </section>
        <section className="flex items-center mb-[4rem] flex-col justify-center gap-[3rem]">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[33rem] text-center sm:leading-[2.3rem]">Toma el control de tu futuro desde el presente con claridad y confianza.</h2>
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 w-full gap-y-7 justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
              <LogoUni key={item} />
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-7 items-center">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[31rem] leading-[2.3rem] text-center">Testimonios</h2>
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="shadow-[0px_4px_14px_#0000001a] rounded-2xl p-5 py-7 justify-center sm:justify-normal overflow-hidden relative flex flex-col  items-center">
                <span>María Rodríguez</span>
                <p>La prueba psico-orientadora me ayudó a aclarar mis ideas y ahora estudio lo que realmente me apasiona.</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-8 justify-center sm:min-h-[20rem] py-9">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[31rem] text-start leading-[2.3rem] uppercase">Preguntas Frecuentes</h2>
          <div className="flex items-start flex-col sm:flex-row justify-center gap-3">
            <div className="flex flex-col gap-3">
              {[1, 2].map(item => (
                <Fasq key={item} />
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {[1, 2].map(item => (
                <Fasq key={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}