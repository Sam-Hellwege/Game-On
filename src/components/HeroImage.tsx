import React from 'react';
import NeonButton from '../components/NeonButton';
import '../assets/fonts/fonts.css';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    buttonTextBand?: string;
    buttonTextEvents?: string;
    buttonLinkBand?: string;
    buttonLinkEvents?: string;
    backgroundImage: string;
    heightClasses?: string;
    contentMaxWidth?: string;
    contentPositionClasses?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    title,
    subtitle,
    backgroundImage,
    heightClasses = 'min-h-[20%] sm:min-h-[75%] lg:h-[90%]',
    contentMaxWidth = 'max-w-md',
    contentPositionClasses = 'items-center justify-center',
}) => (

    <section
        className={`relative bg-cover bg-center bg-no-repeat w-full text-white ${heightClasses}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="absolute inset-0 bg-black/50" />
        <div className={`relative z-10 flex flex-col h-full px-4 text-white text-center ${contentPositionClasses} ${contentMaxWidth}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 neon-title">{title}</h1>
            {subtitle && <p className="text-base sm:text-lg mb-6 neon-ice-blue">{subtitle}</p>}
            <div className="flex flex-row gap-4 justify-center pb-2">
                <NeonButton className='nav-link' text="The Band" to="/Band_Members" />
                <NeonButton className='nav-link' text="Events" to="/Events" />
            </div>
        </div>
    </section>
);



export default HeroSection;
