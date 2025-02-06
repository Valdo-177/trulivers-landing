"use client"
import { useState } from "react";
import { motion } from "framer-motion";

const Fasq = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => setIsOpen(!isOpen);

    return (
        <motion.div
            className={`rounded-2xl p-4 shadow-md ${isOpen ? "bg-[#1e20dc2e]" : "bg-white"
                } w-full sm:w-[30rem] flex items-center justify-center flex-col`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <div
                className="flex items-center justify-between cursor-pointe w-full cursor-pointer"
                onClick={toggleAccordion}
            >
                <div className="flex items-center gap-4">
                    <div
                        className={`flex items-center justify-center w-10 h-10 transition-all ease-in-out duration-600 rounded-full text-lg font-bold ${!isOpen ? "bg-primaryBg text-white" : "bg-gray-100 text-gray-700"
                            }`}
                    >
                        04
                    </div>

                    <h3
                        className="text-xl font-medium text-[#1E242C]"
                        // className={`text-xl font-medium ${isOpen ? "text-primaryBg" : "text-gray-900"
                            // }`}
                    >
                        ¿Cómo funciona el test vocacional?
                    </h3>
                </div>
                <motion.span
                    className={`text-xl font-bold ${isOpen ? "text-primaryBg" : "text-gray-500"
                        }`}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {isOpen ? "×" : "+"}
                </motion.span>
            </div>

            <motion.div
                className={`${isOpen ? "mt-4" : "mt-0"} text-gray-700`}
                animate={{ opacity: isOpen ? 1 : 0, height: !isOpen ? 0 : "auto" }}
                transition={{ duration: 0.3 }}
            >
                <p className="h-full overflow-hidden">
                    El test es una herramienta gratuita y fácil de usar. Una vez
                    registrado, puedes completarlo en minutos y recibir recomendaciones
                    personalizadas.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Fasq