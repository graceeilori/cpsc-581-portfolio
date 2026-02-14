"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ImageGalleryProps {
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    return (
        <>
            {/* Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((image, i) => (
                    <motion.div
                        key={i}
                        className="cursor-pointer group relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedIndex(i)}
                    >
                        <div className="aspect-[4/3] bg-neutral-300 rounded-lg overflow-hidden border border-warm-gray-light/20 group-hover:border-warm-gray-light/40 transition-all duration-300 flex items-center justify-center">
                            <span className="text-neutral-500 text-xs font-medium px-2 text-center">{image.alt}</span>
                        </div>
                        {image.caption && (
                            <p className="font-hand text-warm-gray text-xs sm:text-sm mt-2 text-center">
                                {image.caption}
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedIndex !== null && (
                <motion.div
                    className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedIndex(null)}
                >
                    <motion.div
                        className="relative max-w-4xl max-h-[85vh] w-full"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="w-full aspect-video bg-neutral-300 rounded-lg flex items-center justify-center">
                            <span className="text-neutral-500 text-lg font-medium">{images[selectedIndex].alt}</span>
                        </div>
                        {images[selectedIndex].caption && (
                            <p className="font-hand text-cream text-center mt-4 text-lg">
                                {images[selectedIndex].caption}
                            </p>
                        )}

                        {/* Navigation arrows */}
                        {selectedIndex > 0 && (
                            <button
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/40 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex(selectedIndex - 1);
                                }}
                                aria-label="Previous image"
                            >
                                ←
                            </button>
                        )}
                        {selectedIndex < images.length - 1 && (
                            <button
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center text-cream hover:bg-cream/40 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedIndex(selectedIndex + 1);
                                }}
                                aria-label="Next image"
                            >
                                →
                            </button>
                        )}

                        {/* Close button */}
                        <button
                            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-cream text-ink flex items-center justify-center text-sm font-bold shadow-md hover:scale-110 transition-transform"
                            onClick={() => setSelectedIndex(null)}
                            aria-label="Close lightbox"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
