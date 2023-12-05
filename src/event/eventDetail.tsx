import React /*{ useState, useEffect }*/ from "react";
/*import EventList from "./eventList";
import Event from "./event";
*/

interface EventDetailProps {
  event: {
    id: number;
    name: string;
    // ... altri attributi dell'evento
  };
  onBookClick: () => void;
  bookingConfirmation: boolean;
  onBackToEvents: () => void;
}

const EventDetail: React.FC<EventDetailProps> = ({ event, onBookClick, bookingConfirmation, onBackToEvents }) => {
  return (
    <div>
      <h2>{event.name}</h2>
      {/* Aggiungi altri dettagli dell'evento secondo le tue esigenze */}
      {bookingConfirmation ? (
        <>
          <p>La tua prenotazione è stata ricevuta.</p>
          <button onClick={onBackToEvents}>Torna agli eventi</button>
        </>
      ) : (
        <>
          <button onClick={onBookClick}>Prenota</button>
        </>
      )}
    </div>
  );
};

export default EventDetail;