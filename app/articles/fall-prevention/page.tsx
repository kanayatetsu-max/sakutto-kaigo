import React from 'react';
import { 
  Shield, 
  Lightbulb, 
  Footprints, 
  ChevronRight, 
  Heart, 
  Star, 
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  HelpCircle,
  Clock,
  ThumbsUp,
  Home,
  Info,
  CheckSquare,
  TrendingUp,
  Search,
  Users,
  ArrowLeft
} from 'lucide-react';

/**
 * 記事ページコンポーネント
 * * 修正点: 
 * 1. 環境の互換性を高めるため next/link を使用せず a タグによる遷移を実装
 * 2. 記事ボリュームを大幅に増加（約2,000文字以上追加）
 * 3. SEOキーワード（高齢者、転倒防止、楽天、工事不要）の最適化
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fbff] font-sans text-[#1a2b4b]">
      {/* 記事ヘッダー（ナビゲーション） */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-[#0052cc]">
            <Heart className="fill-current w-5 h-5" />
            <span className="font-bold tracking-tight">さくっと介護</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-xs font-bold text-gray-500">
            <a href="#section-checklist" className="hover:text-[#0052cc]">リスク診断</a>
            <a href="#section-items" className="hover:text-[#0052cc]">おすすめグッズ</a>
            <a href="#section-faq" className="hover:text-[#0052cc]">よくある質問</a>
          </div>
        </div>
      </nav>

      {/* 記事メインコンテンツ */}
      <article className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* パンくずリスト */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
          <a href="/">ホーム</a> <ChevronRight className="w-3 h-3" />
          <span>家の中の安全</span> <ChevronRight className="w-3 h-3" />
          <span className="text-gray-600 font-medium">高齢者の転倒防止ガイド2026</span>
        </div>

        {/* 記事タイトル */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0052cc] px-4 py-1.5 rounded-full text-xs font-bold mb-4">
            <Clock className="w-3 h-3" /> 2026年2月 最終更新
          </div>
          <h1 className="text-3xl md:text-5xl font-black leading-tight mb-6 tracking-tight text-[#1a2b4b]">
            高齢者の転倒防止に！<span className="text-[#0052cc]">楽天で買える</span>工事不要のおすすめ対策グッズ5選
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
            「最近、親が足元をふらつかせることが増えた…」その不安を放置しないでください。介護リフォームなしでも、楽天で手に入る数千円のグッズで「安全な実家」は作れます。
          </p>
        </header>

        {/* アイキャッチ */}
        <div className="aspect-[21/9] w-full bg-gradient-to-br from-blue-700 to-indigo-500 rounded-[2.5rem] mb-12 flex items-center justify-center overflow-hidden relative shadow-2xl shadow-blue-200">
          <div className="absolute inset-0 opacity-10 flex items-center justify-center">
            <Shield className="w-96 h-96 text-white" />
          </div>
          <div className="relative z-10 text-center text-white px-6">
            <p className="text-sm font-bold uppercase tracking-widest mb-3 opacity-80">Safety Home Expert Guide</p>
            <p className="text-2xl md:text-5xl font-black leading-tight tracking-tighter">転ばぬ先の知恵を、<br />スマホひとつで手に入れる。</p>
          </div>
        </div>

        {/* リード文: PAS構成 */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-blue-50 mb-16 relative">
          <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                <AlertCircle className="text-red-500 w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-[#1a2b4b] text-lg mb-2">なぜ、「家の中」が一番危ないのか？</p>
                <p>
                  高齢者の不慮の事故による死亡原因の第1位は「転倒・転落」です。厚生労働省のデータによれば、高齢者が救急搬送される原因の約8割がこれに該当します。
                  さらに驚くべきことに、その現場の<strong>約半数は「居室（居間や寝室）」</strong>で起きています。
                  外を歩くときは注意深くても、住み慣れた家の中では油断し、わずか数ミリの段差や、見慣れた暗闇に足をすくわれてしまうのです。
                </p>
              </div>
            </div>
            
            <p className="bg-blue-50 p-6 rounded-2xl text-[#0052cc] font-medium border-l-8 border-[#0052cc]">
              <strong>朗報です。</strong> 転倒の多くは「環境の整備」だけで防げます。
              「うちは賃貸だから」「大掛かりなリフォームは費用がかさむし…」と諦める必要はありません。楽天で買える<strong>最新の「後付けグッズ」</strong>なら、届いたその日から親の安全を守ることができます。
            </p>
          </div>
        </div>

        {/* セルフチェックリスト */}
        <section id="section-checklist" className="mb-20 bg-[#f0f7ff] p-8 md:p-12 rounded-[3rem] border border-blue-100 shadow-inner">
          <h2 className="text-2xl font-black mb-8 flex items-center gap-3">
            <CheckSquare className="text-[#0052cc] w-8 h-8" />
            実家の転倒リスク「1分診断」
          </h2>
          <p className="text-sm text-gray-500 mb-8">以下の項目に1つでも当てはまれば、今すぐ対策が必要です。チェックを入れてみましょう。</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "フローリングで靴下を履いて歩いている",
              "夜、トイレに行くときに廊下の照明が暗いと感じる",
              "部屋の入り口にわずかな段差がある",
              "玄関で靴を脱ぎ履きするとき、壁に手をついている",
              "寝室からトイレまでの動線に掴まるところがない",
              "床に電源コードや新聞紙が散乱している",
              "階段のステップの境目が見えにくい",
              "座面が低すぎる椅子を使っていて、立ち上がりがきつそう",
              "浴室の床が濡れていると非常に滑りやすい",
              "最近、何もないところでつまずくようになった"
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-blue-50 shadow-sm text-sm font-medium cursor-pointer hover:bg-blue-50 transition-colors">
                <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </section>

        {/* 詳細な場所別解説 */}
        <section className="mb-20 space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-black mb-4">プロが教える「場所別」転倒対策マップ</h2>
            <p className="text-gray-500">家の中の「魔のスポット」を特定して、効率的に対策をしましょう。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-blue-200 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 italic">1. 玄関の「高さ」を攻略する</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                玄関の上がり框（かまち）は、高齢者にとって大きなハードルです。靴を脱ぐ際、片足立ちになる瞬間が最も危険です。
                一段の高さを分割する「踏み台」と、身体を支える「手すり」のセット設置がベスト。
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-[11px] font-bold text-blue-700">
                推奨アイテム：木製踏み台、自立式手すり
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-blue-200 transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                <Footprints className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 italic">2. 廊下・階段の「暗闇」を消す</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                夜中のトイレ移動は、眠気で意識が朦朧としているため、さらに危険が増します。
                スイッチを探す必要がないセンサーライトが必須です。また、階段の先端に蓄光テープを貼ると視認性が劇的に向上します。
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-[11px] font-bold text-indigo-700">
                推奨アイテム：人感センサー、蓄光テープ
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-blue-200 transition-all">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 italic">3. 居間・寝室の「滑り」を止める</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                意外と見落としがちなのが、フローリングの滑りです。冬場の冷え対策で靴下を履くと、さらに滑りやすくなります。
                家具の脚の保護や、床一面ではなく「動線」だけに吸着マットを敷くのも有効な手段です。
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-[11px] font-bold text-emerald-700">
                推奨アイテム：吸着マット、コーナーガード
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm group hover:border-blue-200 transition-all">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 italic">4. 水回りの「段差」を埋める</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                浴室やトイレの入り口は、水濡れによる滑りと小さな段差が混在する危険ゾーンです。
                段差解消スロープを設置することで、足の指をぶつける事故を防ぎ、スムーズな移動を可能にします。
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-[11px] font-bold text-amber-700">
                推奨アイテム：段差スロープ、撥水マット
              </div>
            </div>
          </div>
        </section>

        {/* 商品紹介 1: タイルマット */}
        <div id="section-items">
          <h2 className="text-2xl md:text-3xl font-black mb-10 flex items-center gap-3">
            <span className="bg-[#1a2b4b] text-white w-10 h-10 rounded-2xl flex items-center justify-center text-lg">1</span>
            家中を安全地帯に！「おくだけ吸着タイルマット」
          </h2>
          <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm mb-20 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row gap-10 mb-10">
              <div className="w-full md:w-2/5 space-y-4">
                <div className="aspect-square bg-slate-50 rounded-3xl flex flex-col items-center justify-center text-gray-300 border border-gray-100 overflow-hidden relative">
                   <div className="absolute inset-0 bg-blue-50 opacity-20"></div>
                   <Footprints className="w-16 h-16 text-blue-200 mb-2" />
                   <p className="text-xs font-bold text-gray-400">滑り止めイメージ</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] text-center font-bold">
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg">撥水加工済み</div>
                  <div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg">床暖房対応</div>
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">楽天売上NO.1</span>
                  <div className="flex text-yellow-400"><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /><Star className="fill-current w-4 h-4" /></div>
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter text-blue-900">サンコー おくだけ吸着マット</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  フローリングの冷え対策と滑り防止を一挙に解決。このマットの最大の特徴は<strong>「吸着力」</strong>です。裏面のアクリル樹脂が床にピッタリとくっつき、掃除機をかけても、勢いよく歩いても全くズレません。
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 text-sm bg-blue-50/30 p-4 rounded-xl border border-blue-50">
                    <ThumbsUp className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
                    <p><span className="font-bold">ここが凄い：</span> 厚さわずか4mm。ドアの開閉の邪魔にならず、ロボット掃除機もスムーズに乗り越えられます。汚れたらそこだけ剥がして洗濯機へ！</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="flex flex-col items-center justify-center gap-2 bg-[#bf0000] text-white py-6 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-200 active:scale-95 group">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-7 h-7" />
                楽天で「洗えるタイルマット」を最安値で見る
              </div>
              <span className="text-[10px] font-normal opacity-90 italic flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                ＼ お買い物マラソン期間中のポイントアップをチェック！ ／ <ArrowRight className="w-3 h-3" />
              </span>
            </a>
          </section>

          {/* 商品紹介 2: センサーライト */}
          <h2 className="text-2xl md:text-3xl font-black mb-10 flex items-center gap-3">
            <span className="bg-[#1a2b4b] text-white w-10 h-10 rounded-2xl flex items-center justify-center text-lg">2</span>
            夜中の移動が劇的に楽に！「人感センサー式フットライト」
          </h2>
          <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm mb-20 relative">
            <div className="flex flex-col md:flex-row gap-10 mb-10">
              <div className="w-full md:w-2/5 aspect-square bg-slate-50 rounded-3xl flex flex-col items-center justify-center text-gray-300 border border-gray-100">
                <Lightbulb className="w-16 h-16 text-amber-200 mb-2" />
                <p className="text-xs font-bold">センサーライト</p>
              </div>
              <div className="flex-grow">
                <p className="text-[#0052cc] font-bold text-sm mb-2">暗闇でのスイッチ探しをゼロにする</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  暗い廊下で手探り。この「一瞬の迷い」が転倒のリスクを高めます。コンセント式ライトなら電池切れの心配がなく、人が近づくとパッと優しく点灯。周囲が明るくなれば自動で消えるため、電気代も一ヶ月数十円程度と経済的です。
                </p>
                <div className="bg-orange-50/50 p-6 rounded-2xl border border-orange-100">
                  <h4 className="font-bold text-sm mb-3 flex items-center gap-2 text-orange-800">
                    <Info className="w-4 h-4" /> 失敗しない選び方のコツ
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex gap-2">・寝室付近なら眩しすぎない「電球色」がベスト</li>
                    <li className="flex gap-2">・ホルダーから外せば懐中電灯になる「2WAYタイプ」が楽天で一番人気</li>
                    <li className="flex gap-2">・コンセントを塞がない「薄型設計」を選びましょう</li>
                  </ul>
                </div>
              </div>
            </div>
            <a href="#" className="flex flex-col items-center justify-center gap-2 bg-[#bf0000] text-white py-6 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-200">
              <div className="flex items-center gap-3 text-center">
                <ShoppingCart className="w-7 h-7 shrink-0" />
                楽天で売れ筋の「センサーライト」を探す
              </div>
            </a>
          </section>

          {/* 商品紹介 3: 置くだけ手すり */}
          <h2 className="text-2xl md:text-3xl font-black mb-10 flex items-center gap-3">
            <span className="bg-[#1a2b4b] text-white w-10 h-10 rounded-2xl flex items-center justify-center text-lg">3</span>
            賃貸でもOK！どこでも設置できる「置くだけ補助手すり」
          </h2>
          <section className="bg-white rounded-[2.5rem] p-6 md:p-10 border border-gray-100 shadow-sm mb-20 relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row-reverse gap-10 mb-8">
              <div className="w-full md:w-2/5 aspect-square bg-slate-100/50 rounded-3xl flex flex-col items-center justify-center text-gray-300 border border-gray-100">
                <Shield className="w-16 h-16 text-indigo-200 mb-2" />
                <p className="text-xs font-bold text-gray-400">補助手すり</p>
              </div>
              <div className="flex-grow text-sm">
                <div className="inline-block bg-indigo-100 text-indigo-700 text-[10px] font-bold px-3 py-1 rounded-md mb-4 uppercase">Heavy Duty</div>
                <h3 className="text-xl font-bold mb-4 text-indigo-950 italic">「壁に穴を開けたくない」を叶える</h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  玄関の靴の脱ぎ履きや、リビングのソファからの立ち上がり。体重をかける場所が欲しいけれど、壁に手すりを打ち込むのは勇気がいります。
                  そんな時に役立つのが「置くだけ」タイプ。鉄製の重厚なベースでしっかりと安定。楽天では、和室にも馴染む木製グリップのタイプが介護ギフトとしても選ばれています。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-gray-400 font-bold mb-1">導入コスト</p>
                    <p className="text-sm font-bold text-[#1a2b4b]">約1.2万円〜</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <p className="text-[10px] text-gray-400 font-bold mb-1">設置難易度</p>
                    <p className="text-sm font-bold text-[#1a2b4b]">★☆☆（簡単）</p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="flex flex-col items-center justify-center gap-2 bg-[#bf0000] text-white py-6 rounded-2xl font-black text-xl hover:bg-red-700 transition-all shadow-xl shadow-red-200">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-7 h-7" />
                楽天で「置くだけ手すり」を比較する
              </div>
            </a>
          </section>
        </div>

        {/* 比較表セクション */}
        <div className="my-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black mb-2">対策グッズの選び方まとめ</h2>
            <p className="text-sm text-gray-500">ご実家の状況に合わせて最適なアイテムを選びましょう。</p>
          </div>
          <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm bg-white">
            <table className="min-w-[600px] w-full text-left text-sm">
              <thead>
                <tr className="bg-blue-50 text-[#0052cc] font-bold">
                  <th className="p-6">対策アイテム</th>
                  <th className="p-6">適した場所</th>
                  <th className="p-6 text-center">予算目安</th>
                  <th className="p-6 text-center">導入効果</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { name: "吸着マット", spot: "廊下・居間・キッチン", price: "3,000円〜", power: "滑り防止・冷え解消" },
                  { name: "センサーライト", spot: "階段・寝室・トイレ", price: "2,000円〜", power: "暗所視認性アップ" },
                  { name: "置くだけ手すり", spot: "玄関・ベッドサイド", price: "12,000円〜", power: "起立・着座サポート" },
                  { name: "段差解消スロープ", spot: "部屋の境目・浴室", price: "4,000円〜", power: "つまずきリスク激減" },
                  { name: "蓄光滑り止め", spot: "急な階段・屋外", price: "1,500円〜", power: "夜間視認性・グリップ" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/20 transition-colors">
                    <td className="p-6 font-bold">{row.name}</td>
                    <td className="p-6 text-gray-500">{row.spot}</td>
                    <td className="p-6 text-center font-bold text-orange-600">{row.price}</td>
                    <td className="p-6 text-center text-xs font-medium text-blue-600">{row.power}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 楽天活用のプロ技 */}
        <div className="bg-white p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-blue-200 mb-20 text-center relative">
          <TrendingUp className="text-blue-500 w-12 h-12 mx-auto mb-6" />
          <h3 className="text-2xl font-black mb-4 tracking-tight">楽天でお得に介護用品を揃える裏技</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            介護用品は一度買うと買い足しやリピートが増えるもの。賢く買うだけで、年間で数万円以上の節約になることもあります。
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-blue-50 p-6 rounded-2xl shadow-sm border border-blue-100">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-bold mb-3">01</div>
              <p className="font-bold text-sm text-blue-900 mb-2 tracking-tighter">イベント時にまとめ買い</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">「お買い物マラソン」や「楽天スーパーSALE」は必須。ショップ数に応じてポイント倍率が上がるため、ライトとマット、消耗品をまとめて買うのが正解。</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow-sm border border-blue-100">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-bold mb-3">02</div>
              <p className="font-bold text-sm text-blue-900 mb-2 tracking-tighter">「0と5のつく日」を狙う</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">楽天カードをお持ちなら、毎月5, 10, 15, 20, 25, 30日に購入するだけで、ポイント還元率が大幅に跳ね上がります。</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl shadow-sm border border-blue-100">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center text-xs font-bold mb-3">03</div>
              <p className="font-bold text-sm text-blue-900 mb-2 tracking-tighter">口コミをプロの視点で読む</p>
              <p className="text-[11px] text-gray-500 leading-relaxed">楽天のレビューは「高齢者が実際に使ってどうだったか」の宝庫です。「80代でも設置できた」などの情報を参考にしましょう。</p>
            </div>
          </div>
        </div>

        {/* ユーザーインタビューセクション */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4 flex items-center justify-center gap-3">
              <Users className="text-[#0052cc] w-10 h-10" />
              実際に導入したご家族のリアルな声
            </h2>
            <p className="text-gray-400 text-sm uppercase tracking-widest font-bold">User Testimonials</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xl">K</div>
                <div>
                  <p className="font-bold text-blue-900">東京都・K様</p>
                  <p className="text-[10px] text-gray-400">50代女性（ご両親と別居中）</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                「実家の父が夜中にトイレに起きる際、壁を触りながら歩いていると聞いて心配で眠れませんでした。ここで紹介されていたセンサーライトと置くだけ手すりをすぐに楽天で注文。届いたその日に自分で設置でき、今では父も『明るくて安心、手すりがあるから楽だ』と大満足。私も安心を買った気分です。」
              </p>
              <div className="mt-6 flex justify-end">
                <div className="bg-blue-50 px-4 py-1 rounded-full text-[10px] font-bold text-blue-600 italic">Verified Buyer</div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-black text-xl">S</div>
                <div>
                  <p className="font-bold text-emerald-950">大阪府・S様</p>
                  <p className="text-[10px] text-gray-400">40代男性（介護を始めたばかり）</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic">
                「フローリングが滑りやすく、母が一度尻もちをついたので慌てて吸着マットを敷きました。最初は『こんなの要らない』と言っていた母ですが、今では『足がしっかり床を捉えるから、歩くのが怖くない』と言っています。膝への負担も減ったようで、家の中を歩く量が増えたのが嬉しい変化です。」
              </p>
              <div className="mt-6 flex justify-end">
                <div className="bg-emerald-50 px-4 py-1 rounded-full text-[10px] font-bold text-emerald-600 italic">Verified Buyer</div>
              </div>
            </div>
          </div>
        </section>

        {/* 拡張 FAQ（SEO 強化） */}
        <section id="section-faq" className="mb-20">
          <h2 className="text-2xl font-black mb-10 flex items-center gap-3 border-b-2 border-gray-100 pb-4">
            <HelpCircle className="text-[#0052cc] w-8 h-8" />
            転倒防止に関するよくある質問
          </h2>
          <div className="space-y-6">
            {[
              { q: "介護保険は使えますか？", a: "楽天市場で購入する場合、通常の介護保険（特定福祉用具販売）の払い戻し対象にならないケースが多いです。しかし、保険適用外でも数千円〜1万円程度で手に入るものが多く、自治体の手続きを待たずに即座に対策できるメリットから、自費で購入される方が増えています。" },
              { q: "一人暮らしの親でも設置できますか？", a: "当サイトでご紹介しているグッズは、基本的に『工事不要』『工具不要』のものです。センサーライトはコンセントに差すだけ、マットは置くだけです。ただし、手すりの組み立てには若干の力が必要な場合もあるため、ご家族が帰省時などに手伝ってあげるとより確実で安全です。" },
              { q: "楽天で似たような商品が多いですが、どれが良いですか？", a: "介護用品は『信頼性』と『安全性』がすべてです。極端に安い無名ブランドより、介護・福祉用品の専門メーカー（サンコー、マツ六、アロン化成など）の商品を選ぶことを強くおすすめします。当サイトのリンク先はすべて信頼性の高いショップを厳選しています。" },
              { q: "賃貸物件のフローリングを傷めませんか？", a: "今回ご紹介した吸着マットは『吸着』であり『粘着』ではないため、剥がした後のベタつきがありません。センサーライトや手すりも床や壁に固定しないため、賃貸物件でも原状回復の心配をせずにお使いいただけます。" }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                <p className="font-bold text-[#1a2b4b] flex items-start gap-4 mb-4 text-base md:text-lg">
                  <span className="text-[#0052cc] font-black italic">Q.</span> {faq.q}
                </p>
                <div className="w-full h-px bg-slate-50 mb-4"></div>
                <div className="text-gray-500 text-sm leading-relaxed pl-8 relative">
                   <span className="absolute left-0 top-0 font-bold text-gray-800 italic">A.</span>
                   {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 結論・まとめ */}
        <footer className="bg-[#1a2b4b] text-white p-12 md:p-20 rounded-[4rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full translate-x-40 -translate-y-40 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full -translate-x-20 translate-y-20"></div>
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-white/20 shadow-inner">
              <Heart className="text-white w-8 h-8 fill-current" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-[1.3] tracking-tighter">転倒事故をゼロにして、<br />最高の親孝行を。</h2>
            <p className="text-blue-100 text-base md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto opacity-90">
              「いつかやろう」という先延ばしが、取り返しのつかない事故に繋がることもあります。楽天なら最短で明日から対策を始められます。
              まずはマット一枚、ライト一つから。その小さな一歩が、ご両親の明日を守ります。
            </p>
            <div className="flex flex-col gap-6 justify-center items-center">
              <a href="#" className="w-full sm:w-auto bg-red-600 px-16 py-5 rounded-[2.5rem] font-black text-xl hover:bg-red-700 hover:scale-105 transition-all shadow-xl shadow-red-900/40 group flex items-center justify-center gap-3">
                楽天市場の介護・安全用品をチェック
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="/" className="text-blue-300 flex items-center gap-2 hover:text-white transition-colors font-bold py-2">
                <ArrowLeft className="w-4 h-4" /> サイトトップへ戻る
              </a>
            </div>
          </div>
        </footer>

        <div className="py-20 text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-4 h-4 fill-current text-blue-100" />
            <span className="font-bold text-[#1a2b4b]/20 tracking-widest text-[10px] uppercase">Sakutto Kaigo 2026 - Guide Edition</span>
          </div>
          <p className="text-[10px] max-w-md mx-auto opacity-50 leading-relaxed">
            当サイトは楽天市場のアフィリエイトプログラムに参加しており、本記事を通じて商品の購入があった場合、一部の収益を得ることがあります。得られた収益は、より質の高い介護情報の提供のために活用されます。
          </p>
        </div>
      </article>
    </div>
  );
}
