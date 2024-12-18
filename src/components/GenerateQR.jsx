import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import { toPng } from 'html-to-image';

import { BgIllustration, LogoQRGen } from '../assets';
import Button from '../common/Button';

const GenerateQR = () => {
  const [url, setUrl] = useState('');

  const onChangeHandler = (e) => {
    setUrl(e.target.value);
  };

  const handleDownloadPNG = () => {
    const node = document.getElementById('qr-code-svg'); // Target QR Code SVG element
    if (node) {
      toPng(node) // Convert SVG to PNG
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'qrcode.png';
          link.click();
        })
        .catch((err) => {
          console.error('Error generating PNG', err);
        });
    }
  };

  return (
    <div>
      <BgIllustration className="absolute right-[-200px] top-1/4 h-3/5" />

      <div>
        <div className="flex h-[20%] w-full flex-col">
          <h1 className="font-saira text-3xl text-primary">URL</h1>
          <div className="flex-center z-1 relative h-14 w-full rounded-[10px] border-2 border-primary bg-darkInput p-2">
            <input
              type="url"
              className="z-100 w-full bg-transparent font-outfit text-darkText focus:border-transparent focus:outline-none"
              placeholder="Enter URL Here..."
              value={url}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <div className="flex h-[80%] w-full flex-col items-center gap-2 px-2 pt-10">
          <h1 className="mb-4 font-saira text-3xl text-primary">
            <LogoQRGen />
          </h1>
          <div className="flex-center h-[300px] w-[300px] rounded-[10px] border-2 border-primary">
            {url ? (
              <QRCodeSVG
                id="qr-code-svg"
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

          <div
            className="z-[9999] h-16 cursor-pointer py-2" // Adjust positioning
            onClick={handleDownloadPNG}
          >
            <Button>Download</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateQR;
