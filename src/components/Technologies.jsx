import React from 'react'
import { FaReact, FaBootstrap, FaShopify, FaWordpress, FaPython } from "react-icons/fa"; // React, Bootstrap, Shopify, WordPress, Django (using Python icon as placeholder)
import { SiJavascript, SiTailwindcss, SiDjango } from "react-icons/si"; // JavaScript, Tailwind CSS, Django


function Technologies() {
    return (
        <>
            <div  
              className="techmain bg-zinc-200 py-9">
                <div className="techicons flex-wrap justify-center items-center gap-4 flex">
                    <div className="firsticon rounded-2xl border-[1px] bg-zinc-100 border-neutral-800 p-4 text-5xl">
                        <SiDjango className="text-[#092E20]" /> {/* Django green */}
                    </div>
                    <div className="firsticon rounded-2xl border-[1px] bg-zinc-100 border-neutral-800 p-4 text-5xl">
                        <FaReact className="text-[#61DAFB]" /> {/* React cyan */}
                    </div>
                    <div className="firsticon rounded-2xl border-[1px] bg-zinc-100 border-neutral-800 p-4 text-5xl">
                        <SiJavascript className="text-[#F7DF1E]" /> {/* JavaScript yellow */}
                    </div>
                    <div className="firsticon rounded-2xl border-[1px] bg-zinc-100 border-neutral-800 p-4 text-5xl">
                        <SiTailwindcss className="text-[#38BDF8]" /> {/* Tailwind blue */}
                    </div>
                    <div className="firsticon rounded-2xl border-[1px] bg-zinc-100 border-neutral-800 p-4 text-5xl">
                        <FaBootstrap className="text-[#7952B3]" /> {/* Bootstrap purple */}
                    </div>
                    <div className="firsticon rounded-2xl border-[1px] bg-zinc-100 border-neutral-800 p-4 text-5xl">
                        <FaWordpress className="text-[#21759B]" /> {/* WordPress blue */}
                    </div>
                    <div className="firsticon rounded-2xl border-[1px] bg-zinc-100 border-neutral-800 p-4 text-5xl">
                        <FaShopify className="text-[#95BF47]" /> {/* Shopify green */}
                    </div>
                </div>

            </div>
            <div className="extra h-screen w-full bg-zinc-500"></div>
        </>
    )
}

export default Technologies
