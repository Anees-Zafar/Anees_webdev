import { FiSend } from "react-icons/fi";

const ButtonWrapper = () => {
  return (
    <div >
      <NeumorphismButton />
    </div>
  );
};

const NeumorphismButton = () => {
  return (
    <button className="rounded-2xl border-2 mt-6 border-dashed border-white bg-black px-6 py-3 font-semibold uppercase text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_white] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
    Hover me
  </button>

  );
};

export default ButtonWrapper;

   
  
  
