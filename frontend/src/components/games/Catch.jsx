import React, { useState, useEffect } from 'react';
import Basket from './Basket';
import Dumbbell from './Dumbbell';

const Catch = () => {
    const [basketX, setBasketX] = useState(35); // Center the basket in the new width
    const [dumbbells, setDumbbells] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [difficulty, setDifficulty] = useState(1);
    const [dumbbellInterval, setDumbbellInterval] = useState(1000);
    const [isDragging, setIsDragging] = useState(false);

    const gameWidth = 0.7 * window.innerWidth;

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDragging) {
                const newX = e.clientX - gameWidth / 2;
                if (newX >= 0 && newX <= gameWidth - 100) {
                    setBasketX(newX);
                }
            }
        };

        const handleTouchMove = (e) => {
            if (isDragging && e.touches.length > 0) {
                const newX = e.touches[0].clientX - gameWidth / 2;
                if (newX >= 0 && newX <= gameWidth - 100) {
                    setBasketX(newX);
                }
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchend', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isDragging, gameWidth]);

    const handleMouseDown = () => {
        setIsDragging(true);
    };

    const handleTouchStart = () => {
        setIsDragging(true);
    };

    useEffect(() => {
        const createDumbbell = () => {
            if (gameOver) return;
            const newDumbbell = {
                id: Math.random(),
                x: Math.random() * (gameWidth - 30),
                y: 0,
            };
            setDumbbells((dumbbells) => [...dumbbells, newDumbbell]);
        };
        const interval = setInterval(createDumbbell, dumbbellInterval);
        return () => clearInterval(interval);
    }, [gameOver, dumbbellInterval, gameWidth]);

    useEffect(() => {
        const updateDumbbells = () => {
            if (gameOver) return;
            setDumbbells((dumbbells) =>
                dumbbells.map((dumbbell) => ({
                    ...dumbbell,
                    y: dumbbell.y + 5,
                }))
            );
        };
        const interval = setInterval(updateDumbbells, 50);
        return () => clearInterval(interval);
    }, [gameOver]);

    useEffect(() => {
        const handleCatch = () => {
            setDumbbells((dumbbells) =>
                dumbbells.filter((dumbbell) => {
                    if (
                        dumbbell.y > 350 &&
                        dumbbell.x > basketX - 30 &&
                        dumbbell.x < basketX + 100
                    ) {
                        setScore((score) => score + 1);
                        return false;
                    } else if (dumbbell.y > 400) {
                        setGameOver(true);
                        return false;
                    }
                    return true;
                })
            );
        };
        const interval = setInterval(handleCatch, 50);
        return () => clearInterval(interval);
    }, [basketX]);

    useEffect(() => {
        if (score % 10 === 0 && score > 0) {
            setDifficulty((difficulty) => difficulty + 1);
            setDumbbellInterval((interval) => Math.max(200, interval - 100));
        }
    }, [score]);

    const resetGame = () => {
        setBasketX(35);
        setDumbbells([]);
        setScore(0);
        setGameOver(false);
        setDifficulty(1);
        setDumbbellInterval(1000);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-orange-100">
            <h1 className="text-4xl mt-3 mb-4 text-slate-600 font-serif font-extrabold">CATCH THE DUMBBELL</h1>
            {gameOver ? (
                <div className="text-center">
                    <div className="text-2xl text-red-600 mb-4">Game Over! Your score: {score}</div>
                    <button
                        onClick={resetGame}
                        className="px-4 py-2 bg-orange-300 text-black rounded hover:bg-orange-400"
                    >
                        Play Again
                    </button>
                </div>
            ) : (
                <>
                    <div
                        className="relative bg-blue-200 border-2 border-gray-800 rounded-lg overflow-hidden"
                        style={{ width: `${gameWidth}px`, height: '600px' }}
                    >
                        <Basket x={basketX} onMouseDown={handleMouseDown} onTouchStart={handleTouchStart} />
                        {dumbbells.map((dumbbell) => (
                            <Dumbbell key={dumbbell.id} x={dumbbell.x} y={dumbbell.y} />
                        ))}
                    </div>
                    <div className="mt-4 text-xl">
                        <p>Score: <span>{score}</span></p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Catch;
