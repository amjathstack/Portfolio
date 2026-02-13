import Image from "next/image"

export default function ProjectCard({ data, onClick }) {
    return (
        <div onClick={onClick} className="cursor-pointer max-w-100 lg:max-w-85 hover:-translate-y-0.5 transition duration-200">
            <Image
                className="rounded-xl"
                src={data.image}
                alt="Better invoicing"
            />
            <h1 className="text-sm text-base font-semibold text-slate-700 mt-4">
                {data.title}
            </h1>
        </div>
    )
}