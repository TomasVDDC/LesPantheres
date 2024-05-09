import React from "react"
import Link from "next/link"
//import { Zoom } from "react-awesome-reveal";

const Header = () => {
	const navLinks = [
		// { name: "About", path: "/about" },
		// { name: "Work", path: "/" },
		// { name: "Sheet music", path: "/sheet-music" },
		// { name: "Contact", path: "/contact" },
	]

	return (
		<div className="mx-auto mb-[50px]">
			{/* <Zoom duration={500} triggerOnce> */}
			<header
				className={`flex flex-col sm:text-center  md:text-left md:flex-row justify-between items-center  mx-auto py-4  mt-[30px]  md:mt-[80px]`}
			>
				<div>
					<Link className={`text-[60px]  font-bold text-white`} href="/">
						Plane visualization
					</Link>
					<p className="text-[20px] text-zinc-300">
						Data Visualization EPFL 2024
					</p>
				</div>
				{/* <div className="flex space-x-10 mt-5 md:mt-0">
						{navLinks.map((link, index) => {
							return (
								<NavLink
									key={index}
									name={link.name}
									path={link.path}
									index={index}
								/>
							)
						})}
					</div> */}
			</header>
			<hr />
			{/* </Zoom> */}
		</div>
	)
}

export default Header
