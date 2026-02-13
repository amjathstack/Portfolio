"use client"
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import stream from "../../public/stream.svg"
import github from "../../public/github.svg"

export default function ProjectDetailsCard({ onClose, show, data }) {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = "hidden"
        }
        return () => document.body.style.overflow = ""
    }, [show]);

    return (
        <div className="absolute flex sm:p-5 items-center justify-center top-0 left-0 w-full h-[100vh] bg-white/25 z-70 fixed">
            <div className="relative px-5 w-full border rounded-[10px] border-gray-200 p-2 bg-white max-w-100 sm:max-w-120 min-h-90 max-h-200">
                <X onClick={() => onClose(null)} className="absolute cursor-pointer top-4 right-4 text-gray-600" />
                <h1 className="text-[13px] sm:text-[16px] font-semibold text-gray-600 mt-5 py-3">{data.title}</h1>
                <p className="text-[12px] sm:text-[14px] text-gray-600 pr-5">{data.description}</p>
                <h1 className="mt-3 text-gray-800 text-[13px] sm:text-[15px]">Key Features:</h1>
                <ul className="mt-1 list-disc list-inside">
                    {data.features.map((item, index) => (
                        <li className="text-gray-600 text-[12px] sm:text-[13px]" key={index}>{item}</li>
                    ))}
                </ul>
                <h1 className="mt-3 text-gray-800 text-[13px] sm:text-[15px]">Tech Stack:</h1>
                <ul className="mt-1 list-disc list-inside">
                    {data.techStack.map((item, index) => (
                        <li className="text-gray-600 text-[12px] sm:text-[13px]" key={index}>{item}</li>
                    ))}
                </ul>
                <div className="w-full flex gap-5 mt-6 sm:mt-12 mb-6">
                    <a className="w-full flex items-center justify-center gap-2 text-[12px] sm:text-[14px] border border-indigo-600 text-center p-2 rounded-[5px] text-indigo-600" target="_blank" href={data.githubLink}><Image src={github} alt="stream" className="w-6 h-6" width={1000} height={1000} /> Github Link</a>
                    <a className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-[12px] sm:text-[14px] text-center p-2 rounded-[5px] text-white" target="_blank" href={data.livePreviewLink}><Image src={stream} alt="stream" className="w-5 h-5" width={1000} height={1000} /> Live Preview</a>
                </div>
            </div>
        </div>
    )
}