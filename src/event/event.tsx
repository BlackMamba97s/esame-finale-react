// src/components/Event/Event.tsx
import React from 'react';

interface EventProps {
  event: {
    id: number;
    name: string;
    date: string;
    // ... altri attributi dell'evento
  };
  onEventClick: (eventId: number) => void;
}

const Event: React.FC<EventProps> = ({ event, onEventClick }) => {
  return (
    <div onClick={() => onEventClick(event.id)}>
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      {/* Aggiungi altri dettagli dell'evento secondo le tue esigenze */}
    </div>
  );
};

export default Event;
