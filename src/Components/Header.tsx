import Image from "next/image"
import logo from "../../public/images/SR.png"
import Link from "next/link"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Header = () => {
  return (
    
    <nav className="flex justify-between md:px-20 px-10 sm:py-10 py-4">
      <div>
        <Image src={logo} alt="logo" width={45} height={45}></Image>
      </div>
      <ul className="md:flex hidden gap-10 items-end text-[#181717] font-semibold text-xl">
        <li>
            <Link href={"/"}>Work</Link>
        </li>
        <li>
            <Link href={"about"}>About</Link>
        </li>
        <li>
            <Link href={""}>Playground</Link>
        </li>
        <li>
            <Link href={""}>Contact</Link>
        </li>
      </ul>
  <Sheet>
  <SheetTrigger className="md:hidden block"><HiOutlineMenuAlt3 className="text-3xl" /></SheetTrigger>
  <SheetContent className="">
  <ul className="flex flex-col gap-4 border-b-2 py-5 items-center text-[#181717] font-semibold text-xl">
        <li>
            <Link className="hover:underline" href={"/"}>Work</Link>
        </li>
        <li>
            <Link className="hover:underline" href={"about"}>About</Link>
        </li>
        <li>
            <Link className="hover:underline" href={""}>Playground</Link>
        </li>
        <li>
            <Link className="hover:underline" href={""}>Contact</Link>
        </li>
      </ul>
  </SheetContent>
</Sheet>

    </nav>
  )
}
export default Header