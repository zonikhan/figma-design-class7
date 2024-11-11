import Link from "next/link"
const Footer = () => {
  return (
    <div className="flex justify-between mx-20 my-10">
      <div>
        <h1 className="text-[#2429AF] text-xl font-semibold">Rabia- 2024</h1>
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