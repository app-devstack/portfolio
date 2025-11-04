import { ContentImageProps } from '@/components/elements/imageViewer/_types';

// =============================================
// 共通型
// =============================================
export type WorkType = {
  id: string;
  category: string;
  images: ContentImageProps[];
  title: string;
  description: string;
};

// =============================================
// ドキュメント
// =============================================

/**
 * 開発作品集
 */
export const developWorks = [
  {
    id: 'recipe-app',
    category: 'Web App',

    title: 'Recipe App',
    description: `
    家族と買い物に行くときにいつも、「あれ？買いたいの何だっけ？」となるので複数人が共通で利用できる家族用の買い物メモアプリ兼レシピアプリを作成しました！
    (画像は、わが家の買い物メモです笑)


    もともとは昔に作ったレシピ管理アプリを再デザインする予定だったのですが、いまは買い物メモとして重宝しています。
    肝心の開発部分は、Next.js + Hono + Cloudflare + NeonDB(drizzle)で構築しています！

    このとき初めて、要件定義・設計(デザイン)を本格的に行い、開発を進めました。
		(デザインやロゴの作成はFigmaを使用しています。)

    「挑戦っ!」ということで、これまでの開発でやったことのないものばかりを選んで挑戦しました。
    例えば、当時実務だとORMにはPrismaしか使ったことがなかったので、drizzleを使用してみました。

    開発初期からかなり躓いていて、最初はたしかCloudflareへのデプロイでした。当時、bunを使用してデプロイしようとしたところエラーで全然公開できず、かなりの時間を費やしました。(ドキュメント通りに設定してもうまくいかず、海外のフォーラムなどをみても同様に躓いている方が多く、なかなか解決策が見つからず苦労したけど、bunのバージョンを下げたり、互換性フラグというのを[nodejs_compat_v2]にしたら無事適応され使えるようになりました。※現在は気にしなくてもbunが使えます。)

    あとはエッジランタイムの設定をAPIに追加しなければいけないのを知らなくて、しばらく困っていました。笑笑
    その後も初めての1人称でのテーブル設計などで苦労しましたが、AIにも質問しまくって概念的な理解をしてなんとか形にできました！
    `,
    images: [
      {
        url: '/images/works/recipe/recipe_app.png',
        alt: 'Recipe App - メイン画面',
        aspectRatio: 'portrait',
        description: 'レシピアプリのホーム画面です!',
      },
      {
        url: '/images/works/recipe/figma_recipe_app.png',
        alt: 'Recipe App - Figmaデザイン',
        aspectRatio: 'landscape',
        description: 'Figmaでデザインした画面です!(試行錯誤のあとがたくさん...)',
      },
      {
        url: '/images/works/recipe/recipe_app_title.png',
        alt: 'Recipe App - タイトル画面',
        aspectRatio: 'landscape',
        description:
          'アプリアイコンです！ゲーミフィケーションを意識して、わくわくするようなデザインにしました！(Figmaで作成)',
      },
    ],
  },
  {
    id: 'book-vault',
    category: 'Native App',

    title: 'Book Vault',
    description: `
    家族から電子本の管理をするアプリが欲しい！と要望があり、作成している(作成中)のネイティブアプリです！
    React Native + Expo + Tamagui & データバックアップ用APIにはCloudflare D1 + Hono + drizzle(ORM)を使用して構築しています。

    (実はこの本管理アプリの前に、ネイティブアプリでゲームを作ろう！と家族で話していたのですが、その練習(？)としてまずは本管理アプリを作成しています。
    ゲームアプリはまだまだ先になりそうですが、まずはこの本管理アプリを完成させたいと思っています！)

    添付の画像は、実際に家族が使ってくれている画面のスクリーンショットです。
    個人的にはまだまだ開発途中ですが、使いやすくて助かっていると言ってもらえていて、とても嬉しいです！

    苦労ばなしになりますが、またデプロイで躓きました...。
    最初はExpoのEASを使用してデプロイしていたのですが、追加したい機能にネイティブでしか使用できない要件があり、EASでは対応できなかった...。

    ローカルでJava環境を構築し、ビルドした後、Firebase App Distributionを使用して配布する形に変更しました。
    ローカルでのビルドは初めてだったので、環境構築にかなり苦労しましたが、無事に配布できるようになりました！

    まだまだ開発途中ですが、完成を目指して頑張ります！
    `,
    images: [
      {
        url: '/images/works/bv/home.png',
        alt: 'Book Vault - ホーム画面',
        aspectRatio: 'portrait',
        description: `
        実際に家族に使ってもらっている、開発中のアプリホーム画面です！
        デザインはこの画像とは別で改めて作成中です！
				`,
      },
      {
        url: '/images/works/bv/description.png',
        alt: 'Book Vault - 詳細画面',
        aspectRatio: 'portrait',
        description: '本カテゴリの詳細画面です！',
      },
      {
        url: '/images/works/bv/search.png',
        alt: 'Book Vault - 検索画面',
        aspectRatio: 'portrait',
        description:
          '検索画面(家族用の開発画面のため、キャラクターの画像を一時的に表示しております💦)',
      },
      {
        url: '/images/works/bv/bv-image.png',
        alt: 'Book Vault - イメージ画像',
        aspectRatio: 'portrait',
        description: `Eveさんというアーティストのライブに行った後、PVをイメージしてデザインしたらどうなるかな？と思い、作成した画像です！
				この画像は、アプリに組み込んだものではありませんが個人的に気に入っているので載せました！
				`,
      },
      {
        url: '/images/works/bv/figma_bv_project.png',
        alt: 'Book Vault - イメージ画像',
        aspectRatio: 'landscape',
        description: `
				Figmaで作成中のでデザインです！
				正直、いま家族に使ってもらっているのはモック程度に開発したものだったので、ブラッシュアップを兼ねて改めてデザインを作成しています！
				`,
      },
    ],
  },
  {
    id: 'portfolio',
    category: 'Web Site',

    title: 'このポートフォリオ',
    description: `
		3つめはこのポートフォリオです！

		デプロイ先にはCloudflareを使用しています。
		セキュリティにも強く、分散配置されたサーバー(エッジサーバー)が利用できるところ。
		その利用が簡単だし、D1やKV、ストレージのR2といった便利な機能が豊富に揃っているので、積極的に活用しています！

		ファーストビューの「Portfolio」の文字は、Nomad Sculptで作成しBlenderでアニメーションさせています！
		文字を1つずつ動かすのに苦労しましたが、バウンドと合わせて回転したり、縮尺が変わったりと微調整し、かなり動きにこだわりました！
		その甲斐あって、印象的かつ、なんのサイトか一目で伝えられるようになったと思います！

		後ろで回転しているアイスクリームもNomad Sculptで作成しました！
		アイスクリーム事態に、かなり思い入れがあり、3Dで表現するなら絶対に入れたいと思っていました。
		このサイトの下部にはアイスを眺めるためだけに作ったセクション(アイスがよく見えるようにした場所)もあります！
		ぜひぼ～っと眺めていただけると嬉しいです！(もう少しBGMの勉強をしたら、作曲して本当にただ眺めるだけのセクションにしたいです！)

		また、3D作品をのせるに至った経緯ですが、応募先企業様のこれまでの実績や自社サイトに、印象的でステキな3D(Three.js)を使用したものがたくさんあり、
		急遽それらを入れての制作に挑戦しました！
    `,
    images: [
      {
        url: '/images/works/portfolio/logo.png',
        alt: 'ポートフォリオ - ロゴ',
        aspectRatio: 'landscape',
        description: `
				ポートフォリオのロゴです！
				Illustratorを使用して作成しました！
				ロゴ制作も、Illustratorもまだまだ初心者なので、どんどん上達していきたいです！
				`,
      },
      {
        url: '/images/works/portfolio/not_found.png',
        alt: 'ポートフォリオ - 404ページ',
        aspectRatio: 'landscape',
        description: `
				ポートフォリオの404ページです！
				(なかなか実際に見ていただける機会はな少ないかもしれませんが...笑)

				Nomad Sculptで文字を作成し、Blender調整したものを表示しています！
				なんとも言えない、ちょっと悲壮感も感じるお目々が気に入っています！
				`,
      },
      {
        url: '/images/works/portfolio/prev_portforio.png',
        alt: 'ポートフォリオ - 前バージョン',
        aspectRatio: 'portrait',
        description: `
				今回のポートフォリが完成するまでに、実は3回ほど大きくデザインを変えています。
				案1は手を動かそうと言う程度で、有名な方のとってもいいな！と思ったポートフォリオをトレースさせていただきました。
				案2は元来のポートフォリオとは何だ？というところからフォルダに格納した自分の作品を見てもらうというイメージで作成しました。
				デザインは好きだけど、今ひとつ爆発が足りない。自分を出し切れていないと思い別案を考えました。
				案3は自分を知ってもらいたい！と言う思いから自分の好きなものを考え、お家が好き無印みたいな落ち着いていて、
				かつ、ちょっとノスタルジックな雰囲気のお部屋をイメージして作成しました。

				最終的には、今ご覧いただいている案4で自分の全力を詰め込んだ愉快なサイトを作ることができました！
				`,
      },
    ],
  },
  {
    id: 'other',
    category: 'other',
    title: 'その他の開発作品',
    description: `

		その他にも、以下のような開発作品があります！

    - 開発者向けWEBメモツール: ブラウザ上で開発メモを簡単に取れるChrome拡張機能を作成しました。Preactを使用。
    - 勤怠半自動化ツール: Money Forwardで勤怠管理をしているのですが、毎日4回の打刻を少しでも楽にしたい！と思い、拡張機能から打刻ができるツールを作成しました。(今でも毎日使用しています。)1日で思いつきで作った割にかなり便利で重宝しています。Preactを使用。
    - Astro Notion Blog: Astroを使ってクライアントワークをする機会があったのですが、その際にもっと踏み込んでAstroを学びたい！と思っていたところ、otoyoさんの作成された[astro-notion-blog](https://github.com/otoyo/astro-notion-blog)を見つけ、クローンして自分なりに好きな見た目にして遊んでいました。
    `,
    images: [
      {
        url: '/images/works/ext/dev_note_tool_ogp.png',
        alt: '開発者向けWEBメモツール',
        aspectRatio: 'landscape',
        description: '開発者向けWEBメモツールです！chrome拡張機能として開発しました。',
      },
      {
        url: '/images/works/ext/kintai.png',
        alt: '勤怠半自動化ツール',
        aspectRatio: 'landscape',
        description: '勤怠半自動化ツールです！',
      },
      {
        url: '/images/works/other/r_tech_blog.png',
        alt: 'Astro Notion Blog',
        aspectRatio: 'landscape',
        description: `
				Astro Notion Blogです！
				otoyoさんの作成された[astro-notion-blog](https://github.com/otoyo/astro-notion-blog)をクローンさせていただいて作成しています。
				画像はヘッダー部分のロゴです！

				`,
      },
      {
        url: '/images/works/other/shop_mane.png',
        alt: 'Astro Notion Blog',
        aspectRatio: 'landscape',
        description: `
				レシピアプリの姉妹アプリとして作成している、家計簿アプリです！
				PWAという技術を使用し、デバイスにインストールできるようにしています！
				(まだまだ開発途中で、ホームには買い物一覧を表示しています...)
				`,
      },
    ],
  },
] satisfies WorkType[];

