import { motion } from "motion/react";
import { useState, useEffect } from "react";

function Reviews() {
    const [currentReview, setCurrentReview] = useState(0);
    
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Senior Developer",
            company: "TechCorp",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Prabhleen's problem-solving skills are exceptional. Their code is clean, well-documented, and always follows best practices. A pleasure to work with!",
            project: "E-commerce Platform"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Project Manager",
            company: "StartupXYZ",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Outstanding attention to detail and excellent communication skills. Prabhleen delivered our project ahead of schedule with zero bugs.",
            project: "Task Management App"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "UI/UX Designer",
            company: "DesignStudio",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Working with Prabhleen was amazing! They understood the design requirements perfectly and brought our vision to life with beautiful, responsive code.",
            project: "Portfolio Website"
        },
        {
            id: 4,
            name: "David Kim",
            role: "CTO",
            company: "InnovateLab",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Prabhleen's algorithmic thinking and React expertise helped us build a scalable solution. Highly recommend for any development project!",
            project: "Data Visualization Dashboard"
        },
        {
            id: 5,
            name: "Lisa Thompson",
            role: "Product Owner",
            company: "AppVenture",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
            rating: 5,
            text: "Professional, reliable, and incredibly talented. Prabhleen consistently exceeded our expectations and delivered high-quality solutions.",
            project: "Mobile Web App"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prev) => (prev + 1) % reviews.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [reviews.length]);

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span
                key={i}
                className={`text-lg ${
                    i < rating ? 'text-yellow-400' : 'text-gray-600'
                }`}
            >
                ⭐
            </span>
        ));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-6"
            >
                <h3 className="text-2xl font-bold text-white mb-2">
                    💬 Client Reviews
                </h3>
                <p className="text-gray-300 text-sm">
                    What people say about working with me
                </p>
            </motion.div>

            {/* Review Carousel */}
            <div className="relative overflow-hidden rounded-xl bg-gray-900/30 p-6">
                <motion.div
                    key={currentReview}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    {/* Avatar */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-4"
                    >
                        <img
                            src={reviews[currentReview].avatar}
                            alt={reviews[currentReview].name}
                            className="w-16 h-16 rounded-full mx-auto border-2 border-white/20 shadow-lg"
                        />
                    </motion.div>

                    {/* Rating */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mb-4"
                    >
                        <div className="flex justify-center space-x-1">
                            {renderStars(reviews[currentReview].rating)}
                        </div>
                    </motion.div>

                    {/* Review Text */}
                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-gray-200 italic text-lg leading-relaxed mb-4"
                    >
                        "{reviews[currentReview].text}"
                    </motion.blockquote>

                    {/* Reviewer Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="space-y-1"
                    >
                        <div className="font-bold text-white text-lg">
                            {reviews[currentReview].name}
                        </div>
                        <div className="text-blue-400 text-sm">
                            {reviews[currentReview].role} at {reviews[currentReview].company}
                        </div>
                        <div className="text-gray-400 text-xs">
                            Project: {reviews[currentReview].project}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    {reviews.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentReview
                                    ? 'bg-blue-500 scale-125'
                                    : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10"
            >
                <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                        {reviews.length}
                    </div>
                    <div className="text-xs text-gray-300">Reviews</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                        5.0
                    </div>
                    <div className="text-xs text-gray-300">Avg Rating</div>
                </div>
                <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                        100%
                    </div>
                    <div className="text-xs text-gray-300">Satisfaction</div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Reviews;
