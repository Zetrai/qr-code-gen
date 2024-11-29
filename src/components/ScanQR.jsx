import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

import { BgIllustration, LogoQRGen } from '../assets';

const ScanQR = () => {
  const [scannerKey, setScannerKey] = useState(0); // Unique key for remounting
  const [scanResult, setScanResult] = useState('');

  const handleScan = (result) => {
    if (result && result[0]?.rawValue) {
      console.log(result[0].rawValue);
      setScanResult(result[0].rawValue);

      // Reset the scanner by changing the key
      setScannerKey((prevKey) => prevKey + 1);
    }
  };

  return (
    <div className="h-full w-full">
      <section className="flex-center mt-4 flex-col">
        <h1 className="mb-4 font-saira text-3xl text-primary">
          <LogoQRGen />
        </h1>
        <div className="relative h-[300px] w-[300px] rounded-xl border-4 border-primary p-2">
          <div className="z-20">
            <Scanner
              key={scannerKey} // Remount scanner when key changes
              onScan={handleScan}
              onError={(error) => {
                console.error('Camera error:', error);
                alert(
                  'Camera access failed. Please check your browser settings and allow camera permissions.',
                );
              }}
            />
          </div>
        </div>
        <div className="mt-4 h-auto w-[50%] rounded-xl border-2 border-primary px-10 py-5">
          <p className="font-bold text-darkText"> {scanResult}</p>
        </div>
      </section>
    </div>
  );
};

export default ScanQR;
