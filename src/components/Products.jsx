export default function Products() {
  return (
    <section className="px-[6%] pt-16 pb-20">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-[2.4rem] text-[#1E4D3B]">Fresh picks</h2>
        <a href="/shop" className="text-[0.95rem] text-[#E86A7C] font-bold font-sans">View all →</a>
      </div>
      <div className="flex gap-3 mb-10">
        <span className="px-5.5 py-2.5 rounded-lg border text-[0.88rem] font-sans font-semibold bg-[#E86A7C] border-[#E86A7C] text-white">All</span>
        <span className="px-5.5 py-2.5 rounded-lg border text-[0.88rem] font-sans font-semibold bg-white border-[#E6ECE8] text-[#5A6660]">Roses</span>
        <span className="px-5.5 py-2.5 rounded-lg border text-[0.88rem] font-sans font-semibold bg-white border-[#E6ECE8] text-[#5A6660]">Bouquets</span>
        <span className="px-5.5 py-2.5 rounded-lg border text-[0.88rem] font-sans font-semibold bg-white border-[#E6ECE8] text-[#5A6660]">Succulents</span>
        <span className="px-5.5 py-2.5 rounded-lg border text-[0.88rem] font-sans font-semibold bg-white border-[#E6ECE8] text-[#5A6660]">Wildflowers</span>
        <span className="px-5.5 py-2.5 rounded-lg border text-[0.88rem] font-sans font-semibold bg-white border-[#E6ECE8] text-[#5A6660]">Gift baskets</span>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex gap-7">
          <Product image="photo-1518709268805-4e9042af9f23" alt="Red Roses" category="Roses" name="Red Rose Bouquet" description="Twelve hand-selected long-stem red roses, wrapped in kraft paper." price="₦4,500" />
          <Product image="photo-1597848212624-a19eb35e2651" alt="Sunflowers" category="Wildflowers" name="Sunflower Bundle" description="Six vibrant sunflowers wrapped with dried wheat stems and twine." price="₦3,200" />
          <Product image="photo-1526047932273-341f2a7631f9" alt="Lavender Dream" category="Bouquets" name="Lavender Dream" description="A soft mix of lavender, baby's breath, and white daisies." price="₦5,800" />
          <Product image="photo-1459411552884-841db9b3cc2a" alt="Succulents" category="Succulents" name="Mini Cactus Trio" description="Three hand-potted cacti in terracotta pots. Low maintenance." price="₦6,500" />
        </div>
        <div className="flex gap-7">
          <Product image="photo-1563241527-3004b7be0ffd" alt="Pink Roses" category="Roses" name="Blush Pink Roses" description="Soft pink garden roses with eucalyptus sprigs, tied in ribbon." price="₦4,000" />
          <Product image="photo-1508610048659-a06b669e3321" alt="Autumn Wildflowers" category="Gift Baskets" name="Autumn Wildflower Basket" description="A wicker basket of warm-toned blooms — marigold, rudbeckia, and thistles." price="₦9,500" />
          <Product image="photo-1485955900006-10f4d324d411" alt="Succulent Box" category="Succulents" name="Succulent Garden Box" description="A curated wooden box with eight mixed succulents and pebble top dressing." price="₦11,000" />
          <Product image="photo-1520763185298-1b434c919102" alt="Tulip Mix" category="Bouquets" name="Tulip Mix Bouquet" description="A cheerful mix of red, white, and pink tulips in a glass vase." price="₦7,200" />
        </div>
      </div>
    </section>
  );
}

function Product({ image, alt, category, name, description, price }) {
  return (
    <div className="flex-1 bg-white rounded-xl border border-[#E6ECE8] overflow-hidden">
      <div className="h-57.5 overflow-hidden">
        <img src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=600&q=80`} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="p-[1.4rem]">
        <p className="text-[0.72rem] text-[#E86A7C] font-sans uppercase font-extrabold tracking-[0.08em] mb-1">{category}</p>
        <p className="text-[1.15rem] font-bold mb-1.5 text-[#1A211E]">{name}</p>
        <p className="text-[0.88rem] text-[#5A6660] font-sans leading-normal mb-4.5">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[1.2rem] font-extrabold text-[#1E4D3B] font-sans">{price}</span>
          <span className="bg-[#E86A7C] text-white px-4.5 py-2.5 rounded-lg text-[0.85rem] font-sans font-bold">Add to cart</span>
        </div>
      </div>
    </div>
  );
}
