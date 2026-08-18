import React from 'react';
import { 
  Home, Sparkles, Briefcase, Activity, PiggyBank, 
  BookOpen, Compass, Heart, CheckCircle2, 
  ArrowRight, HelpCircle, Layers
} from 'lucide-react';
import { NavView } from '../types';

interface HomeGuideContentProps {
  onSelectCategory: (category: NavView) => void;
  onSelectArticle: (slug: string) => void;
}

export const HomeGuideContent: React.FC<HomeGuideContentProps> = ({
  onSelectCategory,
  onSelectArticle,
}) => {
  return (
    <article className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 lg:p-12 shadow-xs space-y-10">
      
      {/* Main Header / Title Section */}
      <header className="space-y-4 border-b border-stone-100 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
            <Home className="w-3.5 h-3.5" />
            <span>自宅生活・完全総合ガイド（2026年最新版）</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] text-stone-500 font-medium">
            <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              <CheckCircle2 className="w-3 h-3" />
              編集部ファクトチェック済み
            </span>
            <span>更新：2026年</span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
          自宅生活・在宅ワーク・おうち時間総合ガイド
        </h2>

        <div className="space-y-3 pt-2 text-[15px] leading-relaxed text-stone-700">
          <p>
            <strong>Jitakus.com（自宅ポータル）</strong>へようこそ。当サイトは、自宅で過ごす時間をより有意義で快適にするための実用情報サイトです。日々の過ごし方やアイデア、在宅ワーク、趣味、運動、学び、リフレッシュ、そして毎日の暮らしに役立つ知識をわかりやすくお届けしています。
          </p>
          <p>
            私たちの目的は、おうちでの生活に関するシンプルで実践的な情報を提供することです。数分のすきま時間から1日ゆっくり過ごす休日まで、時間・興味・予算・ライフスタイルにぴったり合ったガイドが見つかります。
          </p>
          <p>
            自宅でできる仕事や副業から、インドア趣味、フィットネス、自炊料理、勉強法、節約術、さらには移動・距離の計算まで、暮らしに役立つリソースをひとまとめにしました。
          </p>
        </div>
      </header>

      {/* Section 1: Things to Do at Home */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
          <span>自宅でできること（おうち時間の過ごし方）</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            お家での時間の過ごし方には、数え切れないほどの選択肢があります。自由な時間を楽しむために、必ずしも大きな予算や広いスペース、特別な道具を用意する必要はありません。
          </p>
          <p>
            ほんの数分のすきま時間でも、美味しいコーヒーを淹れたり、軽くストレッチをしたり、身の回りを片付けたり、音楽を聴いたり、読書を数ページ進めるだけで心地よい気分転換になります。
          </p>
          <p>
            まとまった時間があるなら、新しいスキルの習得、料理レシピへの挑戦、創作活動、映画鑑賞、ワークアウト、個人のプロジェクトに取り組むのもおすすめです。
          </p>
          <p>
            Jitakus.comでは、一人時間、カップル、家族、大人、学生など、様々なシチュエーションに応じたアイデアを整理しています。くつろぎたいときも、生産的に動きたいときも、状況に合わせた過ごし方が見つかります。
          </p>
          <p>
            予算面でも無理のない工夫を大切にしています。多くのアイデアは、家にある身近なものを活用して0円や少額ですぐに始められます。
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={() => onSelectArticle('jitaku-dekirkoto-50')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition cursor-pointer"
          >
            <span>「自宅でできること50選」の記事を見る</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 2: Things to Do When Bored */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
          <span>自宅で暇なときの過ごし方・暇つぶし</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            特に予定がなく、時間がゆっくり流れる日は誰にでもあります。退屈を感じたとき、スマートフォンの画面をただスクロールし続けるだけでなく、自由な時間を活用して楽しく有意義な体験を始めるチャンスです。
          </p>
          <p>
            新しい趣味の開拓、部屋の模様替え、丁寧な食事の準備、オンライン学習、日記を書くこと、心地よい夜のリラックス習慣づくりなど、手軽にできる工夫は豊富にあります。
          </p>
          <p>
            静かに過ごしたい方には、読書、イラスト、パズル、手芸、音楽鑑賞、カメラ、教養の学び直しなどがぴったりです。
          </p>
          <p>
            体を動かしたい方には、柔軟体操、自重トレーニング、室内ダンス、足音が響かない静かな有酸素運動などが、部屋にいながらリフレッシュするのに役立ちます。
          </p>
          <p>
            当サイトのガイドは、所要時間・難易度・費用・活動タイプごとに整理されており、今の気分に合ったアイデアをすぐに見つけられます。
          </p>
        </div>
      </section>

      {/* Section 3: Remote Work & Home-Based Jobs */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-indigo-600 shrink-0" />
          <span>自宅でできる仕事・在宅ワーク・内職</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            在宅で働くスタイルは、現代のライフスタイルにおいて重要な選択肢となりました。リモートワークは通勤の負担をなくし、生活の柔軟性を高めてくれます。また、空いた時間や個人のスキルを有効活用する手段としても実用的です。
          </p>
          <p>
            Jitakus.comでは、パソコンを使ったオンラインワーク、フリーランス、在宅事務、データ入力から、伝統的な手作業による内職（家内労働）まで、幅広い働き方を解説しています。
          </p>
          <p>
            内職には、袋詰め、製品組み立て、シール貼りなどのシンプルな作業があります。また、ライティング、デザイン、プログラミング、カスタマーサポートなど、専門知識を活かせる案件も多数存在します。
          </p>
          <p>
            ただし、すべての募集が安全とは限りません。応募前には、運営企業の実態、報酬体系、契約条件をしっかり確認することが大切です。特に高額な初期費用や不透明な登録料を求める案件には十分ご注意ください。
          </p>
          <p>
            当サイトでは、安全に仕事を探すための確認ポイントや、トラブルを防ぐための知識をわかりやすくまとめています。
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={() => onSelectArticle('jitaku-naishoku-todoku')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-800 hover:text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-lg transition cursor-pointer"
          >
            <span>「自宅に届く安全な内職」の記事を見る</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 4: Home-Based Side Jobs */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <PiggyBank className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>自宅でできる副業</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            本業や学業と並行して副収入を得たい方にとって、在宅副業は心強い味方です。適した選択肢は、スキル、確保できる時間、作業機材、これまでの経験によって異なります。
          </p>
          <p>
            スキマ時間にできる軽作業を好む方もいれば、作品販売、執筆、Web制作、オンライン指導など、得意分野を活かした取り組みに挑戦する方もいます。
          </p>
          <p>
            Jitakus.comでは、多様な副業の選択肢と、始める前に押さえておくべき現実的なポイントを客観的に解説しています。
          </p>
          <p>
            誇大な収入を約束するのではなく、それぞれの仕組みや必要な準備、注意すべきリスクを正確に理解していただくことを目指しています。
          </p>
        </div>
      </section>

      {/* Section 5: Exercise & Fitness at Home */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Activity className="w-5 h-5 text-teal-600 shrink-0" />
          <span>自宅でできる運動・フィットネス</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            運動習慣を続けるために、必ずしもジムへ通う必要はありません。室内の省スペースと自重を活用するだけで、効果的なエクササイズが十分に行えます。
          </p>
          <p>
            代表例として、ストレッチ、スクワット、ランジ、プッシュアップ、プランク、静かな有酸素運動などが挙げられます。
          </p>
          <p>
            集合住宅にお住まいの場合、騒音への配慮は欠かせません。激しい跳躍運動や重量器具を避け、足音の響かない静音種目やヨガマットの活用が推奨されます。
          </p>
          <p>
            当サイトのエクササイズガイドでは、無理のないルーティン、基本フォーム、スペース確保のコツ、継続しやすい仕組み作りに焦点を当てています。
          </p>
          <p>
            運動を始める際はご自身の体力に合わせた負荷を選び、痛みや違和感がある場合は無理をせず中断してください。
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={() => onSelectArticle('jitaku-undou')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-700 bg-teal-50 hover:bg-teal-100 px-3 py-1.5 rounded-lg transition cursor-pointer"
          >
            <span>「自宅でできる運動10選」の記事を見る</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 6: Hobbies & Indoor Activities */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Heart className="w-5 h-5 text-rose-600 shrink-0" />
          <span>自宅での趣味・インドア活動</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            趣味を持つことは、暮らしを豊かにし、新たな発見や自己成長をもたらすきっかけになります。
          </p>
          <p>
            人気のインドア趣味には、読書、デッサン、料理、ベーキング、観葉植物、手芸・編み物、楽器、ゲーム、語学学習、オンライン講座などがあります。
          </p>
          <p>
            手軽に始められるものから、経験を重ねるほど奥深さを味わえるものまで幅広く揃っています。
          </p>
          <p>
            最初から無理に大きな目標を立てず、小さなステップから少しずつ触れてみることで、自分に合った趣味かどうかが自然と分かります。
          </p>
          <p>
            初心者向けの手引きから、さらに楽しさを深めるステップアップ情報まで分かりやすく紹介しています。
          </p>
        </div>
      </section>

      {/* Section 7: Creating a More Comfortable Home */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-700 shrink-0" />
          <span>自宅をより快適にする環境づくり</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            住まいの環境は、そこで過ごす時間の満足度に大きく影響します。高額なリノベーションを行わなくても、配置や日々の工夫で居心地は大きく改善できます。
          </p>
          <p>
            照明の調光・色温度、室温と湿度、整理収納、遮音、家具の動線、清潔感などが心地よい空間づくりに直結します。
          </p>
          <p>
            例えば、作業スペースを整えると集中しやすくなり、夜間に暖色系ライトを用いることで深い安らぎを得られます。
          </p>
          <p>
            当サイトでは、快適性を高める部屋づくり、スマートな片付け、手軽な自炊など、生活の質を底上げするヒントをお届けしています。
          </p>
        </div>
      </section>

      {/* Section 8: Saving Money at Home */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <PiggyBank className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>自宅生活での節約術</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            お家で過ごす時間が増えることは、家計や日々の支出を見直す良い機会にもなります。
          </p>
          <p>
            待機電力の削減、計画的な自炊、食材ロス防止、消耗品の賢い使用、固定費の見直しなど、無理のない習慣の積み重ねが節約につながります。
          </p>
          <p>
            極端な我慢をする必要はありません。ストレスなく長続きする現実的な工夫こそが、長期的に安定した成果を生み出します。
          </p>
          <p>
            光熱費、食費、日用品、日常ルーティンなど、手軽に実践できる節約の知恵をまとめています。
          </p>
        </div>
      </section>

      {/* Section 9: Learning and Studying at Home */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-cyan-600 shrink-0" />
          <span>自宅での勉強・学習法</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            集中できる環境さえ整えば、自宅は自分専用の充実した学びの場になります。
          </p>
          <p>
            語学学習、資格試験の準備、実務スキルの習得、読書、知的好奇心に基づくリサーチなど、学習の可能性は無限です。
          </p>
          <p>
            継続の秘訣は、無理のない学習スケジュールを習慣化することです。1日15分の積み重ねでも、長期的には大きな成果となります。
          </p>
          <p>
            集中力を高める環境整備、ポモドーロ法などの時間管理、オンライン教材の活用法など、勉強を日常に溶け込ませる方法を提案しています。
          </p>
        </div>
      </section>

      {/* Section 10: Finding Distance and Travel Time From Home */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Compass className="w-5 h-5 text-rose-600 shrink-0" />
          <span>自宅からの距離・所要時間の調べ方</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            日々の生活では、自宅からの距離や移動時間を調べる場面が多くあります。
          </p>
          <p>
            最寄り駅までの徒歩分数、通勤・通学路の所要時間、自転車や車での所要時間など、マップやナビツールを活用することでスムーズに把握できます。
          </p>
          <p>
            徒歩基準（分速80mルール）や直線距離と実走行距離の違い、交通手段ごとの計算の仕組みをやさしく解説しています。
          </p>
          <p>
            なお、位置情報サービスを利用する際はプライバシーに配慮し、SNS等で正確な番地を公開しないようご注意ください。
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={() => onSelectCategory('nav-tool')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg transition cursor-pointer"
          >
            <span>「自宅ナビ・距離所要時間計算ツール」を試す</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Section 11: Practical Information for Everyday Home Life */}
      <section className="space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
          <Home className="w-5 h-5 text-emerald-800 shrink-0" />
          <span>毎日の自宅生活を豊かにする実用情報</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            私たちがこれらのテーマを幅広く扱うのは、住まいが単なる休息の場にとどまらず、暮らしのすべての基盤だからです。
          </p>
          <p>
            仕事、学び、健康づくり、食事、創作、そして心安らぐ休息まで、多面的な役割を担っています。自分自身と向き合い、大切な人との時間を育む場所でもあります。
          </p>
          <p>
            住まいをどう活用するかは人それぞれです。生産性を高めたい方、心身を休めたい方、新しい挑戦を始めたい方、それぞれのライフスタイルに寄り添えるよう、総合的な視点で情報を届けています。
          </p>
        </div>
      </section>

      {/* Section 12: Explore Jitakus.com Call to Action */}
      <section className="bg-stone-50 rounded-2xl border border-stone-200 p-6 sm:p-8 space-y-4">
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>Jitakus.comを活用しよう</span>
        </h3>
        <div className="space-y-3 text-[15px] leading-relaxed text-stone-700">
          <p>
            暇な時間の過ごし方、在宅ワークの探し方、室内トレーニング、趣味の開拓、節約、住環境の整備、距離の計測など、知りたい情報へスムーズにアクセスできるよう構成されています。
          </p>
          <p>
            各カテゴリの記事や計算シミュレーターをご活用いただき、毎日の時間をより便利で心地よくするヒントを見つけてみてください。
          </p>
        </div>

        {/* Action Grid - Complete 6 Categories + All 30 Blogs */}
        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          <button
            onClick={() => onSelectCategory('all')}
            className="p-3.5 bg-emerald-800 text-white rounded-xl hover:bg-emerald-900 text-left transition cursor-pointer group shadow-2xs flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold block flex items-center justify-between">
                <span>全記事アーカイブ</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </span>
              <span className="text-[11px] text-emerald-100 mt-1 block">全30記事を一覧表示</span>
            </div>
          </button>

          <button
            onClick={() => onSelectCategory('definition')}
            className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-emerald-500 text-left transition cursor-pointer group hover:bg-emerald-50/50"
          >
            <span className="text-xs font-bold text-stone-900 group-hover:text-emerald-800 block">自宅とは？</span>
            <span className="text-[11px] text-stone-500">意味・使い方を解説</span>
          </button>

          <button
            onClick={() => onSelectCategory('activities')}
            className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-blue-500 text-left transition cursor-pointer group hover:bg-blue-50/50"
          >
            <span className="text-xs font-bold text-stone-900 group-hover:text-blue-800 block">自宅でできること</span>
            <span className="text-[11px] text-stone-500">趣味・暇つぶしアイデア</span>
          </button>

          <button
            onClick={() => onSelectCategory('work')}
            className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-indigo-500 text-left transition cursor-pointer group hover:bg-indigo-50/50"
          >
            <span className="text-xs font-bold text-stone-900 group-hover:text-indigo-800 block">在宅ワーク・内職</span>
            <span className="text-[11px] text-stone-500">安全な仕事と副業</span>
          </button>

          <button
            onClick={() => onSelectCategory('fitness')}
            className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-teal-500 text-left transition cursor-pointer group hover:bg-teal-50/50"
          >
            <span className="text-xs font-bold text-stone-900 group-hover:text-teal-800 block">自宅で運動・筋トレ</span>
            <span className="text-[11px] text-stone-500">静音宅トレ＆ストレッチ</span>
          </button>

          <button
            onClick={() => onSelectCategory('lifestyle')}
            className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-amber-500 text-left transition cursor-pointer group hover:bg-amber-50/50"
          >
            <span className="text-xs font-bold text-stone-900 group-hover:text-amber-800 block">自宅暮らし・節約</span>
            <span className="text-[11px] text-stone-500">光熱費削減＆料理・学び</span>
          </button>

          <button
            onClick={() => onSelectCategory('navigation')}
            className="p-3.5 bg-white rounded-xl border border-stone-200 hover:border-rose-500 text-left transition cursor-pointer group hover:bg-rose-50/50"
          >
            <span className="text-xs font-bold text-stone-900 group-hover:text-rose-800 block">自宅から/自宅まで</span>
            <span className="text-[11px] text-stone-500">駅徒歩・距離計算ガイド</span>
          </button>

          <button
            onClick={() => onSelectCategory('nav-tool')}
            className="p-3.5 bg-stone-900 text-stone-100 rounded-xl hover:bg-stone-800 text-left transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-bold block flex items-center justify-between text-amber-300">
                <span>距離シミュレーター</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </span>
              <span className="text-[11px] text-stone-400 mt-1 block">徒歩・自転車・車計算</span>
            </div>
          </button>
        </div>
      </section>

      {/* Section 13: Frequently Asked Questions (FAQ) - Google Helpful Content & SpamBrain Compliant */}
      <section className="space-y-6 pt-4 border-t border-stone-100">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs text-emerald-800 font-bold">
            <HelpCircle className="w-4 h-4" />
            <span>よくある質問（FAQ）</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            自宅生活・在宅ワークに関するQ&A
          </h3>
        </div>

        <div className="space-y-4">
          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2">
            <h4 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
              <span className="text-emerald-700 font-extrabold text-base">Q.</span>
              <span>「自宅」とお金をかけずに楽しく過ごすおすすめの方法は？</span>
            </h4>
            <p className="text-[14px] text-stone-600 leading-relaxed pl-6">
              ストレッチや自重筋トレ、読書、身の回りの断捨離、オンライン無料講座の受講、手軽な自炊スイーツ作りなど、0円ですぐに試せるアイデアが豊富にあります。当サイトの「自宅でできること50選」もぜひ参考にしてください。
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2">
            <h4 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
              <span className="text-emerald-700 font-extrabold text-base">Q.</span>
              <span>自宅でできる安全な内職や在宅ワークはどう探せばいいですか？</span>
            </h4>
            <p className="text-[14px] text-stone-600 leading-relaxed pl-6">
              公的機関（ハローワークや各自治体の就労支援窓口）や大手クラウドソーシングサービスを利用するのが安心です。事前の教材費や登録料を請求する悪質な詐欺案件には十分注意し、契約内容を必ず事前に確認しましょう。
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2">
            <h4 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
              <span className="text-emerald-700 font-extrabold text-base">Q.</span>
              <span>アパートやマンションで階下に音が響かない室内運動はありますか？</span>
            </h4>
            <p className="text-[14px] text-stone-600 leading-relaxed pl-6">
              ヨガマットを敷いた状態でのプランク、スロースクワット、静止ストレッチ、踏み台を使わないステップ運動など、足音を立てない静音メニューが最適です。
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 space-y-2">
            <h4 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
              <span className="text-emerald-700 font-extrabold text-base">Q.</span>
              <span>「自宅」「家」「実家」「自分の家」の言葉の違いは？</span>
            </h4>
            <p className="text-[14px] text-stone-600 leading-relaxed pl-6">
              「自宅」は公私問わず自分がいま現実に生活している住まいを客観的・丁寧に指す言葉です。「実家」は両親が住む故郷の家、「家」は建物や家庭全般を指す日常表現です。
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Trust & Transparency Footer */}
      <footer className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
        <div className="space-y-1">
          <p className="font-bold text-stone-700">Jitakus.com 暮らし情報編集部 監修</p>
          <p>正確性と中立性に配慮し、信頼できる情報源に基づき定期的に内容を検証・更新しています。</p>
        </div>
        <div className="flex items-center gap-3 shrink-0 font-medium">
          <button onClick={() => onSelectCategory('definition')} className="hover:text-emerald-800 underline cursor-pointer">免責事項</button>
          <span>•</span>
          <button onClick={() => onSelectCategory('all')} className="hover:text-emerald-800 underline cursor-pointer">編集ポリシー</button>
        </div>
      </footer>

    </article>
  );
};
