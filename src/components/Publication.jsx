import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Publication = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    return (
        <section id="publication" className="min-h-screen py-32 px-6 md:px-16 lg:px-32 bg-transparent pt-28 relative">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-24 text-center uppercase tracking-tight relative z-10"
            >
                Publication
            </motion.h2>

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-xl relative overflow-hidden group"
                >
                    {/* Decorative gradient line */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

                    <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Journal Paper</span>
                                <span className="text-gray-500 text-sm font-mono">2023</span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-blue-700 transition-colors duration-300">
                                Improved search and rescue optimization based load balancing scheme of CCTV footage on edge computing environment
                            </h3>

                            <div className="mb-8">
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Proposed <span className="font-semibold">ISROLBS-ECE</span>, a novel load balancing scheme for edge computing that utilizes a hybrid chaotic search and rescue optimization algorithm.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    This research addresses the critical challenge of processing high-volume CCTV footage in real-time. By effectively distributing offloading tasks to neighboring edge servers, the proposed scheme significantly reduces latency and prevents server overload, outperforming existing methods in efficiency and responsiveness for critical applications like search and rescue operations.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://onlinelibrary.wiley.com/doi/10.1002/cpe.7556"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Read on Wiley
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Sidebar / Metadata */}
                        <div className="w-full md:w-64 flex-shrink-0 bg-white/50 rounded-2xl p-6 border border-white/40">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Published In</h4>
                            <p className="font-serif text-lg text-gray-900 italic mb-6">
                                Concurrency and Computation: Practice and Experience
                            </p>

                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Publisher</h4>
                            <p className="font-semibold text-gray-800 mb-6">Wiley</p>

                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Authors</h4>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li>P. Deshpande</li>
                                <li>S. Dinesh</li>
                                <li>A.G. Kothari</li>
                                <li className="font-bold text-black">Apurva Umredkar</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Publication
