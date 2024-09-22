import React from 'react'
import AppBar from './app_bar'
import { motion } from 'framer-motion'
import Animations from './utils/item'

const Presentation = () => {
    return (
        <section id='' className="relative flex justify-center bg-cover overflow-hidden">
            <div className='w-full flex justify-center bg-red-100'>
                <div
                    style={{
                        backgroundImage: "radial-gradient(#000000 1px, transparent 0)",
                        backgroundSize: "60px 60px"
                    }}
                    className='w-full flex flex-col items-center text-red-900'>
                    <AppBar></AppBar>
                    <div

                        className='max w-full flex max-md:flex-col max-md:items-center md:justify-between'>
                        <div className=' p-6 space-y-5 md:space-y-10'>
                            <div className="max space-y-3">
                                <motion.h1
                                    variants={Animations.bottomToTop({ duration: 0.7 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className="leading-relaxed text-3xl md:text-5xl font-bold font-jost">Faites vous former par CIAB dans les  <motion.span className='text-red-700'>metiers de l'avenir</motion.span> </motion.h1>

                            </div>
                            <div className=" max flex  flex-wrap max-sm:flex-wrap">
                                <motion.p
                                    variants={Animations.bottomToTop({ duration: 2.2 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className="max-w-[400px]">
                                    Transformez vos ambitions en compétences digitales grâce à nos formations, pour réussir dans un monde en pleine transformation.
                                </motion.p>
                                <motion.a href='#formations'
                                    variants={Animations.scale({ duration: 2.5 })}
                                    initial="hidden"
                                    whileInView="show"
                                    className=" text-red-800 hover:text-white uppercase font-semibold
                                    my-3   p-[2px]
                                    hover:bg-red-800 border border-red-800 
                                  
                                     "><div className='h-full w-full
                                     px-6 py-4
                                      border border-red-500 '>
                                        nos formations
                                    </div>
                                </motion.a>
                            </div>
                        </div>
                        <motion.img
                            variants={Animations.leftToRight({ duration: 0.9, inverse: true })}
                            initial="hidden"
                            whileInView="show"
                            src="/etudiant.png" alt="" className='h-[400px]' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Presentation