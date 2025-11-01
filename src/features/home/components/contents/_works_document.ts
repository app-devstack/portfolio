// =============================================
// 共通型
// =============================================
/**
 * 画像のアスペクト比
 * 'square': 正方形
 * 'landscape': 横長
 * 'portrait': 縦長
 */
export type ImageAspect = 'square' | 'landscape' | 'portrait';

export type WorkType = {
  id: string;
  category: string;
  image: string;
  title: string;
  aspectRatio: ImageAspect;
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
    image: '/images/works/recipe/recipe_app.png',
    title: 'Recipe App',
    aspectRatio: 'portrait',
    description: `
    家族と買い物に行くときにいつも、「あれ？買いたいの何だっけ？」となるので複数人が共通で利用できる家族用の買い物メモアプリを作成しました！
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
  },
  {
    id: 'book-vault',
    category: 'Native App',
    image: '/images/works/bv/home.png',
    title: 'Book Vault',
    aspectRatio: 'portrait',
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
  },
  {
    id: 'portfolio',
    category: 'Web Site',
    image: '/images/works/bv/home.png',
    title: 'このポートフォリオ',
    aspectRatio: 'portrait',
    description: `
		3つめはこのポートフォリオです！

		デプロイ先にはCloudflareを使用しています。
		セキュリティにも強く、分散配置されたサーバー(エッジサーバー)が利用できるところ。
		その利用が簡単だし、D1やKV、ストレージのR2といった便利な機能が豊富に揃っているので、積極的に活用しています！


    `,
  },
  {
    id: 'other',
    category: 'other',
    image: '/images/works/ext/dev_note_tool_ogp.png',
    title: 'その他の開発作品',
    aspectRatio: 'landscape',
    description: `

		その他にも、以下のような開発作品があります！

    - 開発者用WEBのメモツール: ブラウザ上で開発メモを簡単に取れるChrome拡張機能を作成しました。Preactを使用。
    - 勤怠半自動化ツール: Money Forwardで勤怠管理をしているのですが、毎日4回の打刻を少しでも楽にしたい！と思い、拡張機能から打刻ができるツールを作成しました。(今でも毎日使用しています。)1日で思いつきで作った割にかなり便利で重宝しています。Preactを使用。
    - Astro Notion Blog: Astroを使ってクライアントワークをする機会があったのですが、その際にもっと踏み込んでAstroを学びたい！と思っていたところ、otoyoさんの作成された[astro-notion-blog](https://github.com/otoyo/astro-notion-blog)を見つけ、クローンして自分なりに好きな見た目にして遊んでいました。


    `,
  },
] satisfies WorkType[];

/**
 * デザイン作品集
 */
export const designWorks = [
  {
    id: 'affinity-designer',
    category: 'Design',
    image: '/images/works/design/list.png',
    title: 'Affinity Designer作品集(iPad)',
    aspectRatio: 'landscape',
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
    image: '/images/works/design/illustrator_ogp.png',
    title: 'Illustrator作品集(iPad)',
    aspectRatio: 'landscape',
    description: `
		Illustratorで作成した作品集です！
		2025年の9月くらいにiPad版だと1000円でサブスクできる事に気が付き、そこから愛用しています。
		まだまだ始めたばかりですが、「イラレの5分ドリル 練習して身につけるIllustratorの基本」を読みながらどんどん上達していきます！
		`,
  },
] satisfies WorkType[];
