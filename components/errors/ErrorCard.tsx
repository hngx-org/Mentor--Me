import Link from "next/link";

import React, { useEffect } from "react";

export const ErrorCard = ({ reset }: { reset: () => void }) => {
	const handleError = () => {
		resetThePage();
	};

	function resetThePage() {
		if (typeof window !== "undefined") {
			window.location.reload();
		}
	}
	useEffect(() => {
		// refresh the page
		handleError();
	}, []);

	return (
		<div
			id="error-wrapper"
			className="w-full text-white flex flex-col items-center justify-start text-[color:var(--color)] perspective-12 pt-24 lg:pt-32"
		>
			<h1
				id="error-heading"
				className="text-[5rem] sm:text-[10rem] xl:text-[15rem] uppercase"
			>
				Error
			</h1>
			<div className="text-center uppercase leading-8 z-50">
				<h2 className="text-2xl sm:text-4xl xl:text-5xl mb-6">
					Something went wrong
				</h2>
				<p className="tracking-wide mx-3">
					We're fairly sure that page used to be here, but seems to have gone
					missing. We do apologise on it's behalf.
				</p>

				<div className="mt-4 sm:mt-8">
					<div className="flex w-full justify-center gap-3 max-sm:flex-col max-sm:items-center">
						<Link
							href="/"
							className="border border-gray-200 rounded-full px-4 py-2 w-fit flex gap-2 items-center justify-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
								/>
							</svg>
							Home
						</Link>
						<button
							onClick={() => reset()}
							className="border border-gray-200 rounded-full p-2 px-4 uppercase flex gap-2 items-center justify-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
							Try again
						</button>
						<button
							onClick={handleError}
							className="border border-gray-200 rounded-full p-2 px-4 uppercase flex gap-2 items-center justify-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
								/>
							</svg>
							Refresh
						</button>
					</div>
				</div>
			</div>
			<div className="fixed bottom-0 top-0 left-0 right-0 overflow-hidden">
				<div className="cloak__container">
					<div className="cloak"></div>
				</div>
			</div>
		</div>
	);
};
