import React, { useState } from 'react';
import ChatWidget from './ChatWidget';

const ChatButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="fixed right-6 md:right-8 bottom-28 z-50">
          <ChatWidget onClose={() => setOpen(false)} />
        </div>
      )}

      {/* <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Open chat"
        className="fixed right-4 md:right-8 bottom-4 md:bottom-6 z-50 h-16 w-16 md:h-18 md:w-18 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.62 0-3.134-.37-4.5-1.02L3 21l1.02-4.5C3.37 15.134 3 13.62 3 12c0-4.97 3.582-9 8-9s9 4.03 9 9z" />
        </svg>
      </button> */}
      <button
        onClick={() => setOpen((s) => !s)}
        aria-label="Open chat"
        style={{ borderRadius: '10px',}}
        className="fixed right-4 md:right-8 bottom-4 md:bottom-6 z-50 h-10 w-16 md:h-18 md:w-18  bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        <div style={{width:'20px', height:'20px',textAlign:'center', alignItems:'center', fontSize:'14px', borderRadius:'50%', backgroundColor:'blue', color:'white', position:'absolute', top:'-10px', right:'-10px'}}>1</div>
        CHAT
      </button>
    </>
  );
};

export default ChatButton;
