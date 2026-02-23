export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
          【実体験から判明】親に贈る<br className="hidden md:block" />
          <span className="text-blue-600">リハビリシューズ</span>、楽天で買うならどれ？
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          なぜ普通の靴では転ぶのか？理学的根拠に基づいた「失敗しない3つのチェックポイント」を公開。
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#comparison" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transition">
            人気5商品の比較を見る
          </a>
        </div>
      </div>
    </section>
  )
}
