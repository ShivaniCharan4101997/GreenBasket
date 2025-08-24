
export default function Loading({ rootClass }) {
    return (
        <div className={`flex flex-col gap-7 justify-center items-center p-5 ${rootClass}`}>
            <div className="flex justify-center items-center gap-4.5">
                <div className="h-[80px] flex justify-center items-center w-[80px] rounded-full  bg-green-400">
                    <div className="w-[30px] h-[30px] bg-black rounded-full animate-[movePupil_2s_infinite_ease-in-out] transform origin-center"></div>
                </div>
                <div className="h-[80px] flex justify-center items-center w-[80px]  rounded-full  bg-green-400">
                    <div className="w-[30px] h-[30px] bg-black rounded-full animate-[movePupil_2s_infinite_ease-in-out] transform origin-center">
                    </div>
                </div>
            </div>
        </div>
    );
}