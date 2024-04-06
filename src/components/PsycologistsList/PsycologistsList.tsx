import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Psychologist } from "../../redux/Psycologists/psycologistOperations";
import PsycologistItem from '../PsycologistItem/PsycologistItem';
import { LoadMoreButton, ListWrap } from "./PsycologistsList.styled";

interface PsycologistListProps {
  data: Psychologist[];
}

const PsycologistList: React.FC<PsycologistListProps> = ({ data }) => {
  const [expandedPsychologist, setExpandedPsychologist] = useState<number | null>(null);
  const [displayCount, setDisplayCount] = useState(3); 

  const toggleReadMore = (psychologistId: number) => {
    if (expandedPsychologist === psychologistId) {
      setExpandedPsychologist(null);
    } else {
      setExpandedPsychologist(psychologistId);
    }
  };

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 3); // Increase count by 3
  };

  return (
    <ListWrap>
      <ul>
      {data.slice(0, displayCount).map((psychologist) => (
        <PsycologistItem key={nanoid()} psychologist={psychologist} expanded={expandedPsychologist === psychologist.id} toggleReadMore={toggleReadMore} />
      ))}
        </ul>
      {data.length > displayCount && <LoadMoreButton onClick={handleLoadMore}>Load More</LoadMoreButton>}
    </ListWrap>
  );
};

export default PsycologistList;
