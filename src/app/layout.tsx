import Header from "../components/Header"
import "./globals.css"
import { Inter, Roboto, Poppins, Roboto_Slab } from "next/font/google"
import Footer from "@/components/Footer"

export const poppins = Poppins({
	weight: "400",
	subsets: ["latin"],
	variable: "--poppins-default",
})

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				<div>
					<div className="wave"></div>
					<div className="wave"></div>
					<div className="wave"></div>
				</div>
				<div>
					<Header />
					<div className="container mx-auto">{children}</div>
				</div>
				<Footer />
			</body>
		</html>
	)
}
