import { useState } from 'react';

import GenerateQR from './components/GenerateQR';
import ScanQR from './components/ScanQR';

const App = () => {
  const [tab, setTab] = useState('gen');

  const tabHandler = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <div className="relative flex h-screen w-screen flex-col items-center bg-darkBG">
      <section className="grid-center mb-5 w-full grid-cols-2 rounded-b-3xl border-b-2 border-lightBG/20 bg-darkInput/60 font-montserrat text-darkText/60">
        <button
          onClick={() => tabHandler('gen')}
          className={`w-[105%] rounded-bl-3xl p-6 transition-all duration-150 ${tab === 'gen' ? 'scale-95 bg-darkInput text-darkText' : 'hover:bg-darkInput/80'}`}
        >
          Generate QR
        </button>
        <button
          onClick={() => tabHandler('scan')}
          className={`w-[105%] rounded-br-3xl p-6 transition-all duration-150 ${tab === 'scan' ? 'scale-95 bg-darkInput text-darkText' : 'hover:bg-darkInput/80'}`}
        >
          Scan QR
        </button>
      </section>
      {tab === 'gen' ? <GenerateQR /> : <ScanQR />}
    </div>
  );
};

export default App;
