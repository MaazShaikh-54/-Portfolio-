"use client";

import * as React from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`flex items-center justify-center mb-10 border-b border-dashed border-gray-400 shadow-lg shadow-[#78b86a]/35 sticky top-0 z-50 transition-colors duration-300 rounded-lg ${scrolled ? "bg-[#171717]" : "bg-transparent"
                } lg:w-[65%] lg:mx-auto lg:rounded-lg lg:p-2`}
        >
            <NavigationMenu className="flex mx-auto">
                <NavigationMenuList>
                    {["skills", "work", "projects", "contact"].map((item) => (
                        <NavigationMenuItem key={item}>
                            <NavigationMenuLink
                                asChild
                                className={`${navigationMenuTriggerStyle()} font-bold text-white pb-2 hover:text-[#78b86a] active:text-[#78b86a] lg:text-lg lg:font-semibold`}
                            >
                                <a href={`#${item}`} className="hover:underline capitalize">
                                    {item}
                                </a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
