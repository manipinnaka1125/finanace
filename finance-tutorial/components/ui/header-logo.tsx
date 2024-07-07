import Link from "next/link";
import Image from "next/image";
export const HeaderLogo=()=>{
return (
    <Link href="/">
    <div className="items-center hidden lg:flex">
    <Image alt="logo image"  src="/logoipsum-226.svg" height={200} width={50}/>
    <p className="font-semibold text-white text=2xl ml-2.5">Finance</p>
    </div>
    </Link>
)
}