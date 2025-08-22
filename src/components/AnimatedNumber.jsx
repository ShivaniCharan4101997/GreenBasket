import {  useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, LayoutGroup, } from "motion/react"
import clsx from 'clsx'
import { HiMinus,HiPlus } from 'react-icons/hi'
let zeroToNine = Array.from({ length: 10 }, (v, k) => k)

export default function AnimatedNumber({data, negativeCb,positiveCb}) {

    function minus() {
     negativeCb()
    }
    function add() {
      positiveCb()
    }
const BTN_CSS = 'bg-pink-500 hover:bg-pink-600 text-white h-10 w-10 flex justify-center items-center rounded-full'
    return (
        <LayoutGroup id='Framer-Num-Component'>
            <div>
                <motion.div layout
                    // style={{ fontFamily: ' "Azeret Mono", monospace' }}
                    className="flex justify-between rounded-[1000px] border-2 border-pink-300 p-0.5  items-center ">
                    <motion.button whileTap={{ scale: .9 }} onClick={minus}
                     className={BTN_CSS}><HiMinus height={24} width={24} /></motion.button>
                    <div className="flex relative text-lg font-bold items-center ">
                        {data.toString().split("").map((value, index) => <SingleNumberHolder index={index} key={index} number={data} value={value} />)}
                    </div>
                    <motion.button whileTap={{ scale: .9 }} onClick={add} 
                   className={BTN_CSS}  ><HiPlus height={24} width={24} /></motion.button>
                </motion.div>
            </div>
        </LayoutGroup >
)
}

const vars = {
    init: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

function SingleNumberHolder({ number, value, index }) {
    const [height, setHeight] = useState(null)
    const containerRef = useRef(null)
    let notANumber;

    useLayoutEffect(() => {
        if (containerRef.current) {
            const height = getComputedStyle(containerRef.current).height
            setHeight(height)
        }
    }, [])

    if (index === 0) {
        notANumber = isNaN(Number.parseInt(value))
    }
    return (<div className="relative"
        style={{ height: height || "auto", overflowY: "hidden", overflowX: "clip" }}
        ref={containerRef}>
        {notANumber && <motion.span initial="init" animate={"animate"} exit={"exit"} variants={vars} key={value}> {value}</motion.span>}
        {!notANumber && <RenderStrip index={index} value={value} eleHeight={height} />}
    </div>)
}

function RenderStrip({ eleHeight, value, index }) {
    const heightInNumber = Number.parseInt(eleHeight?.replace("px", "") || "48")
    const nagative = heightInNumber * -1
    const pos = heightInNumber
    const prev = useRef(value)

    useEffect(() => {
        prev.current = value
    }, [value])

    const diff = (prev.current) - (value)
    const dir = value > prev.current ? pos * diff * -1 : nagative * diff
    return (
        <LayoutGroup id={`${value}_${index}`}>
            <AnimatePresence mode='wait'>
                <motion.div
                    data-group={index}
                    key={`${value}_${index}`}
                    initial={{ y: dir }}
                    animate={{ y: 0 }}
                    exit={{ y: 0, transition: { duration: .1 } }}
                    transition={{ duration: .5, ease: "easeOut" }}
                    className='flex relative flex-col'>
                    {/* Negative Span*/}
                    <motion.span
                        layout key={"negative" + value} className={clsx('flex flex-col items-center absolute bottom-full left-0')}>
                        {zeroToNine.filter(val => val < value).map((val, idx) => <span
                            key={`${val}_${idx}`}>{val}</span>)}
                    </motion.span>

                    {/* Neutral */}
                    <span key={"current" + value}>{value}</span>

                    {/* Positive Span */}
                    <motion.span layout
                        key={"positive" + value} className={clsx('flex flex-col items-center absolute top-full left-0')}>
                        {zeroToNine.filter(val => val > value).map((val, idx) => <span
                            key={`${val}_${idx}`}>{val}</span>)}
                    </motion.span>

                </motion.div>
            </AnimatePresence>
        </LayoutGroup>
    )
}

