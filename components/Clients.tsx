"use client";

import Image from "next/image";
import {
    LogoClient1,
    LogoClient2,
    LogoClient3,
    LogoClient4,
    LogoClient5,
    LogoClient6,
    LogoClient7,
} from "../public/assets/icons";

const Clients = () => {
    return (
        <section className="container mt-10 px-5">
            <h3 className="text-center text-2xl font-semibold text-dark-grey sm:text-3xl md:text-4xl dark:text-white">
                Our Clients
            </h3>
            <p className="mt-2 text-center text-sm text-grey sm:text-base dark:text-[#888888]">
                We have been working with some Fortune 500+ clients
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-20 md:grid md:grid-cols-7 md:justify-items-center md:gap-10">
                <Image src={LogoClient1} alt="logo-client" />
                <Image src={LogoClient2} alt="logo-client" />
                <Image src={LogoClient3} alt="logo-client" />
                <Image src={LogoClient4} alt="logo-client" />
                <Image src={LogoClient5} alt="logo-client" />
                <Image src={LogoClient6} alt="logo-client" />
                <Image src={LogoClient7} alt="logo-client" />
            </div>
        </section>
    );
};

export default Clients;
