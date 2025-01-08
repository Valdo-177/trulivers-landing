"use client"
import React from 'react'
import logo1 from '@/assets/img/logoAliados1.svg'
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Image from 'next/image';

const Carrucel = () => {
    const images = [
        logo1,
        logo1,
        logo1,
        logo1,
        logo1,
        logo1,
    ];

    const FAST_DURATION = 25;
    const SLOW_DURATION = 75;

    const [duration, setDuration] = useState(FAST_DURATION);
    let [ref, { width }] = useMeasure();

    const xTranslation = useMotionValue(0);

    const [mustFinish, setMustFinish] = useState(false);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        let controls;
        let finalPosition = -width / 2 - 8;

        if (mustFinish) {
            controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
                ease: "linear",
                duration: duration * (1 - xTranslation.get() / finalPosition),
                onComplete: () => {
                    setMustFinish(false);
                    setRerender(!rerender);
                },
            });
        } else {
            controls = animate(xTranslation, [0, finalPosition], {
                ease: "linear",
                duration: duration,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0,
            });
        }

        return controls?.stop;
    }, [rerender, xTranslation, duration, width]);

    return (
        <div className="my-6 h-[2rem] relative">
            <div className='w-[5rem] absolute z-10 h-full bg-gradient-to-r left-0 from-white to-transparent'></div>
            <div className='w-[5rem] absolute z-10 h-full bg-gradient-to-l right-0 from-white to-transparent'></div>
            <motion.div
                className="absolute left-0 flex gap-4"
                style={{ x: xTranslation }}
                ref={ref}
                onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                }}
                onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                }}
            >
                {[...images, ...images].map((item, idx) => (
                    <Image src={item} key={idx} alt=''/>
                ))}
            </motion.div>
        </div>
    )
}

export default Carrucel