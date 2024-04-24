import Header from "../components/Header"
import "./globals.css"
import Footer from "@/components/Footer"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div>
					<Header />
					<div className="container mx-auto">{children}</div>
				</div>
				<Footer />
			</body>
		</html>
	)
}
