import React from 'react';

interface FrostedProfileFrameProps {
    imageUrl: string;
    altText?: string;
    className?: string;
    borderThickness?: 'thin' | 'medium' | 'thick';
}

const FrostedProfileFrame: React.FC<FrostedProfileFrameProps> = ({
    imageUrl,
    altText = "Profile",
    className = '',
    borderThickness = 'medium'
}) => {
    const borderPadding = {
        thin: 'p-0.5',
        medium: 'p-1.5',
        thick: 'p-2.5'
    };

    return (
        <div className={`relative inline-block ${borderPadding[borderThickness]} ${className}`}>
            {/* Rainbow Frosted Glow Border */}
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                {/* Frosted background */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-silver/30 rounded-xl" />

                {/* Vibrant animated rainbow glow */}
                <div className="absolute -inset-4 rounded-xl 
                bg-gradient-to-r 
                from-purple-800 via-indigo-500 to-cyan-300 
                blur-2xl
                " 
                style={{ animation: 'var(--animation-pulseGlow)' }}
                />

                {/* Inner white border */}
                <div className="absolute inset-0 border border-white/50 rounded-xl" />
            </div>

            {/* Profile Image */}
            <div className="relative w-[160px] h-[200px] rounded-lg overflow-hidden">
                <img
                    src={imageUrl}
                    alt={altText}
                    className="w-full h-full object-cover rounded-lg border-4 border-transparent"
                    style={{ clipPath: 'inset(1px round 12px)' }}
                />
            </div>
        </div>
    );
};

export default FrostedProfileFrame;
