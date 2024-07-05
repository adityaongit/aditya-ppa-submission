"use client";

import Button from "./Button";

const Demo = () => {
    return (
        <section className="mt-20 bg-silver py-10 sm:mt-40 md:py-20">
            <div className="container px-5">
                <h2 className="mx-auto max-w-[700px] dark:text-[#D4D4D4] text-center text-3xl font-bold !leading-tight text-black sm:text-4xl md:text-5xl">
                    Let&apos;s try to our agency and get the best experience
                </h2>
                <div className="flex justify-center">
                    <Button text="Get a Demo" isHaveArrow />
                </div>
            </div>
        </section>
    );
};

export default Demo;
