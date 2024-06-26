"use client"
import { Logout } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link"
import { usePathname } from "next/navigation";
import Image from 'next/image';
import logo from "../public/assets/logo.png"
import profileImage from "../public/assets/person.jpg"

const TopBar = () => {
	const pathname = usePathname();
	const { data: session } = useSession();
	const user = session?.user;

	const handleLogout = async () => {
		signOut({ callbackUrl: "/" });
	}

	return (
		<div className="topbar">
			<Link href="/chats">
				<img
					src={logo}
					alt="logo"
					className='logo'
				/>
			</Link>
			<div className="menu">
				<Link href="/chats" className={`${pathname === "/chats" ? "text-red-1"
					: ""} text-heading4-bold`}>Chats</Link>
				<Link href="/contacts" className={`${pathname === "/contacts" ? "text-red-1"
					: ""} text-heading4-bold`}>Contacts</Link>
				<Logout sx={{ color: "#737373", cursor: "pointer" }} onClick={handleLogout} />
				<Link href="/profile"><img src={user?.profileImage || profileImage} alt="profile" className="profilePhoto" />
				</Link>
			</div>

		</div>
	);
};

export default TopBar;