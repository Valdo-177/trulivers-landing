"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import movilAliados from "@/assets/img/movilAliados.png"
import { IconBenet } from "@/assets/svg";
import { motion, useInView } from "motion/react"
import helpPeople from "@/assets/img/imagen_Conpañeros.jpg"
import Fasq from "@/components/ui/Fasq";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import uniSimon from "@/assets/img/Unisimon_logo.png"
import sena from "@/assets/img/LOGO-TECNOPARQUE.png"
import corona from "@/assets/img/fundacionCorona.png"
import botnar from "@/assets/img/fundacionBotnar.png"
import apalanca from "@/assets/img/LOGO-APPALANCA.png"
import colombiaciena from "@/assets/img/colombiaCiencia.png"
import salamanca from "@/assets/img/salamanca.png"
import autonoma from "@/assets/img/autonoma.png"
import emprende from "@/assets/img/emprende.png"
import italiano from "@/assets/img/ponte.png"
import Script from 'next/script'


function WordsPullUp({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split(' ');

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-wrap w-full">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? 'animate' : ''}
          custom={i}
          className={cn(
            '',
            'pr-2', // class to sperate words
            className
          )}
        >
          {current == '' ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}

const BenefitCards = () => {
  const whyChooseTranslate = useTranslations("whyChoose");

  const benefits = [
    {
      title: whyChooseTranslate("title_card1"),
      description: whyChooseTranslate("description_card1"),
    },
    {
      title: whyChooseTranslate("title_card2"),
      description: whyChooseTranslate("description_card2"),
    },
    {
      title: whyChooseTranslate("title_card3"),
      description: whyChooseTranslate("description_card3"),
    },
    {
      title: whyChooseTranslate("title_card4"),
      description: whyChooseTranslate("description_card4"),
    },
  ];
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

  const heroTranslate = useTranslations("hero");
  const whyChooseTranslate = useTranslations("whyChoose");
  const aboutTranslate = useTranslations("About");
  const takeTranslate = useTranslations("Take");
  const testimonialsTranslate = useTranslations("Testimonials");
  const askedQuestionsTranslate = useTranslations("AskedQuestions");

  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R60TCJYEEC"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-R60TCJYEEC');
  `}
      </Script>
      <div className="px-4 max-w-[75rem] mx-auto pt-[6rem] 2xl:max-w-[100rem]">

        <section className="sm:h-[50rem] h-[40rem] flex items-center bgHero">
          <div className="flex flex-col gap-6 lg:w-[46rem] md:w-[36rem]">
            <span className="text-primaryBg uppercase text-2xl font-semibold leading-[1.3rem]">{heroTranslate("subTitle")}</span>
            {/* <h1 className="text-[#3D3D3D] text-4xl lg:text-5xl font-extrabold sm:leading-[3.5rem] leading-[2.1rem]">{heroTranslate("title")}</h1> */}
            <div className="max-w-[45rem]">
              <WordsPullUp text={heroTranslate("title")} className="text-[#3D3D3D] text-4xl lg:text-5xl font-extrabold sm:leading-[3.5rem] leading-[2.1rem] uppercase" />
            </div>
            <p className="text-[#525252] leading-7 sm:w-[30rem]">{heroTranslate("description1")} <strong>{heroTranslate("description2")}</strong> {heroTranslate("description3")}</p>
            <div className="flex items-center gap-5">
              {/* <Button className='bg-primaryBg md:bg-red-600 lg:bg-blue-500 xl:bg-green-400 2xl:bg-slate-500  hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>{translate("btn")}</Button> */}
              <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>{heroTranslate("btn1")}</Button>
              <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>{heroTranslate("btn2")}</Button>
            </div>
          </div>
        </section>

        <section className="sm:h-[50rem] my-[5rem] sm:my-0 flex items-center justify-center flex-col gap-8">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[33rem] text-center sm:leading-[2.3rem]">{whyChooseTranslate("title1")}<span className="text-primaryBg">{` ${whyChooseTranslate("title2")}`}</span>?</h2>
          <div className="shadow-[0px_4px_14px_#0000001a] rounded-3xl h-max sm:h-[35rem] w-full max-w-[75rem] justify-center sm:justify-normal overflow-hidden relative flex items-center sm:px-[3rem] px-[1rem] ">
            <BenefitCards />
            <Image src={movilAliados} alt="" className="md:w-[26rem] lg:w-[35rem] absolute md:top-10 lg:top-0 -right-[5rem] hidden md:block" />
          </div>
        </section>
        {/* <section className="grid items-center justify-center justify-items-center h-[34rem]">
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
            <div className="absolute bg-white sm:top-2 top-[-3.5rem] sm:-left-[10rem] -left-[5rem] flex items-center sm:gap-5 gap-2 p-4 shadow-lg rounded-[20px]">
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
        </section> */}
        <section className="flex flex-col sm:flex-row items-center justify-evenly h-[55rem]">
          <div className="w-full sm:w-[50%] flex items-center justify-center">
            <Image src={helpPeople} className="w-[40rem]" alt="Imagen de seccion acerca de TRULIVERS" />
          </div>
          <div className="grid gap-5 ">
            <div>
              <span className="text-primaryBg uppercase sm:text-[20px] text-[16px] font-semibold">{aboutTranslate("subTitle")}</span>
              <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[31rem] text-start leading-[2.3rem]">{aboutTranslate("title1")}<span className="text-primaryBg">{` ${aboutTranslate("title2")}`}</span>?</h2>
              <p className="text-[#525252] sm:text-[18px] sm:w-[30rem]">{aboutTranslate("description")}</p>
            </div>
            <li className="text-[#525252] sm:text-[18px] sm:w-[30rem] list-disc"><strong>{aboutTranslate("title_item1")}:</strong> {aboutTranslate("description_item1")}</li>
            <li className="text-[#525252] sm:text-[18px] sm:w-[30rem] list-disc"><strong>{aboutTranslate("title_item2")}:</strong> {aboutTranslate("description_item2")}</li>
            <Button className='bg-primaryBg hover:bg-[#0B0DC2] rounded-[50px] h-[43px]'>{aboutTranslate("btn")}</Button>
          </div>
        </section>
        <section className="flex items-center mb-[4rem] flex-col justify-center gap-[3rem]">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[33rem] text-center sm:leading-[2.3rem]">{takeTranslate("title")}</h2>
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 w-full gap-7 justify-items-center items-center ">
            <Image src={uniSimon} className="max-h-[403px]" alt="Logo de la universidad simon bolivar" />
            <Image src={sena} className="max-h-[403px]" alt="Logo de Tecnoparque" />
            <Image src={corona} className="max-h-[403px]" alt="Logo de fundación corona" />
            <Image src={botnar} height={90} className="max-h-[403px]" alt="Logo de fundación Botnar" />
            <Image src={apalanca} className="max-h-[403px]" alt="Logo de Appalanca" />
            <Image src={colombiaciena} className="max-h-[403px]" alt="Logo de ministerio de ciencias de colombia" />
            <Image src={salamanca} className="max-h-[403px]" alt="Logo de universidad Salamanca" />
            <Image src={autonoma} height={90} className="max-h-[403px]" alt="Logo de universidad autonoma" />
            <Image src={emprende} height={90} className="max-h-[403px]" alt="Logo de Emprende Uninorte" />
            <Image src={italiano} height={90} className="max-h-[403px]" alt="Logo de Ponte Italiano" />
          </div>
        </section>
        <section className="flex flex-col gap-7 items-center">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[31rem] leading-[2.3rem] text-center">{testimonialsTranslate("title")}</h2>
          <div className="grid grid-cols-3">
            <video controls src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Video%20de%20WhatsApp%202023-09-23%20a%20las%2014.30.02.mp4?alt=media&token=b6f538e2-565c-41fc-bd31-d82794245dc8"></video>
            <video controls src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Video%20de%20WhatsApp%202023-09-23%20a%20las%2012.49.53.mp4?alt=media&token=486a82cd-0592-472b-b33e-f0197a5f31f8"></video>
            <video controls src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Video%20de%20WhatsApp%202023-09-23%20a%20las%2012.50.33.mp4?alt=media&token=e1fd610f-8420-4b56-9ecc-f559065754ef"></video>
          </div>
          {/* <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map(item => (
              <div key={item} className="shadow-[0px_4px_14px_#0000001a] rounded-2xl p-5 py-7 justify-center sm:justify-normal overflow-hidden relative flex flex-col  items-center">
                <span>María Rodríguez</span>
                <p>La prueba psico-orientadora me ayudó a aclarar mis ideas y ahora estudio lo que realmente me apasiona.</p>
              </div>
            ))}
          </div> */}
        </section>
        <section className="flex flex-col gap-8 justify-center sm:min-h-[20rem] py-9">
          <h2 className="font-semibold text-2xl text-[#3D3D3D] sm:w-[31rem] text-start leading-[2.3rem] uppercase">{askedQuestionsTranslate("title")}</h2>
          <div className="flex items-start flex-col sm:flex-row justify-center gap-3">
            <div className="flex flex-col gap-3">
              <Fasq data={{
                title: askedQuestionsTranslate("Fasq1"),
                anwer: askedQuestionsTranslate("Anwer1"),
                number: "01"
              }} />
              <Fasq data={{
                title: askedQuestionsTranslate("Fasq2"),
                anwer: askedQuestionsTranslate("Anwer2"),
                number: "02"
              }} />
            </div>
            <div className="flex flex-col gap-3">
              <Fasq data={{
                title: askedQuestionsTranslate("Fasq3"),
                anwer: askedQuestionsTranslate("Anwer3"),
                number: "03"
              }} />
              <Fasq data={{
                title: askedQuestionsTranslate("Fasq4"),
                anwer: askedQuestionsTranslate("Anwer4"),
                number: "04"
              }} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}