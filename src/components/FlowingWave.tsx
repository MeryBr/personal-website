import React from 'react';

const FlowingWave: React.FC = () => {
    return (
        <div className="relative w-screen h-[150px] overflow-hidden">
            <svg
                className="absolute top-0 left-0 w-full h-full"
                viewBox="0 0 100 150"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8afaff" />
                        <stop offset="50%" stopColor="#8d6be1" />
                        <stop offset="100%" stopColor="#4009be" />
                    </linearGradient>
                </defs>

                <path
                    d="M0 60 C 25 20, 75 100, 100 60"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                >
                    <animate
                        attributeName="d"
                        dur="5s"
                        repeatCount="indefinite"
                        values="
              M0 60 C 25 20, 75 100, 100 60;
              M0 65 C 25 40, 75 80, 100 65;
              M0 60 C 25 20, 75 100, 100 60
            "
                    />
                </path>

                <path
                    d="M0 80 C 25 40, 75 120, 100 80"
                    stroke="url(#lineGradient)"
                    strokeWidth="2.5"
                    fill="none"
                    opacity="0.8"
                >
                    <animate
                        attributeName="d"
                        dur="6.5s"
                        repeatCount="indefinite"
                        values="
              M0 80 C 25 40, 75 120, 100 80;
              M0 75 C 25 60, 75 100, 100 75;
              M0 80 C 25 40, 75 120, 100 80
            "
                    />
                </path>

                <path
                    d="M0 100 C 25 80, 75 140, 100 100"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                >
                    <animate
                        attributeName="d"
                        dur="8s"
                        repeatCount="indefinite"
                        values="
              M0 100 C 25 80, 75 140, 100 100;
              M0 95 C 25 90, 75 130, 100 95;
              M0 100 C 25 80, 75 140, 100 100
            "
                    />
                </path>
            </svg>
        </div>
    );
};

export default FlowingWave;
