import { FlipWords } from "./flipwords";
import { motion } from "motion/react";

const HeroText = () => {
    const words = ["Minimalist", "Modern", "Scalable"];
    const variants = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
    };
    return (
        <div className="z-10 mt-20 text-center md:mt-0 md:text-left rounded-3xl bg-clip-text overflow-hidden">
            {/* Desktop View */}
            <div className="flex-col hidden md:flex c-space">
                <motion.p
                    className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-semibold text-[#d7d9e1]"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 2.4 }}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#57db96]" />
                    Available for opportunities
                </motion.p>
                <motion.h1
                    className="text-4xl font-medium flex"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 2.7 }}
                >
                   <p className="text-[#fdfdfd]">Hi I'm </p><p className="text-[#e7d7b1] indent-3">Saad Ansari</p>
                </motion.h1>
                <div className="flex flex-col items-start">
                    <motion.p
                        className="text-4xl font-extralight text-[#a9adbd]"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2.9 }}
                    >
                        A developing engineer<br /> crafting thoughtful
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 3.2 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-bold text-[#e7d7b1] text-5xl"
                        />
                    </motion.div>
                    <motion.p
                        className="text-4xl font-medium text-[#fdfdfd]"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 3.5 }}
                    >
                        Web Solutions
                    </motion.p>
                    <motion.div
                        className="mt-8 flex gap-3"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 3.8 }}
                    >
                        <a href="#work" className="rounded-md bg-[#e7d7b1] px-5 py-3 text-sm font-semibold text-[#121725] transition hover:bg-white">
                            View projects
                        </a>
                        <a href="#contact" className="rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#e7d7b1] hover:text-[#e7d7b1]">
                            Contact me
                        </a>
                    </motion.div>
                </div>
            </div>
            {/* Mobile View */}
            <div className="flex flex-col items-center space-y-4 md:hidden mt-16 px-4">
                <motion.p
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-semibold text-[#d7d9e1]"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.7 }}
                >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#57db96]" />
                    Available for opportunities
                </motion.p>
                <motion.h1
                    className="text-3xl font-medium text-[#fdfdfd]"
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1 }}
                >
                   Hi,I am<p className="text-[#e7d7b1] indent-3">Saad Ansari</p>
                </motion.h1>
                <div className="space-y-2">
                    <motion.p
                        className="text-3xl font-bold text-[#fdfdfd]"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                    >
                        Building
                    </motion.p>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <FlipWords
                            words={words}
                            className="font-bold text-[#e7d7b1] text-3xl"
                        />
                    </motion.div>
                    <motion.p
                        className="text-3xl font-bold text-[#fdfdfd]"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.8 }}
                    >
                        Web Applications
                    </motion.p>
                    <motion.div
                        className="mt-7 flex justify-center gap-3"
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 2.1 }}
                    >
                        <a href="#work" className="rounded-md bg-[#e7d7b1] px-4 py-3 text-sm font-semibold text-[#121725]">
                            View projects
                        </a>
                        <a href="#contact" className="rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white">
                            Contact me
                        </a>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroText;