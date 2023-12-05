// src/pages/Home.tsx
import React, { useState, useEffect } from "react";
import EventDetail from "./eventDetail";
import Event from "./event";

interface EventListProps {
  events: Array<{
    id: number;
    name: string;
    date: string;
    // ... altri attributi dell'evento
  }>;
  onEventClick: (eventId: number) => void;
}

const EventList: React.FC<EventListProps> = ({ events, onEventClick }) => {
  return (
    <div>
      <h2>Lista degli Eventi</h2>
      {events.map((event) => (
        <Event key={event.id} event={event} onEventClick={onEventClick} />
      ))}
    </div>
  );
};

export default EventList;
