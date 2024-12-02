import Link from "next/link"
const Footer = () => {
  return (
    <div className="flex sm:flex-row flex-col sm:justify-between items-center md:mx-20 mx-10 my-10 gap-4">
      <div>
        <h1 className="text-[#2429AF] text-xl font-semibold">Rabia Arif - 2024</h1>
      </div>
      <ul className="flex gap-10">
        <li>
            <Link href="">LinkedIn</Link>
        </li>
        <li>
            <Link href="">Github</Link>
        </li>
        <li>
            <Link href="">Twitter</Link>
        </li>
        
      </ul>
    </div>
  )
}

export default Footer