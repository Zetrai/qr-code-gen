import { Scanner } from '@yudiel/react-qr-scanner';

import { BgIllustration, LogoQRGen } from '../assets';

const ScanQR = () => {
  return (
    <div className="h-full w-full">
      <section className="flex-center mt-4 flex-col">
        <h1 className="mb-4 font-saira text-3xl text-primary">
          <LogoQRGen />
        </h1>
        <div className="relative h-[300px] w-[300px] rounded-xl border-4 border-primary p-2">
          <div className="z-20">
            {/* <Scanner onScan={(result) => console.log(result)} />; */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default ScanQR;
