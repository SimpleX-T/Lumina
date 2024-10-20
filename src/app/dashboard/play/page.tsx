"use client";
import React, { useState } from "react";
import { Play, Pause, Download, Image as ImageIcon } from "lucide-react";
import PrevNextButton from "@/components/dashboard/PrevNextButton";

const CourseContentLayout = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [videoOn, setVideoOn] = useState<boolean>(false);

	return (
		<div className='mal mx-auto p-4 md:p-6 lg:p-8 space-y-4'>
			<h1 className='text-3xl font-bold mb-8'>Course Title</h1>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				<div className='lg:col-span-2 space-y-6 overflow-y-scroll md:max-h-[650px] xl:max-h-[800px]'>
					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							The Magic Notebook 📒🪄
						</h2>
						<p>
							Imagine you and your friends have a special notebook
							📒. This notebook is magical🪄 because everyone has
							an exact copy of it, and whenever someone writes🖋️
							something new, all the copies update at the same
							time. That's kind of what a blockchain ⛓️‍💥 is – it's
							like a{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								digital notebook that many people share.
							</i>
						</p>
					</div>

					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/Images/Notebook-pana.svg'
							alt='Course visual 1'
							className='w-full h-full md:object-cover object-contain'
						/>
					</div>

					<div className='bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between'>
						<h2 className='text-xl font-semibold mb-4'>
							Permanent Notes 📝
						</h2>
						<p>
							Now, let's say you use this notebook 📒 to keep
							track of who owns what pokemon cards 🃏 in your
							group. Whenever someone trades a card, you write it
							down: "Jane gave her Pikachu card to Tom." Once it's
							written down, nobody can erase it or change it
							without everyone knowing. This is one of the cool
							things about blockchain ⛓️‍💥 –{" "}
							<i className='font-extralight text-[#8ea9e9]'>
								it keeps a record that's hard to cheat or change
							</i>
						</p>
					</div>

					<div className='bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto'>
						<img
							src='/Images/Safe-bro.svg'
							alt='Course visual 2'
							className='w-full h-full object-cover'
						/>
					</div>

          {/* Text Content 3 */}
          <div className="bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-4">
              Who can write where ? 🖋️
            </h2>
            <p>
              But who gets to write in this notebook 📒? In a blockchain ⛓️‍💥,
              instead of just one person being in charge, everyone can help
              maintain the notebook 📒. It's like if your whole class worked
              together to keep the notebook accurate, rather than just the
              teacher being in charge. This is what people mean when they say
              blockchain ⛓️‍💥 is{" "}
              <i className="font-extralight text-[#8ea9e9]">"decentralized"</i>{" "}
              – no single person is in control.
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
            <img
              src="/Images/decent.svg"
              alt="Course visual 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#001123] shadow-lg rounded-lg p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-4">Summary 🗒️</h2>
            <p>
              Blockchain is a digital system for recording information in a way
              that makes it difficult or impossible to change, hack, or cheat
              the system. It's a type of shared database that stores information
              in blocks that are chained together. What makes blockchain special
              is that it's decentralized, meaning no single person or group has
              control over it. Instead, all users collectively keep the records.
              This technology is the foundation for cryptocurrencies and has
              potential uses in many other areas
            </p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-64 md:h-auto">
            <img
              src="/Images/decent.svg"
              alt="Course visual 1"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <section className="col-span-1 space-y-6 ">
          <div>
            {!videoOn && (
              <div
                className="bg-indigo-100 rounded-lg p-6 flex flex-col items-center justify-center h-64"
                onClick={() => {
                  setVideoOn(true);
                }}
              >
                <Play size={48} className="text-indigo-600 mb-4" />{" "}
                <p className="text-indigo-800 font-semibold">
                  Watch Introduction Video
                </p>
              </div>
            )}

            {videoOn && (
              <div className="space-y-6">
                <div className="relative bg-gray-800 rounded-lg overflow-hidden h-64">
                  <div className="absolute inset-0 pointer-events-none"></div>
                  <iframe
                    src="https://www.youtube.com/embed/qPgYnSY1rLU"
                    title="Lumina Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}
          </div>

          <div className="bg-indigo-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-indigo-800">
              Audio Lesson
            </h3>
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <div className="flex-1 mx-4 h-2 bg-indigo-200 rounded-full">
                <div className="w-1/3 h-full bg-indigo-500 rounded-full"></div>
              </div>
              <span className="text-indigo-800">2:30 / 7:15</span>
            </div>
            <button className="flex items-center text-indigo-700 hover:text-indigo-900 transition-colors">
              <Download size={20} className="mr-2" />
              Download Audio
            </button>
          </div>
          <div className="bg-yellow-100 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-yellow-800">
              Lesson Slides
            </h3>
            <div className="flex justify-between items-center flex-col xl:flex-row">
              <ImageIcon size={40} className="text-yellow-600" />
              <button className="flex items-center bg-yellow-500 text-white xl:px-4 xl:py-2 py-1 px-3 rounded hover:bg-yellow-600 transition-colors">
                <Download size={20} className="mr-2" />
                Download PDF
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseContentLayout;
