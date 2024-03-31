import {
  HomeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import CommunityRidesLogo from "@/app/components/icons/CommunityRidesLogo";
import Image from "next/image";
import BikerLogoMobile from "./bikerlogomobile.svg";

export default function Navbar() {
  return (
    <div className="flex bg-sky-900 p-4  border-slate-300 justify-around sticky top-0 z-10 rounded-b-md">
      <Image
        src={BikerLogoMobile}
        alt="Biker logo"
        className="h-6 text-white"
      ></Image>
      <HomeIcon className="text-white w-6 h-6" />
      <MagnifyingGlassIcon className="text-white w-6 h-6 focus:text-gray-900" />
      <UserIcon className="text-white w-6 h-6" />{" "}
      <ChatBubbleBottomCenterTextIcon className="text-white w-6 h-6" />
    </div>
  );
}
