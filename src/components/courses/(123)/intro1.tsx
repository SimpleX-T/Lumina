const Courses = () => {
  //     <a href="https://storyset.com/education">
  //       Education illustrations by Storyset
  //     </a>;
  return (
    <div className="grid place-content-center w-full">
      <article className="w-full flex flex-col justify-center items-start py-6">
        <span className="md:text-2xl text-xl px-8 leading-loose flex flex-col md:flex-row justify-center items-center gap-5">
          <span>
            <h4 className="md:text-5xl text-4xl font-semibold mb-8 ">
              What is a Blockchain 🤷🏾‍♂️?
            </h4>{" "}
            Imagine you and your friends have a special notebook 📒. This
            notebook is magical🪄 because everyone has an exact copy of it, and
            whenever someone writes🖋️ something new, all the copies update at
            the same time. That's kind of what a blockchain ⛓️‍💥 is – it's like a{" "}
            <i className="font-extralight text-[#8ea9e9]">
              digital notebook that many people share.
            </i>
          </span>

          <img src="/Images/Notebook-pana.svg" className="lg:w-2/5" />
        </span>
        <span className="md:text-2xl text-xl px-8 leading-loose flex flex-col md:flex-row-reverse justify-center items-center gap-5 my-3">
          <span>
            {" "}
            Now, let's say you use this notebook 📒 to keep track of who owns
            what pokemon cards 🃏 in your group. Whenever someone trades a card,
            you write it down: "Jane gave her Pikachu card to Tom." Once it's
            written down, nobody can erase it or change it without everyone
            knowing. This is one of the cool things about blockchain ⛓️‍💥 –{" "}
            <i className="font-extralight text-[#8ea9e9]">
              it keeps a record that's hard to cheat or change
            </i>
          </span>

          <img src="/Images/Safe-bro.svg" className="lg:w-2/5" />
        </span>
        <span className="md:text-2xl text-xl  px-8 leading-loose flex flex-col md:flex-row justify-center items-center gap-5">
          <span>
            But who gets to write in this notebook 📒? In a blockchain ⛓️‍💥,
            instead of just one person being in charge, everyone can help
            maintain the notebook 📒. It's like if your whole class worked
            together to keep the notebook accurate, rather than just the teacher
            being in charge. This is what people mean when they say blockchain
            ⛓️‍💥 is{" "}
            <i className="font-extralight text-[#8ea9e9]">"decentralized"</i> –
            no single person is in control.
          </span>

          <img src="/Images/decent.svg" className="lg:w-2/5" />
        </span>
      </article>
      <button className="py-3 px-4 bg-">Download Slides</button>
      <button>Video</button>
      <button>Audio</button>
    </div>
  );
};
export default Courses;
