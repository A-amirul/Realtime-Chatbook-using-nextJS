"use client"
import { useSession } from 'next-auth/react';

const Chats = () => {
	const { data: session } = useSession();

	console.log("session", session);
	return (
		<div>
			chats
		</div>
	);
};

export default Chats;