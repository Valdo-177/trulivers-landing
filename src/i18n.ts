import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'es'] as const; // `as const` para inferir un tipo de tuple

type Locale = (typeof locales)[number]; // Tipo específico basado en `locales`

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Validar si el locale es uno de los permitidos
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});




// import {notFound} from 'next/navigation';
// import {getRequestConfig} from 'next-intl/server';
 
// // Can be imported from a shared config
// const locales = ['en', 'es'];
 
// export default getRequestConfig(async ({locale}) => {
//   // Validate that the incoming `locale` parameter is valid
//   if (!locales.includes(locale as any)) notFound();
 
//   return {
//     messages: (await import(`../messages/${locale}.json`)).default
//   };
// });