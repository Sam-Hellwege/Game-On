// ./components/MemberCard.tsx
import React from 'react';
import FrostedGlassPane from './FrostedPane';
import FrostedProfileFrame from './FrostedProfileFrame';

interface BandMemberCardProps {
    name: string;
    role: string;
    core: string;
    status: string;
    age: number;
    trivia: string;
    imageUrl: string;

}

const BandMemberCard: React.FC<BandMemberCardProps> = ({
    name,
    role,
    // core,
    // status,
    age,
    trivia,
    imageUrl,

}) => {
    return (
        // <FrostedGlassPane className="w-full min-w-[250px] max-w-[250px] flex flex-col items-center gap-2 p-4">
        <FrostedGlassPane className="w-full min-w-[310px] max-w-[250px] flex flex-col items-center gap-2 p-4">
            <FrostedProfileFrame
                imageUrl={imageUrl}
                altText={name}
                // glowColor={glowColor}
                borderThickness="thick"
            />
            <div className="text-center text-white break-words whitespace-normal w-full px-2 pb-5">
                <h2 className="text-xl font-bold neon-title">{name}</h2>
                <br />
                <p className="text-sm neon-ice-blue-small">{role}</p>
                <br />
                {/* <p className="text-sm neon-ice-blue-small">{core}</p>
                <br />
                <p className="text-sm neon-ice-blue-small">{status}</p>
                <br /> */}
                <p className="text-sm neon-ice-blue-small">{age} years old</p>
                <br />
                <p className="text-sm neon-ice-blue-small whitespace-pre-line">{trivia}</p>
            </div>
        </FrostedGlassPane>
    );
};

export default BandMemberCard;
