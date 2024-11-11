import Image from "next/image"
import logo from "../../public/images/SR.png"
import Link from "next/link"
const Header = () => {
  return (
    <nav className="flex justify-between px-20 py-10">
      <div>
        <Image src={logo} alt="logo" width={45} height={45}></Image>
      </div>
      <ul className="flex gap-10 items-end text-[#181717] font-semibold text-xl">
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
    </nav>
  )
}
export default Header