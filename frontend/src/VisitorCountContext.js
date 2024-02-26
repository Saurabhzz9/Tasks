import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const VisitorCountContext = createContext();

export const VisitorCountProvider = ({ children }) => {
  const [visits, setVisits] = useState({
    currentMonthVisits: 0,
    lastMonthVisits: 0,
    uniqueVisitorsThisMonth: 0, // Example of additional analytics
  });

  useEffect(() => {
    const fetchVisits = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/visits');
        setVisits(response.data);
      } catch (error) {
        console.error('Error fetching visit data:', error);
      }
    };

    fetchVisits();
  }, []);

  return (
    <VisitorCountContext.Provider value={visits}>
      {children}
    </VisitorCountContext.Provider>
  );
};

export const useVisitorCounts = () => useContext(VisitorCountContext);
