import React from 'react';

const WaveBackground: React.FC = () => (
    <div className="wave-footer">
        <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
        >
            <defs>
                <path
                    id="wave"
                    d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />


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

            <g className="parallax" strokeLinecap="round">
                <use
                    xlinkHref="#wave"
                    x="48"
                    y="0"
                    fill="none"
                    stroke="url(#animatedGradient)"
                    strokeWidth="2"
                    strokeOpacity="0.6"
                    style={{ mixBlendMode: 'screen' }}
                >
                    <animate attributeName="stroke-width" values="1.2; 2.5; 1.2" dur="6s" repeatCount="indefinite" />
                </use>
                <use
                    xlinkHref="#wave"
                    x="48"
                    y="3"
                    fill="none"
                    stroke="url(#animatedGradient)"
                    strokeWidth="1.5"
                    strokeOpacity="0.6"
                    style={{ mixBlendMode: 'screen' }}
                >
                    <animate attributeName="stroke-width" values="0.8; 1.8; 0.8" dur="5s" repeatCount="indefinite" />
                </use>
                <use
                    xlinkHref="#wave"
                    x="48"
                    y="5"
                    fill="none"
                    stroke="url(#animatedGradient)"
                    strokeWidth="1"
                    strokeOpacity="0.6"
                    style={{ mixBlendMode: 'screen' }}
                >
                    <animate attributeName="stroke-width" values="0.5; 1.2; 0.5" dur="4s" repeatCount="indefinite" />
                </use>
            </g>

        </svg>
    </div>
);

export default WaveBackground;
