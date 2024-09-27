"use client"; // Asegúrate de que este componente esté marcado como client-side

import Image from "next/image";
import React from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
// Asegúrate de tener heroicons instalado

export default function Header() {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md border-b border-gray-200">
            {/* Logo */}
            <div className="flex items-center">
                <Image
                    src="/images/logo.png"
                    alt="Logo del Real Madrid"
                    width={100}
                    height={100}
                />
            </div>

            {/* Menú */}
            <nav className="hidden lg:flex space-x-4">
                <a
                    href="#inicio"
                    className="text-[#2115ab] font-RMNeue font-semibold rounded-lg p-2 leading-[19.2px] hover:bg-gray-200"
                >
                    Inicio
                </a>
                <a
                    href="https:google.com"
                    className="text-[#2115ab] font-RMNeue font-semibold rounded-lg p-2 leading-[19.2px] hover:bg-gray-200"
                >
                    Historia
                </a>
                <a
                    href="#goleadores"
                    className="text-[#2115ab] font-RMNeue font-semibold rounded-lg p-2 leading-[19.2px] hover:bg-gray-200"
                >
                    Goleadores
                </a>
                <a
                    href="#estadio"
                    className="text-[#2115ab] font-RMNeue font-semibold rounded-lg p-2 leading-[19.2px] hover:bg-gray-200"
                >
                    Estadio
                </a>
                <a
                    href="#fichajes"
                    className="text-[#2115ab] font-RMNeue font-semibold rounded-lg p-2 leading-[19.2px] hover:bg-gray-200"
                >
                    Fichajes Recientes
                </a>
                <a
                    href="#champions"
                    className="text-[#2115ab] font-RMNeue font-semibold rounded-lg p-2 leading-[19.2px] hover:bg-gray-200"
                >
                    Champions
                </a>
                <a
                    href="#blog"
                    className="text-[#2115ab] font-RMNeue font-semibold rounded-lg p-2 leading-[19.2px] hover:bg-gray-200"
                >
                    Blog
                </a>
            </nav>

            {/* Menú desplegable para móviles */}
            <Popover className="relative lg:hidden">
                <Popover.Button className="flex items-center justify-center text-[#2115ab] font-RMNeue font-semibold rounded-lg p-2 leading-[19.2px] hover:bg-gray-200">
                    <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>

                <Popover.Panel className="fixed left-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                    <div className="flex flex-col p-4 space-y-2">
                        <a
                            href="#inicio"
                            className="text-[#2115ab] hover:bg-gray-200 w-full text-center p-3 rounded-md"
                        >
                            Inicio
                        </a>
                        <a
                            href="https:google.com"
                            className="text-[#2115ab] hover:bg-gray-200 w-full text-center p-3 rounded-md"
                        >
                            Historia
                        </a>
                        <a
                            href="#goleadores"
                            className="text-[#2115ab] hover:bg-gray-200 w-full text-center p-3 rounded-md"
                        >
                            Goleadores
                        </a>
                        <a
                            href="#estadio"
                            className="text-[#2115ab] hover:bg-gray-200 w-full text-center p-3 rounded-md"
                        >
                            Estadio
                        </a>
                        <a
                            href="#fichajes"
                            className="text-[#2115ab] hover:bg-gray-200 w-full text-center p-3 rounded-md"
                        >
                            Fichajes Recientes
                        </a>
                        <a
                            href="#champions"
                            className="text-[#2115ab] hover:bg-gray-200 w-full text-center p-3 rounded-md"
                        >
                            Champions
                        </a>
                        <a
                            href="#blog"
                            className="text-[#2115ab] hover:bg-gray-200 w-full text-center p-3 rounded-md"
                        >
                            Blog
                        </a>
                    </div>
                </Popover.Panel>
            </Popover>

            {/* Logos de patrocinadores */}
            <div className="flex space-x-4">
                <img
                    src="/images/adidas_gray.png"
                    alt="Logo de Adidas"
                    width={50}
                    height={50}
                />
                <Image
                    src="/images/emirates_gray.png"
                    alt="Logo de Emirates"
                    width={50}
                    height={50}
                />
            </div>
        </header>
    );
}
