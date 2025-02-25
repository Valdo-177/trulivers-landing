"use client";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import { ILanguageOption } from "@/store/language/language.interface";
import { useLanguageStore } from "@/store/language/language.store";
import { useRouter } from "next/navigation";

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguageStore();
    const router = useRouter()

    const generateNewRoute = (newLang: string, currentUrl: string) => {
        const languageAvailables = ["es", "en"];
      
        if (!languageAvailables.includes(newLang)) {
          throw new Error('El idioma debe ser "en" o "es".');
        }
      
        const url = new URL(currentUrl);
        const routeParts = url.pathname.split("/").filter((value) => value);
      
        // Asegurar que el primer segmento sea un idioma válido
        if (languageAvailables.includes(routeParts[0])) {
          routeParts[0] = newLang; // Reemplazamos el idioma actual
        } else {
          routeParts.unshift(newLang); // Si no hay idioma, lo agregamos al inicio
        }
      
        // Construir la nueva URL
        url.pathname = `/${routeParts.join("/")}`;
      
        return url.toString();
      };

    
    return (
        <Select onValueChange={(e: ILanguageOption)=>{
            console.log('e: ', e)
            console.log('toggleLanguageInUrl(e): ', window.location.href)
            router.push(generateNewRoute(e, window.location.href))
            setLanguage(e)
        }} defaultValue={language} >
            <SelectTrigger className="w-[67px]">
                <SelectValue placeholder="EN" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup >
                    <SelectItem value="es">ES</SelectItem>
                    <SelectItem value="en">EN</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
