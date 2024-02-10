import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

function Header() {
  return (
    <header>
      <Link href="/">
        <Image
          src="https://links.papareact.com/xsi"
          alt="Logo"
          width={150}
          height={150}
        ></Image>
      </Link>

      <form className="flex items-center bg-white rounded-full w-full">
        <input type="text" placeholder="Search Everything..."/>
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
