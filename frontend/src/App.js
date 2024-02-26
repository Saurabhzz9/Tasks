import React from 'react';
import styled from 'styled-components';
import { useVisitorCounts } from './VisitorCountContext';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const StatsBox = styled.div`
  margin: 10px 0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

const Stat = styled.p`
  margin: 5px 0;
  font-size: 18px;
  color: #555;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: #2a9d8f;
`;

function App() {
  const { currentMonthVisits, lastMonthVisits, uniqueVisitorsThisMonth } = useVisitorCounts();

  return (
    <Container>
      <Title>Website Visitor Analytics</Title>
      <StatsBox>
        <Stat>Visits this month: <Highlight>{currentMonthVisits}</Highlight></Stat>
        <Stat>Visits last month: <Highlight>{lastMonthVisits}</Highlight></Stat>
      </StatsBox>
    </Container>
  );
};

export default App;
