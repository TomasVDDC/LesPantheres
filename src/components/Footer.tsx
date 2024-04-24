import React from "react"

const Footer = () => {
	return (
		<footer className=" border-t-[1px] text-white mt-[120px] py-10 bg-black">
			<div className="flex container justify-between mx-auto align-middle">
				{/* <div className="flex space-x-6">
					<a href="https://www.linkedin.com" target="_blank">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
							alt="LinkedIn logo"
							className="h-[30px] w-[30px]"
						/>
					</a>
					<a href="https://www.spotify.com" target="_blank">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
							alt="Spotify logo"
							className="h-[30px] w-[30px]"
						/>
					</a>
					<a href="https://www.soundcloud.com" target="_blank">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Antu_soundcloud.svg"
							alt="Soundcloud logo"
							className="h-[30px] w-[30px]"
						/>
					</a>
				</div> */}
				<div className={`text-[18px] ms-2 text-white`}>
					Data Visualization EPFL 2024
				</div>

				{/* <div className="flex">
						<p>
							<a
								href="mailto:leo.adams.music@gmail.com"
								style={{ color: "white" }}
								className="me-3"
							>
								leo.adams.music@gmail.com
							</a>
						</p>
						<a
							href="https://www.linkedin.com/in/leo-adams-05511a257/"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "white" }}
						>
							<FaLinkedin size={24} />
						</a>
					</div> */}
			</div>
		</footer>
	)
}

export default Footer
