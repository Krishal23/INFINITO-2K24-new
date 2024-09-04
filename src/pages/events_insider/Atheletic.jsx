import React from 'react';
import EventTemplate from './EventTemplate';

const Atheletic = () => {
  return (
    <EventTemplate
      name="atheletic"
      title="Atheletic Championship"
      date="20/2/2024 - 22/2/2024"
      description="Join us for an exhilarating Atheletic championship where teams will compete for the ultimate prize."
      isRegistrationOpen={true}
      rulebookUrl="https://example.com/football-rulebook"
      structure={[
        "Each match consists of two halves of 45 minutes each.",
        "Teams will be divided into groups and the top teams will advance to the knockout stage.",
        "The knockout stage will be single elimination."
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

export default Atheletic;
