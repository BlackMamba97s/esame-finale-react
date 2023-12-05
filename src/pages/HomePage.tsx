import React, { useState, useEffect } from 'react';
import EventList from '../event/eventList';
import EventDetail from '../event/eventDetail';
import { EventProps} from '../types/types';
//import Event from '../event/Event';

const HomePage: React.FC = () => {
    const [events, setEvents] = useState<Array<EventProps>>([]); // Esplicita il tipo di stato iniziale
    const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
    const [bookingConfirmation, setBookingConfirmation] = useState(false);
  
    useEffect(() => {
      // Effettua la chiamata API per ottenere la lista degli eventi
      fetch('https://its-events.davide-mantovani.workers.dev/events')
        .then((response) => response.json())
        .then((data) => setEvents(data))
        .catch((error) => console.error('Error fetching events', error));
    }, []);
  
    const handleEventClick = (eventId: number) => {
      // Imposta l'evento selezionato e passa alla pagina di dettaglio
      setSelectedEvent(events.find((event) => event.id === eventId) || null);
    };
  
    const handleBookClick = () => {
      // Implementa la logica di prenotazione
      console.log('Prenotazione effettuata');
      setBookingConfirmation(true);
    };
  
    const handleBackToEvents = () => {
      // Torna alla lista degli eventi dopo la prenotazione
      setSelectedEvent(null);
      setBookingConfirmation(false);
    };
  
    return (
      <div>
        {selectedEvent ? (
          <>
            <EventDetail
              event={selectedEvent}
              onBookClick={handleBookClick}
              bookingConfirmation={bookingConfirmation}
              onBackToEvents={handleBackToEvents}
            />
          </>
        ) : (
          <EventList events={events} onEventClick={handleEventClick} />
        )}
      </div>
    );
  };
  
  export default HomePage;