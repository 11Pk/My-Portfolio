import { motion } from "motion/react";
import { useState, useEffect } from "react";

function LeetCodeStats() {
    const [stats, setStats] = useState({
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        acceptanceRate: 0,
        ranking: 0
    });

    const targetStats = {
        totalSolved: 229,
        easySolved: 67,
        mediumSolved: 146,
        hardSolved: 16,
        acceptanceRate: 46,
        ranking: 580045
    };

    useEffect(() => {
        const animateStats = () => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepDuration = duration / steps;

            let currentStep = 0;
            const interval = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;
                
                setStats({
                    totalSolved: Math.floor(targetStats.totalSolved * progress),
                    easySolved: Math.floor(targetStats.easySolved * progress),
                    mediumSolved: Math.floor(targetStats.mediumSolved * progress),
                    hardSolved: Math.floor(targetStats.hardSolved * progress),
                    acceptanceRate: Math.floor(targetStats.acceptanceRate * progress),
                    ranking: Math.floor(targetStats.ranking * progress)
                });

                if (currentStep >= steps) {
                    clearInterval(interval);
                    setStats(targetStats);
                }
            }, stepDuration);

            return () => clearInterval(interval);
        };

        const timer = setTimeout(animateStats, 500);
        return () => clearTimeout(timer);
    }, []);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'text-green-400';
            case 'Medium': return 'text-yellow-400';
            case 'Hard': return 'text-red-400';
            default: return 'text-white';
        }
    };

    const getDifficultyBg = (difficulty) => {
        switch (difficulty) {
            case 'Easy': return 'bg-green-500/20 border-green-500/30';
            case 'Medium': return 'bg-yellow-500/20 border-yellow-500/30';
            case 'Hard': return 'bg-red-500/20 border-red-500/30';
            default: return 'bg-gray-500/20 border-gray-500/30';
        }
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
                    🧮 LeetCode Progress
                </h3>
                <p className="text-gray-300 text-sm">
                    Algorithmic problem-solving journey
                </p>
            </motion.div>

            {/* Total Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                        {stats.totalSolved}
                    </div>
                    <div className="text-sm text-gray-300">Problems Solved</div>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <div className="text-3xl font-bold text-purple-400 mb-1">
                        {stats.acceptanceRate}%
                    </div>
                    <div className="text-sm text-gray-300">Acceptance Rate</div>
                </motion.div>
            </div>

            {/* Difficulty Breakdown */}
            <div className="space-y-3 mb-6">
                {[
                    { difficulty: 'Easy', solved: stats.easySolved, total: 100 },
                    { difficulty: 'Medium', solved: stats.mediumSolved, total: 200 },
                    { difficulty: 'Hard', solved: stats.hardSolved, total: 50 }
                ].map((item, index) => (
                    <motion.div
                        key={item.difficulty}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className={`p-3 rounded-lg border ${getDifficultyBg(item.difficulty)}`}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <span className={`font-semibold ${getDifficultyColor(item.difficulty)}`}>
                                {item.difficulty}
                            </span>
                            <span className="text-white text-sm">
                                {item.solved}/{item.total}
                            </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                                className={`h-2 rounded-full ${
                                    item.difficulty === 'Easy' ? 'bg-green-500' :
                                    item.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                                }`}
                                initial={{ width: 0 }}
                                animate={{ width: `${(item.solved / item.total) * 100}%` }}
                                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Ranking */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-center pt-4 border-t border-white/10"
            >
                <div className="text-lg font-bold text-orange-400 mb-1">
                    #{stats.ranking.toLocaleString()}
                </div>
                <div className="text-sm text-gray-300">Global Ranking</div>
            </motion.div>

            {/* LeetCode Link */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-center mt-4"
            >
                <a
                    href="https://leetcode.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    <span className="mr-2">🔗</span>
                    View Profile
                </a>
            </motion.div>
        </motion.div>
    );
}

export default LeetCodeStats;
