import { BgIllustration, LogoQRGen } from './assets';
import Button from './common/Button';

const App = () => {
  return (
    <div className="bg-darkBG flex-center relative h-screen w-screen flex-col">
      <BgIllustration className="absolute right-[-200px] top-1/4 h-3/5" />

      <h1 className="text-darkText mb-6 text-center font-saira text-2xl">
        <LogoQRGen />
      </h1>
      <div className="bg-darkInput flex-center z-1 relative mx-7 h-14 w-[90%] rounded-[10px] border-2 border-primary p-2">
        <input
          className="font-outfit z-100 text-darkText w-full bg-transparent focus:border-transparent focus:outline-none"
          placeholder="Enter Url Here..."
        />
        <Button />
      </div>
    </div>
  );
};

export default App;
