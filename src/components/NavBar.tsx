import Link from "next/link";
import Image from 'next/image'

interface NavBarProps {
    active: "estoque" | "modelos" | "filiais"
}

export default function NavBar(props: NavBarProps) {
    const { active } = props
    const classActive = "border-pink-500 border-b-4 pb-2"
    const oi = active == "estoque" ? classActive: ""
    const oi2 = active == "modelos" ? classActive: ""
    const oi3 = active == "filiais" ? classActive: ""

    return (
        <nav className="flex w-full justify-between items-center px-4 py-2">
            <div>
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" width={115} height={74} alt=""/>
                    <h1 className="text-4xl font-bold ml-10 text-c50">Deluxe Games</h1>
                </div>
            </div>
            <div className="mr-50">
                <ul className="flex gap-24">
                    <li className={`text-c50 text-[23px] ${oi}`}><Link href="/"><span className="text-customPink font-semibold">E</span>stoque</Link></li>
                    <li className={`text-c50 text-[23px] ${oi2}`}><Link href="/modelos"><span className="text-customPink font-semibold">M</span>odelos VG</Link></li>
                    <li className={`text-c50 text-[23px] ${oi3}`}><Link href="/filiais"><span className="text-customPink font-semibold">F</span>iliais</Link></li>
                </ul>
            </div>
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/300" alt="avatar do usuário" />
            </div>
        </nav>
    )
}