import { BgIllustration, LogoQRGen } from './assets';
import Button from './common/Button';

const App = () => {
  return (
    <div className="bg-darkBG relative flex h-screen w-screen flex-col items-center py-12">
      <BgIllustration className="absolute right-[-200px] top-1/4 h-3/5" />

      <section className="flex-center h-[20%] w-full flex-col">
        <h1 className="text-darkText mb-6 text-center font-saira text-2xl">
          <LogoQRGen />
        </h1>
        <div className="bg-darkInput flex-center z-1 relative mx-7 h-14 w-[90%] rounded-[10px] border-2 border-primary p-2">
          <input
            className="font-outfit z-100 text-darkText w-full bg-transparent focus:border-transparent focus:outline-none"
            placeholder="Enter Url Here..."
          />
          <Button>QR Code</Button>
        </div>
      </section>

      <section className="flex h-[80%] w-full flex-col items-center gap-2 px-2 pt-10">
        <h1 className="font-saira text-3xl text-primary">QR</h1>
        <div className="h-[300px] w-[300px] rounded-[10px] border-2 border-primary"></div>
        <div className="h-16 py-2">
          <Button>Download</Button>
        </div>
      </section>
    </div>
  );
};

export default App;
