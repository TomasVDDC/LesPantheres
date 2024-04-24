"use client"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

const NavLink = ({
	index,
	name,
	path,
}: {
	index: any
	name: any
	path: any
}) => {
	const pathname = usePathname()

	const isActive = pathname === path
	const activeClass = isActive ? "underline" : ""

	return (
		<div className={`text-[20px] text-white ${activeClass}`} key={index}>
			<Link href={path}>{name}</Link>
		</div>
	)
}

export default NavLink
