import { poppinsRegular } from '@/app/ui/fonts';
import Image from 'next/image';
import waltAvatar from "../../public/icons/Walt-avatar.png";


export default function Logo() {
  return (
    <div className={`${poppinsRegular.className} flex flex-row items-center leading-none text-white`} >
      <Image
        src={waltAvatar}
        className="block"
        alt="Screenshot of the dashboard project showing mobile version"
      />
      <p className="text-[44px]">Walt</p>
    </div>
  );
}