/**
 * デザイン作品集
 */
export const designWorks = [
  {
    id: 'affinity-designer',
    category: 'Design',
    images: [
      {
        url: '/images/works/design/list.png',
        alt: 'Affinity Designer作品集',
        aspectRatio: 'landscape',
        description: `
				Affinity Designerでこれまでに作成した作品の一部です！
				キャラクターの模写などが中心で、練習用に作成したものが多いです！
				画像中央の「うさぎ」は天使の輪っかを表現するのに苦労しました(ゴリ押しでそれっぽくした記憶...笑)
				`,
      },
    ],
    title: 'Affinity Designer作品集(iPad)',
    description: `
		Affinity Designerで作成した作品集です！
		2025年の3月くらいから、アプリのアイコンなどをSVGで作成してLottieでアニメーションしたいという思いがあり、Affinity Designerを使い始めました。

		Figmaでパスの編集を使い慣れてきたころだったのですが、ツールの何を使えばどうなるのかが全然わからず、最初はかなり苦労しました...。

		とにかく使い続けた今は、かなり使いこなせるようになり、キャラクターの模写や、アプリで利用する画像の作成などができるようになりました！

		(追記)
		先日、Affinity Designerの大幅アップデートがありました！(バージョン3という捉え方でいいんでしょうか？)
		こちらもどんどん使っていきます！
		`,
  },
  {
    id: 'illustrator',
    category: 'Design',

    title: 'Illustrator作品集(iPad)',
    description: `
		Illustratorで作成した作品集です！
		2025年の10月初めくらいにiPad版だと1000円でサブスクできる事に気が付き、そこから愛用しています。
		まだまだ始めたばかりですが、「イラレの5分ドリル 練習して身につけるIllustratorの基本」を読みながらどんどん上達していきます！
		`,
    images: [
      {
        url: '/images/works/design/illustrator.png',
        alt: 'Illustrator作品集',
        aspectRatio: 'landscape',
        description: `
				Illustratorで作成した作品の一部です！
				Affinity Designerでの練習がたくさん活用できて、思っていたよりもスムーズに習得できてきています！

				特に重宝しているのは、線画のベクター化です！
				Procreateで描いたイラストをベクター化できるので、ラフからのSVG作成がとても楽になりました！

				ただし、まだまだ機能として理解しきれていない部分もたくさんあるためどんどん作ってどんどん上達していきたいです！

				`,
      },
    ],
  },
  {
    id: 'procreate',
    category: 'Design',

    title: 'Procreate作品集(iPad)',
    description: `
		Procreateで作成した作品集です！
		Illustratorの下書きや、旅行で撮影した写真にお絵かきをして遊んだりしています！

		(Procreate Dreamsも購入しているのですが、まだあまり使いこなせていないので、どんどん挑戦していきたいです！)
		`,
    images: [
      {
        url: '/images/works/design/procreate.png',
        alt: 'Procreate作品集',
        aspectRatio: 'landscape',
        description: `最近の作品集です！`,
      },
      {
        url: '/images/works/design/sakuji.png',
        alt: '作字',
        aspectRatio: 'portrait',
        description: `
				「あいす」は、2025/11/1の作字ワークショップに参加させていただいて、作成した作品です！
				初めての作字だったのですが、実装だったりレイアウトだったりを考えず、
				ただひたすら目の前の作品だけを考えて自分のイメージを形にしていくのが新鮮でとても楽しかったです！
				`,
      },
    ],
  },
  {
    id: 'nomad-sculpt',
    category: 'Design',
    title: 'Nomad Sculpt',
    description: `
		Nomad Sculptで作成した作品です！
		これも10月半ば(2025年)くらいに衝動的に購入してそこから勉強しています!
		直感的に3Dを作成できる点にとても魅力を感じています!
		`,
    images: [
      {
        url: '/images/works/design/nomad.png',
        alt: 'ポートフォリオ',
        aspectRatio: 'landscape',
        description: `
				ポートフォリオの文字もNomad Sculptで作成しました！
				(アニメーションはBlenderを使用しました。)
				`,
      },
      {
        url: '/images/works/design/nomad2.png',
        alt: 'Procreate作品集',
        aspectRatio: 'landscape',
        description: `
				回転させているアイスと、このサイトの404ページの素体もNomad Sculptで作成しました！
				アイスはチュートリアル動画があり、それを自分なりにアレンジして作成しました！星のキラキラ感が気に入っています！
				「404」はNomad Sculptで文字を作成されている動画があったので、参考にして作成しました！
				`,
      },
    ],
  },
] satisfies WorkType[];
