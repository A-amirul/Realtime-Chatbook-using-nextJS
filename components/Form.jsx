import Image from 'next/image';
import logo from "../public/assets/logo.png"
import React from 'react';
import { EmailOutlined, LockOutlined, PersonOutline } from '@mui/icons-material';
import Link from 'next/link';

const Form = ({ type }) => {
	return (
		<div className='auth'>
			<div className="content">
				<Image
					src={logo}
					alt="logo"
					className='logo'
				/>

				<form className="form">
					{
						type === "register" && (
							<div className='input'>
								<input type='text' placeholder='Username' className='input-field' />
								<PersonOutline sx={{ color: "#737373" }} />
							</div>
						)
					}

					<div className='input'>
						<input type='email' placeholder='Email' className='input-field' />
						<EmailOutlined sx={{ color: "#737373" }} />
					</div>
					<div className='input'>
						<input type='password' placeholder='Password' className='input-field' />
						<LockOutlined sx={{ color: "#737373" }} />
					</div>

					<button className='button' type='submit'>
						{
							type === "register" ? "Join Free" : "Let's Chat"
						}
					</button>

				</form>
				{
					// eslint-disable-next-line react/no-unescaped-entities
					type === "register" ? <Link href="/" className='link'><p className='text-center'>Already Have an Account?</p>Sign In Here</Link> : <Link href="/register" className='link'><p className='text-center'> Don't Have an Account?</p>Register Here</Link>
				}

			</div>
		</div>
	);
};

export default Form;