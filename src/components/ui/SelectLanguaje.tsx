"use client";

import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";
import useLanguageStore from "@/store/useLanguageStore";

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguageStore();

    return (
        <Select onValueChange={setLanguage} defaultValue={language} >
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
