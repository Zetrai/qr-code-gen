import { Scanner } from '@yudiel/react-qr-scanner';
import { useState, useRef } from 'react';

import { PlusIcon, LogoQRGen } from '../assets';

const ScanQR = () => {
  const [scannerKey, setScannerKey] = useState(0); // Unique key for remounting
  const [scanResult, setScanResult] = useState('');
  const [pauseScan, setPauseScan] = useState(false);
  const [lastFrame, setLastFrame] = useState(null); // Store last frame (QR image)
  const videoRef = useRef(null); // Ref for the video feed

  const handleScan = (result) => {
    if (result && result[0]?.rawValue) {
      console.log(result[0].rawValue);
      setScanResult(result[0].rawValue);
      captureFrame(); // Capture the current frame
      setPauseScan(true);
      setScannerKey((prevKey) => prevKey + 1); // Reset scanner
    }
  };

  const handlePauseScan = () => {
    setPauseScan(false);
    setLastFrame(null); // Clear the stored frame
  };

  const captureFrame = () => {
    if (videoRef.current) {
      const video = videoRef.current.querySelector('video'); // Target the video element
      if (video) {
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setLastFrame(canvas.toDataURL('image/png')); // Save the frame as a data URL
      }
    }
  };

  return (
    <div className="h-full w-full">
      <section className="flex-center mt-4 flex-col">
        <h1 className="mb-4 font-saira text-3xl text-primary">
          <LogoQRGen />
        </h1>
        <div className="relative h-[300px] w-[300px] rounded-xl border-4 border-primary p-2">
          {lastFrame && pauseScan ? ( // Show captured frame if paused
            <img
              src={lastFrame}
              alt="Captured QR Frame"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="z-20" ref={videoRef}>
              <Scanner
                key={scannerKey} // Remount scanner when key changes
                onScan={handleScan}
                scanDelay={2000}
                paused={pauseScan}
                onError={(error) => {
                  console.error('Camera error:', error);
                  alert(
                    'Camera access failed. Please check your browser settings and allow camera permissions.',
                  );
                }}
              />
            </div>
          )}
          {pauseScan && (
            <div
              className="absolute right-5 top-5 z-[9999] rounded-full border-2 border-primary bg-primary/50 p-1"
              onClick={handlePauseScan}
            >
              <PlusIcon height="32px" width="32px" />
            </div>
          )}
        </div>
        {pauseScan && (
          <div className="mx-10 mt-4 h-auto w-[85%] rounded-xl border-2 border-primary px-10 py-5 lg:min-w-[50%]">
            <p className="font-bold text-darkText">{scanResult}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default ScanQR;
