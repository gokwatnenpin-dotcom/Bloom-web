export default function About() {
  return (
    <main>
      <section className="bg-[#1E4D3B] px-[6%] py-20">
        <p className="text-[0.75rem] text-[#EFA834] font-sans uppercase font-extrabold tracking-[0.12em] mb-3">Our story</p>
        <h1 className="text-[3.2rem] text-white leading-[1.15] max-w-162.5">Flowers that feel like a warm hello.</h1>
      </section>
      <section className="px-[6%] py-20 max-w-212.5">
        <h2 className="text-[2.2rem] text-[#1E4D3B] mb-5">Rooted in Plateau State, made with care</h2>
        <p className="text-[1.05rem] text-[#5A6660] font-sans leading-[1.8] mb-5">
          Bloom began with a simple idea: beautiful flowers should be easy to give. We partner with local growers and independent florists to create arrangements that are seasonal, personal, and always fresh.
        </p>
        <p className="text-[1.05rem] text-[#5A6660] font-sans leading-[1.8] mb-8">
          Each bouquet is arranged by hand in our Plateau State studio, wrapped in thoughtful packaging, and sent out with a same-day delivery promise.
        </p>
        <a href="/shop" className="inline-block bg-[#E86A7C] text-white px-8 py-[15px] rounded-xl text-[0.95rem] font-sans font-bold">Explore the collection</a>
      </section>
    </main>
  );
}
