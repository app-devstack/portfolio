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
	すみません？まだ続きます(読んでいただいてありがとうございます)
	ここまで拝読いただいていたら、だいたいの人となりは伝わってそうですね。

	作るの大好き、甘いの大好きな普通の人です！
	



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
    </div>
  );
}
