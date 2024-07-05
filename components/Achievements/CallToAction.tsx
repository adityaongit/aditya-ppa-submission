"use client";

import {
    Helping1,
    Helping2,
    Helping3,
    Helping4,
} from "../../public/assets/icons";

import React from "react";
import GoalTile from "./GoalTile";
import CountUp from "react-countup";

const data = [
    {
        icon: Helping1,
        title: 2245341,
        description: "Members",
    },
    {
        icon: Helping3,
        title: 46328,
        description: "Clubs",
    },
    {
        icon: Helping2,
        title: 828867,
        description: "Event Bookings",
    },
    {
        icon: Helping4,
        title: 1926436,
        description: "Payments",
    },
];

const Achievements: React.FC = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-4 sm:my-6 md:my-9 p-4 sm:p-8 md:p-12 bg-silver dark:bg-darkBackground">
        <div className="flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:ml-8 xl:ml-28 py-4 sm:py-6 md:py-8 h-full">
            <div>
                <h3 className="text-xl sm:text-2xl dark:text-[#D4D4D4] md:text-3xl lg:text-4xl font-semibold !leading-normal text-dark-grey">
                    Helping a local <br />
                    <span className="text-primary">
                        business reinvent itself
                    </span>
                </h3>
            </div>
            <p className="mt-2 text-sm sm:text-base font-medium text-grey-900 dark:text-[#888888]">
                We reached here with our hard work and dedication
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 lg:mt-0 ">
            {data.map((tile, key) => (
                <GoalTile
                    key={key}
                    icon={tile.icon}
                    title={<CountUp end={tile.title} duration={2.75} />}
                    description={tile.description}
                />
            ))}
        </div>
    </div>
);

export default Achievements;
