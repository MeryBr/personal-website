import React from 'react';

const WaveBackground: React.FC = () => (
    <svg
        className="block w-full h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
    >
        <defs>
            <linearGradient id="animatedGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00ffff">
                    <animate attributeName="stop-color" values="#00ffff;#be8cff;#00ffff" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#be8cff">
                    <animate attributeName="stop-color" values="#be8cff;#8afaff;#be8cff" dur="8s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#8afaff">
                    <animate attributeName="stop-color" values="#8afaff;#00ffff;#8afaff" dur="8s" repeatCount="indefinite" />
                </stop>
            </linearGradient>
        </defs>

        <path
            d="M0,0 C300,120 900,0 1200,120 L1200,0 L0,0 Z"
            fill="url(#animatedGradient)"
            fillOpacity="0.4"
        />
    </svg>
);

export default WaveBackground;
