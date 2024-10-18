"use client";

import PageLayout from "@/components/layout/page-layout";
import VideoCard from "@/components/onchain/video-card";
import React, {useState} from "react";
import {FaRegCirclePlay} from "react-icons/fa6";
import {PiVideoFill} from "react-icons/pi";

export default function Onchain() {
	return (
		<PageLayout title="Base Ecosystem">
			<div className="grid md:grid-cols-2 gap-6 *:rounded-lg *:p-2 *:bg-slate-900">
				{/* <VideoCard /> */}
				<div className="space-y-3">
					<div className="h-52 w-full bg-secondary-100/50 rounded-lg relative">
						<span className="absolute bottom-4 left-4">
							<FaRegCirclePlay className="text-primary text-2xl" />
						</span>
					</div>
					<div>
						<h1 className="flex gap-2 items-center text-xl font-medium">
							<span>
								<PiVideoFill className="text-xl text-primary" />
							</span>
							Looking Ahead (Base Vision)
						</h1>
						<span className="mt-2 rounded-full bg-slate-600 p-1 px-[5px] font-medium text-sm flex items-center w-fit gap-1">
							<img
								src="/Images/Base_Symbol_Blue.svg"
								width={20}
								alt="_base"
							/>
							Base
						</span>
					</div>
				</div>
				<div className="space-y-3">
					<div className="h-52 w-full bg-secondary-100/50 rounded-lg relative">
						<span className="absolute bottom-4 left-4">
							<FaRegCirclePlay className="text-primary text-2xl" />
						</span>
					</div>
					<div>
						<h1 className="flex gap-2 items-center text-xl font-medium">
							<span>
								<PiVideoFill className="text-xl text-primary" />
							</span>
							Why Onchain
						</h1>
						<span className="mt-2 rounded-full bg-slate-600 p-1 px-[5px] font-medium text-sm flex items-center w-fit gap-1">
							<img
								src="/Images/Base_Symbol_Blue.svg"
								width={20}
								alt="_base"
							/>
							Base
						</span>
					</div>
				</div>
				<div className="space-y-3">
					<div className="h-52 w-full bg-secondary-100/50 rounded-lg relative">
						<span className="absolute bottom-4 left-4">
							<FaRegCirclePlay className="text-primary text-2xl" />
						</span>
					</div>
					<div>
						<h1 className="flex gap-2 items-center text-xl font-medium">
							<span>
								<PiVideoFill className="text-xl text-primary" />
							</span>
							Base Year 2 Vision
						</h1>
						<span className="mt-2 rounded-full bg-slate-600 p-1 px-[5px] font-medium text-sm flex items-center w-fit gap-1">
							<img
								src="/Images/Base_Symbol_Blue.svg"
								width={20}
								alt="_base"
							/>
							Base
						</span>
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
