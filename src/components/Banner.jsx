
export default function Banner({ image, alt = "banner-image", highlightText, text }) {
    if (!image) return null

    const style ={backdropFilter:"blur(2px)"}
    return (
        <div className="relative w-full mt-6">
            <img
                src={image}
                alt={alt}
                className="w-full h-60 object-cover rounded-xl shadow-md"
            />
            <div style={style} className="absolute inset-0  flex items-center justify-center bg-black/30 rounded-xl">
                <div className="mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl  text-[var(--color-yellow-500)] font-bold my-8 inline-block relative">
                        {highlightText && <span className="text-[var(--color-primary)]">{highlightText} </span>} 
                        {text && text}
                        <div className="w-20 md:w-32 h-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] absolute -bottom-4 right-0 rounded-full"></div>
                    </h2>
                </div>
            </div>
        </div>
    )
}
