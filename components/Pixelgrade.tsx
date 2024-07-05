"use client";

import Image from "next/image";
import { Content1 } from "../public/assets/illustrations";
import Button from "./Button";

const Pixelgrade = () => {
    return (
        <section className="container mt-10 flex flex-col items-center px-5 md:mt-20 lg:flex-row lg:gap-6">
            <Image src={Content1} alt="pixelgrade" />
            <div>
                <h3 className="text-2xl dark:text-white font-semibold !leading-normal text-dark-grey sm:text-3xl md:text-4xl">
                    The unseen of spending three <br /> years at Pixelgrade
                </h3>
                <p className="mt-4 text-sm text-grey sm:text-base dark:text-[#888888]">
                    Discover the untold stories and invaluable lessons learned
                    during a transformative three-year journey at Pixelgrade.
                    From behind-the-scenes challenges to remarkable
                    achievements, gain insights into the experiences that shaped
                    our path.
                </p>
                <Button text="Learn More" />
            </div>
        </section>
    );
};

export default Pixelgrade;
