// pages/BandMembers.tsx
import React from 'react';
import BasePage from './Base';
import bandMembers from '../data/members.json';
import BandMemberCard from '../components/MemberCard';
import '../assets/fonts/fonts.css';

const BandMembersPage: React.FC = () => {
  // Filtered groups
  const inactiveMembers = bandMembers.filter(member => member.status === "Inactive");
  const coreMembers = bandMembers.filter(member => member.status !== "Inactive" && member.core === "Founding Member");
  const guestMembers = bandMembers.filter(member => member.status !== "Inactive" && member.core === "Featured Performer");

  // Utility: render section only if members exist
  const renderGroup = (title: string, members: typeof bandMembers) =>
    members.length > 0 && (
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center neon-title mb-6">{title}</h2>
        {/* <div className="flex flex-wrap sm:flex-nowrap gap-6 justify-center px-4 py-4 overflow-x-auto"> */}
        <div className="flex flex-wrap gap-6 justify-center px-4 py-4">
          {members.map((member) => (
            <BandMemberCard
              key={member.name}
              name={member.name}
              role={member.role}
              core={member.core}
              status={member.status}
              age={member.age}
              trivia={member.trivia}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </section>
    );

  return (
    <BasePage title="Band Members">
      {renderGroup("Founding Members", coreMembers)}
      {renderGroup("Featured Performers", guestMembers)}
      {renderGroup("Inactive/Past Members", inactiveMembers)}
    </BasePage>
  );
};

export default BandMembersPage;
