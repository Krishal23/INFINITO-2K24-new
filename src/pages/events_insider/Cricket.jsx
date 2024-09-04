import React from 'react';
import EventTemplate from './EventTemplate';
import rulebook from './eventsRuleBook/CricketRulebook.pdf'

const Cricket = () => {
  return (
    <EventTemplate
      title="Cricket Championship"
      date="20/2/2024 - 22/2/2024"
      description="Join us for an exhilarating Cricket championship where teams will compete for the ultimate prize."
      isRegistrationOpen={false}
      rulebookUrl={rulebook}
      structure={[
        "1: 8511129351","2 : 8930207127 "

      ]}
      rules={[
        "Teams must have eleven players including a goalkeeper.",
        "Matches will be played with standard football rules.",
        "Any form of unsporting behavior will lead to penalties."
      ]}
      judgingCriteria="Matches will be judged based on team performance, sportsmanship, and adherence to rules."
      prizes={[
        "1st Place: Rs. 5000",
        "2nd Place: Rs. 3000",
        "3rd Place: Rs. 2000"
      ]}
    />
  );
};

export default Cricket;
