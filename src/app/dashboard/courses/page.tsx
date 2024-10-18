const Courses = () => {
  return (
    <div className="grid place-content-center w-full">
      <article className="w-full flex flex-col justify-center items-start py-6">
        <h2 className="text-left text-5xl my-3 uppercase font-semibold p-5">
          blockchain FUNDAMENTALS ⛓️‍💥
        </h2>
        <span className="w-full text-xl flex md:flex-col justify-start items-start gap-3 px-5 bg-slate-800">
          <img src="/Images/intro.jpg" className="w-3/4 h-3/4" />
          <p className="w-3/4">
            In this course, you'll find resources that cover the basics of
            blockchain technology, helping you explore key concepts like
            decentralization, consensus mechanisms, and more.
          </p>
        </span>
        {/* <span className="w-full h-[5ch] bg-white"></span> */}
        <span className="text-xl px-8 leading-6">
          <h4 className="text-2xl font-semibold my-2 ">
            What is a Blockchain 🤷🏾‍♂️?
          </h4>
          Imagine you and your friends have a special notebook 📒. This notebook
          is magical🪄 because everyone has an exact copy of it, and whenever
          someone writes🖋️ something new, all the copies update at the same
          time. That's kind of what a blockchain ⛓️‍💥 is – it's like a{" "}
          <i className="font-extralight">
            digital notebook that many people share.
          </i>
        </span>
        <span className="text-xl px-8 my-5">
          Now, let's say you use this notebook 📒 to keep track of who owns what
          pokemon cards 🃏 in your group. Whenever someone trades a card, you
          write it down: "Jane gave her Pikachu card to Tom." Once it's written
          down, nobody can erase it or change it without everyone knowing. This
          is one of the cool things about blockchain ⛓️‍💥 –{" "}
          <i className="font-extralight">
            it keeps a record that's hard to cheat or change
          </i>
          .
        </span>
        <p className="text-xl px-8 my-5">
          But who gets to write in this notebook 📒? In a blockchain ⛓️‍💥, instead
          of just one person being in charge, everyone can help maintain the
          notebook 📒. It's like if your whole class worked together to keep the
          notebook accurate, rather than just the teacher being in charge. This
          is what people mean when they say blockchain ⛓️‍💥 is{" "}
          <i className="font-extralight">"decentralized"</i> – no single person
          is in control.
        </p>
      </article>
      <button className="py-3 px-4 bg-">Download Slides</button>
      <button>Video</button>
      <button>Audio</button>
    </div>
  );
};
export default Courses;
