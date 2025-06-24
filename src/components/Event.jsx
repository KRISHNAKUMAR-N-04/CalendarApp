const colors = ['bg-red-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200', 'bg-orange-400'];

const EventCard = ({ event }) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className={`mt-1 p-1 text-xs rounded `} style={{backgroundColor: event.color}}>
      <div className="font-semibold">{event.title}</div>
    </div>
  );
};

export default EventCard;
    