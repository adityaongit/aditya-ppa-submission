import Image from "next/image";
import React from "react";

interface GoalTileProps {
    icon: string;
    title: React.ReactNode;
    description: string;
}

const GoalTile: React.FC<GoalTileProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col sm:flex-row items-center text-neutral-600 dark:text-gray-200 p-2 sm:p-4">
            <span className="bg-transparent mb-2 sm:mb-0 sm:mr-4">
                <Image
                    className="h-[48px] w-[48px]"
                    src={icon}
                    alt="#"
                />
            </span>
            <span className="text-center sm:text-left">
                <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-dark-grey dark:text-[#D4D4D4]">
                    {title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-grey mt-1 dark:text-[#888888]">
                    {description}
                </p>
            </span>
        </div>
    );
};

export default GoalTile;
