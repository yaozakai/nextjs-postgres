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
        <p className="w-[100px] h-[88px] absolute left-[183.52px] top-[28.06px] text-[44px] text-left text-white mt-3">
          <span className="w-[100px] h-[88px] text-[44px] text-left text-white">Walt</span>
          <br />
          <span className="w-[100px] h-[88px] text-[44px] text-left text-white">Yao</span>
        </p>


    </div>
  );
}

export function LogoSmall() {
  return (
    <div className={`${poppinsRegular.className} flex flex-row items-center leading-none text-white`} >

        <Image
          src={waltAvatar}
          className="w-[100px] block"
          alt="Screenshot of the dashboard project showing mobile version"
        />
        <p className="w-[100px] h-[88px] absolute left-[140px] top-[40px] text-[44px] text-left text-white mt-3">
          <span className="text-[36px] text-left text-white">Walt</span>
          <br />
          <span className="text-[36px] text-left text-white">Yao</span>
        </p>


    </div>
  );
}
