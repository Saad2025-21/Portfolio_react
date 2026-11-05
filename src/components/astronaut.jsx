import { motion } from "motion/react";

const Astro = () => {
    return (
        <div className="relative hidden h-full min-h-[30rem] items-center justify-center md:flex pointer-events-none">
            <motion.div
                className="animate-[float_5s_ease-in-out_infinite] grid h-[min(32vw,420px)] w-[min(32vw,420px)] place-items-center rounded-full
                bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),rgba(255,255,255,0.03))]
                border border-[rgba(231,215,177,0.25)]
                shadow-[0_0_40px_rgba(231,215,177,0.25),inset_0_0_20px_rgba(255,255,255,0.1)]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.3, duration: 2 }}
            >
                <img
                    src="../assets/astronaut.png"
                    alt="Floating astronaut"
                    className="relative bottom-[22px] left-[12px] w-[105%] -scale-x-100 drop-shadow-[0_10px_30px_rgba(239,237,237,0.93)]"
                />
            </motion.div>
        </div>
    );
}

export default Astro;



