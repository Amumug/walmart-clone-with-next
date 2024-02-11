import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";


function Header() {
  return (
    <header className="flex bg-walmart">
      <Link href="/">
        <Image
          src="https://links.papareact.com/yur"
          alt="Logo"
          width={150}
          height={150}
        ></Image>
      </Link>

      <form className="flex items-center rounded-full w-full flex-1">
        <input type="text" placeholder="Search Everything..." className="flex-1 px-4 rounded-full"/>
        <button>
          <Search 
            className="rounded-full h-10"
          />
        </button>
      </form>
    </header>
  );
}

export default Header;
