export default function Header({ title }) {
    return (
        <div className="flex justify-center items-center text-center gap-2">
            <h1 className="text-[30px] text-black/80">
                {title}<span className="text-[43px] text-indigo-600">.</span>
            </h1>
        </div>
    )
}