import dedent from 'dedent';

import CustomMarkdown from '@/components/CustomMarkdown';
import Heading from '@/components/ui/heading';

export default function HomeContentsProfile() {
  const selfIntroduction = `
	おはよう！こんにちは、こんばんは。
	ポートフォリオを見てくださり、ありがとうございます！！

	まる(maru-maruuu)です！
	端的な自己紹介としては、分解と構築が好きなクリエイター(？)です！

	実務ではフルスタックのエンジニアとして、社内SNS・社内用AI(DXツール)などのWEBツールを主に担当しています！
	普段は、デザインや表現力もつけたくて
	Figma, Procreate, Affinity Designer, Illustrator, Nomad Sculpt, Blenderなどのツールを練習しています！

  直近でやりたいことは、デザインはもちろん。先述したネイティブアプリゲーム作成・React&ElectronでAIブラウザ作成など...(kaki kirenai desu)
	後は家族から案をもらっているWEBアプリを数件作成しつつ、デザインやアニメーション、3D表現をもっと極めて行きたいと思っています！
	(2025-11執筆時点)
	`;

  const likes = `
	生まれたときから、アイスや甘いものが大好きで、好きが高じて前職ではサーティワン アイスクリームの店長をしていたこともありました！
	アイスのおすすめをよく聞かれるのですが、これがとっても難しい...。個人的には、シーズン商品なら紅茶系は間違いないと思っています！
	定番商品なら、ダントツでラブポーションサーティワンです！

	好きなアニメは、「田中くんはいつもけだるげ」、「ブルーロック」などです！
	田中くんは、気だるく生きるために全力を注いでいるところがとても好きで、声優の小野賢章さんも好きで何周も見返しています！
	ブルーロックは、主人公の潔世一の思考がとても好きで、挫折しながらも、より強くなるために自分の常識を常にアップデートし続ける姿勢がとっても最高で、共感と憧れを感じています！

	音楽はJ-POPでも洋楽でもゲームミュージックでも何でも聞いています！
	中学？小学校？くらいからずっと聞いているAvril Lavigneさん。
	何度もライブに足を運んだ、Eveさん。EMA(DUSTCELL)さん。

	どれも感性を刺激してくれます！
	`;

  // どんな人？
  const person = `
	まだ続きます！(読んでいただいてありがとうございます)
	ここまで拝読いただいていたら、だいたいの人となりは伝わってそうですね。

	「作るの大好き、甘いの大好きな人です！」

	最近やったMBTI診断ではENFP型(運動家)でした！
	「クリエイティブかつ自由奔放で、社交的です。([引用](https://www.16personalities.com/enfp-personality))」と記載されていて、だいたい合ってる気がします！

	【経歴まとめ】
  ① アイス屋さんで店長を経験(3年弱)
	② 老舗の喫茶店で副店長(短期間)
	③ 車体製造の工場でマシンの制御プログラム作成(ツール使用)
	④ IT企業でフルスタックエンジニア(現在)

	飲食店関連のお仕事は、どうしても長時間労働になりがちでしたが、接客や従業員の管理を通じて人と接する部分をたくさん学びました！
	エンジニアとしては、まだまだ未熟ですが、持ち前の探究心・好奇心で日々成長中です！

	`;

  // これから何をしたいのか？
  const future = `
	これからも、たくさんエンジニアリングスキル・デザインスキルを磨いていきたいと思っています！
	また、WEB関連・デザイン関連・3D・アニメーション・イラストなどのスキルを広く深く学んで、
	もっと自由で独創的な表現をたくさん作り、クリエイティブな活動を続けていきたいと思っています！
	`;

  return (
    <div className="grid gap-28">
      <div className="grid gap-6">
        <Heading level="h3">自己紹介</Heading>
        <CustomMarkdown className="ml-0 flex-1">{dedent(selfIntroduction)}</CustomMarkdown>
      </div>

      <div className="grid gap-6">
        <Heading level="h3">何がすき？</Heading>
        <CustomMarkdown className="ml-0 flex-1">{dedent(likes)}</CustomMarkdown>
      </div>

      <div className="grid gap-6">
        <Heading level="h3">どんな人？</Heading>
        <CustomMarkdown className="ml-0 flex-1">{dedent(person)}</CustomMarkdown>
      </div>

      <div className="grid gap-6">
        <Heading level="h3">これから何をしたいのか？</Heading>
        <CustomMarkdown className="ml-0 flex-1">{dedent(future)}</CustomMarkdown>
      </div>
    </div>
  );
}
