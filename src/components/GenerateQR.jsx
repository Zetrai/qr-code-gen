import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';

import { BgIllustration, LogoQRGen } from '../assets';
import Button from '../common/Button';

const GenerateQR = () => {
  const [url, setUrl] = useState('');
  const qrCodeRef = useState(null);

  const onChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const handleDownloadPNG = () => {
    if (qrCodeRef.current) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const svg = qrCodeRef.current;

      const svgData = new XMLSerializer().serializeToString(svg);
      const img = new Image();
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        // Convert canvas to PNG data URL
        const dataUrl = canvas.toDataURL('image/png');

        // Create a download link and trigger the download
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qrcode.png';
        link.click();
      };
    }
  };

  return (
    <div>
      <BgIllustration className="absolute right-[-200px] top-1/4 h-3/5" />

      <section className="flex-center h-[20%] w-full flex-col">
        <h1 className="mb-6 text-center font-saira text-2xl text-darkText">
          <LogoQRGen />
        </h1>
        <div className="flex-center z-1 relative mx-7 h-14 w-[90%] rounded-[10px] border-2 border-primary bg-darkInput p-2">
          <input
            className="z-100 w-full bg-transparent font-outfit text-darkText focus:border-transparent focus:outline-none"
            placeholder="Enter Url Here..."
            value={url}
            onChange={onChangeHandler}
          />
        </div>
      </section>

      <section className="flex h-[80%] w-full flex-col items-center gap-2 px-2 pt-10">
        <h1 className="font-saira text-3xl text-primary">QR</h1>
        <div className="flex-center h-[300px] w-[300px] rounded-[10px] border-2 border-primary">
          {url ? (
            <QRCodeSVG
              ref={qrCodeRef}
              value={url}
              size={256}
              bgColor="#111629"
              fgColor="#ffffff"
              marginSize={2}
              level="H"
              title="QR Code for Dark Background"
            />
          ) : (
            ''
          )}
        </div>
        <div className="h-16 py-2">
          <Button onClick={handleDownloadPNG}>Download</Button>
        </div>
      </section>
    </div>
  );
};
export default GenerateQR;
