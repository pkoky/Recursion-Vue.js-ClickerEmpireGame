<h1 align="center">Click Empire Game</h1>

![newdemo](https://user-images.githubusercontent.com/78239360/141881283-87effcea-78f9-43fc-83a9-54c459cf56cd.gif)

---

見ていただきありがとうございます。

**目次**

1. ページの URL
2. Project 制作の経緯/概要
3. 使用言語/ツール
4. 遊び方
5. 拘ったポイント
6. 見ていただく際に（裏コードの紹介）

---

**URL**

https://pkoky.github.io/Recursion-Vue.js-ClickerEmpireGame/

---

<h2>Project制作の経緯/概要</h2>

コンピュータサイエンス学習プラットフォーム、[Recursion](https://recursionist.io/dashboard/users/koky) でコンピューターサイエンスを学んでいます。

オブジェクト、配列、連想配列、HTML、CSS、JS での DOM 操作を学び、  
要件定義からデータ構造を設計し、  
初めに公式ドキュメントを見て、素の JS と[Bootstrap v5.0](https://getbootstrap.jp/docs/5.0/getting-started/introduction/)で作りました。  
それを今回、[Vue.js](https://jp.vuejs.org/index.html)で書き換えました。

Project の概要

```
- 仕事や投資、不動産等でお金を稼ぐ「Clicker Empire Game」というシミュレーションゲーム。
- 時間間隔（time interval）を使って毎秒ごとに状態やレンダーを更新する。
```

> time interval を使い時間の経過によう状態の変化  
> localStorage を使ってデータの保存

などを実装しています。

<h2>使用言語/ツール</h2>

- HTML
- CSS
- [Bootstrap v5.0](https://getbootstrap.jp/docs/5.0/getting-started/introduction/)
- JavaScript
- [Vue.js](https://jp.vuejs.org/index.html)

<h2>遊び方</h2>
所持金$50000からスタートします。

資産を増やしていき、大富豪を目指しましょう。

お金の増やし方は２通りあります。

- ハンバーガーをクリックする（得られるお金は FilipMachine の数に影響されます）
- 投資や事業により、時間の経過によって稼ぐ（FLipMachine 以外のものが対象となります）

<h2>拘ったポイント</h2>

<details>
<summary>レイアウトについて</summary>
<div>

レイアウトは課題サンプルがあったので、そちらを参考にしました。  
その上で下記のことを意識しました。

```
- ユーザーが見やすくわかりやすいこと
- 画面サイズが変わってもレイアウトが崩れないこと　
```

</div>
</details>

<details>
<summary>機能面について</summary>
<div>

下記のことを意識しました。

```
- 出来る限り 1 つのメソッドに 1 つの役割
- 英語を読むように理解できる変数名
```

</div>
</details>

<h2>見ていただく際に</h2>

裏コードを設定してあります。

名前入力の際に、

```
Trick
```

と入力していただくと、倍速設定ができます。

100 倍速にし、はじめに LemonadeStand を買っていただくとスムーズにゲームを進めていただけます。

![newdemo-Trick](https://user-images.githubusercontent.com/78239360/141881953-5d26ed37-1c3a-4198-bf00-910a2b317e03.gif)
