import { mySocials } from "../constants";
const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-[#a9adbd] c-space bg-#0f121a">
            <div className="mb-4 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
            <p>Open to internships and junior developer roles.</p>
            <div className="flex gap-3">
                {mySocials.map((social, index) => (
                    <a href={social.href} key={index}>
                        <img src={social.icon} className="w-5 h-5" alt={social.name} />
                    </a>
                ))}
            </div>
            <p>© 2026 Saad Ansari.</p>
        </section>
    );
};

export default Footer;