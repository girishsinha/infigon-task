import { defaultOverrides } from "next/dist/server/require-hook";
interface card {
  title: string;
  description: string;
}
const CardGray: React.FC<card> = ({ title, description }) => {
  return (
    // <div className="max-w-80 h-28  p-2 bg-[#CACACA33] rounded-xl">
    <div className="max-w-96  max-h-56  p-2 bg-[#CACACA33] rounded-xl">
      <h3 className="font-bold"> {title}</h3>
      <p className="text-[#5B6871]">{description}</p>
    </div>
  );
};
export default CardGray;
