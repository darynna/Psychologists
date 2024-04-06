import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Psychologist } from "../../redux/Psycologists/psycologistOperations";
import PsycologistItem from '../PsycologistItem/PsycologistItem';

interface PsycologistListProps {
  data: Psychologist[];
}

const PsycologistList: React.FC<PsycologistListProps> = ({ data }) => {
  const [expandedPsychologist, setExpandedPsychologist] = useState<number | null>(null);

  const toggleReadMore = (psychologistId: number) => {
    if (expandedPsychologist === psychologistId) {
      setExpandedPsychologist(null);
    } else {
      setExpandedPsychologist(psychologistId);
    }
  };

  return (
    <div>
      {data.map((psychologist) => (
        <PsycologistItem key={nanoid()} psychologist={psychologist} expanded={expandedPsychologist === psychologist.id} toggleReadMore={toggleReadMore} />
      ))}
    </div>
  );
};

export default PsycologistList;
