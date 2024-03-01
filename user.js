//日本語
pref("general.useragent.locale", "ja-JP");
// 【フォントと配色】日本語の最小フォントサイズ
user_pref("font.minimum-size.ja", 18);

//userChrome.cssを使えるようにする
    user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);


///////////////////////////////////////////////
//アクセスの要求をブロック
//////////////////////////////////////////////

    // 位置情報へのアクセスの要求をブロック
    // 0: ブロックしない, 2: ブロックする
    user_pref("permissions.default.geo", 2);



    // カメラへのアクセスの要求をブロック
    // 0: ブロックしない, 2: ブロックする
    user_pref("permissions.default.camera", 2);



    // マイクへのアクセスの要求をブロック
    // 0: ブロックしない, 2: ブロックする
    user_pref("permissions.default.microphone", 2);



    // 通知の許可の要求をブロック
    // 0: ブロックしない, 2: ブロックする
    user_pref("permissions.default.desktop-notification", 2);



//Firefox 69以降、Firefoxの自動再生ブロック動作に関してabout：configパラメーターが変更されました。

    // 音声を自動再生するウェブサイトをブロックする
    user_pref("media.autoplay.default", 5);

//    値5：オーディオとビデオをブロックする
//    値1：ブロック音声
//    値0：許可

user_pref("media.autoplay.block-webaudio", false);

//    値True：ブロック
//   値False：許可

user_pref("media.autoplay.enabled.user-gestures-needed", false);

//    値True：ユーザーの操作が必要
//    値False：ユーザーの操作を必要としません

// VR デバイスへの要求をブロック
// 0: ブロックしない, 2: ブロックする
user_pref("permissions.default.xr", 2);



//Tabバー右端に『タブを一覧表示します』( List all tabs )と言う名称の『V』ボタン    常時表示化
user_pref("browser.tabs.tabmanager.enabled", true);

//検索バーをツールバーに追加する
user_pref("browser.search.widget.inNavBar", true);


//常にリンクに下線を付ける121
user_pref("layout.css.always_underline_links", true);

//タイトルバーを表示
user_pref("browser.tabs.inTitlebar", 0);
user_pref("browser.tabs.drawInTitlebar", false);
//ドラッグ領域
user_pref("browser.tabs.extraDragSpace", true);
// オートスクロール機能を無効にする
user_pref("general.autoScroll", false);

// Firefoxの更新を確認しない
user_pref("app.update.enabled", false);

// 検索バーから新しいタブを開く
user_pref("browser.search.openintab", true);

// ロケーションバー（アドレスバー）から現在のタブではなく新しいタブに開く
user_pref("browser.urlbar.openintab", true);
// ロケーションバーでURL入力 Enter で新しいタブを開くか
user_pref("browser.tabs.opentabfor.urlbar", true);

// 起動時に既定のブラウザであるかを確認するか [true]
user_pref("browser.shell.checkDefaultBrowser", false);

//バックグラウンドで開く
pref("browser.tabs.loadDivertedInBackground", true);
user_pref("browser.tabs.loadBookmarksInBackground", true);
// リンクを新しいタブで開いたとき、すぐにそのタブに切り替える[true]
user_pref("browser.tabs.loadInBackground", true);
//user_pref("browser.tabs.loadInBackground"", true);
user_pref("browser.tabs.loadDivertedInBackground", true);// [false]
user_pref("browser.search.context.loadInBackground", true);// [true]


// 最後のタブを閉じた時ウィンドウも閉じるか
user_pref("browser.tabs.closeWindowWithLastTab", false);


user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
// タブを閉じた時、直前の選択タブへ移動
user_pref("browser.tabs.selectOwnerOnClose", true);


// target="_blank" や外部アプリケーションから新しいタブをバックグラウンドで開くか。 
user_pref("browser.tabs.loadDivertedInBackground", true);

//　　JavaScriptポップアップをタブで開く
//user_pref("browser.link.open_newwindow.restriction", 0);

//閉じたタブの履歴を保存する数 [10]
user_pref("browser.sessionstore.max_tabs_undo", 512);

//最後のタブを閉じると同時にウィンドウも閉じるか [true]
user_pref("browser.tabs.closeWindowWithLastTab",false);

//スピードダイアルを使わない
user_pref("browser.newtab.url", "about:blank");
user_pref("browser.newtabpage.enabled", false);

// mailto: からメーラーを起動しない
user_pref("network.protocol-handler.external.mailto", false);

// ソース表示時にソースを色分け
// ソース表示に外部ソフトを使用した場合この値は無効になる
user_pref("view_source.syntax_highlight", true);

// ソースの表示で長い行を自動的に折り返す
// ソース表示に外部ソフトを使用した場合この値は無効になる
user_pref("view_source.wrap_long_lines", true);

// ☆ サイト指定の機能を無効にする
// 右クリックを禁止を無効
user_pref("nglayout.events.dispatchLeftClickOnly", true);

// ウィンドウリサイズを無効
user_pref("dom.disable_window_open_feature.resizable", true);

// コンテキストメニューを常に有効
user_pref("dom.event.contextmenu.enabled", true);

// ウィンドウの移動・リサイズを無効
user_pref("dom.disable_window_move_resize", true);

// アクティブなタブにのみ閉じるボタンを表示
// tab-close-button の表示
// 0: アクティブなタブにのみ　1: すべてのタブに　2: 表示なし　3: 「タブの一覧を表示」アイコンの右に
// アクティブなタブにのみ閉じるボタンを表示
user_pref("browser.tabs.closeButtons", 0);


////
// 起動時に開くページ
// 0 : ブランク, 1 : ホーム（ browser.startup.homepage ), 2 : 最後のページ
user_pref("browser.startup.page", 3);
//////
//////


// 新規タブに表示されるページ
// -1 : デフォルト, 0 : ブランク, 1 : ホーム（ browser.startup.homepage ), 2 : 最後のページ
//user_pref("browser.tabs.loadOnNewTab", 0);

// ダウンロードマネージャの表示
// true : 表示, false : 非表示
user_pref("browser.download.manager.showWhenStarting", false);

// 【ダウンロード】 新しいダウンロードUIを使用する [true]
//user_pref("browser.download.useToolkitUI", true);

// ダウンロード進行状況の表示
// true : ダウンロードマネージャ, false : ステータスバー
//user_pref("browser.download.manager.useWindow", false);

// シャットダウン時に進行中のダウンロードの挙動
// 0: 次回起動時に再開, 1: 次回起動時にも再開しない, 2: 履歴を残さずキャンセル
user_pref("browser.download.manager.quitBehavior", 0);

// ダウンロード時のユーザ定義フォルダの指定
// user_pref("browser.download.dir", "E:\\DownLords\\");

// ダウンロードしたファイルの保存場所を指定
// 0: デスクトップ, 1: デフォルト, 2: ユーザ定義フォルダ
//user_pref("browser.download.folderList", 2);

// true : browser.download.folderList で指定した場所に自動保存
// false : ダウンロードごとに保存場所を指定
user_pref("browser.download.useDownloadDir", false);

// アドオンインストール時の待ち時間を0に
user_pref("security.dialog_enable_delay", 0);

///////////////////////////////////////////////////////////////////////////
//  Anti-Aliasing Tuning
///////////////////////////////////////////////////////////////////////////

//GammaLevel * 1000, typical values 1000-2200 (1.0-2.2), default: based on screen
//ガンマ値の調整。1.0～2.2 の間の数値を指定します。デフォルトは「-1」でモニターの性能に基づいて自動調整？
user_pref("gfx.font_rendering.cleartype_params.gamma", -1);
//EnhancedContrast * 100 (percentage),default: 50
//文字のコントラストを0～100（パーセンテージ）で指定します。デフォルトは「50」
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
//ClearTypeLevel * 100 (percentage),default: 100
//クリアタイプ使用時のサブピクセル使用率を0～100（パーセンテージ）で指定します。デフォルトは「100」
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 80);
//PixelGeometry: 0 = flat, 1 = RGB, 2 = BGR, default: 0
//ディスプレイの画素の並びを0 = flat, 1 = RGB, 2 = BGRで指定。デフォルトは「0（flat）」
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);
//ClearTypeMode: 0 = default, 1 = aliased, 2 = GDI Classic, 3 = GDI Natural,4 = Natural, 5 = Natural Symmetric
//レンダリングモードを0～5で指定します。デフォルトは「0（flat）」
//
//    0 = default （環境に適した自動設定）
//    1 = aliased （アンチエイリアス無し）
//    2 = GDI Classic （bi-level 配置）
//    3 = GDI Natural （より自然な bi-level 配置）
//    4 = Natural （サブピクセル配置）
//    5 = Natural Symmetric （サブピクセル配置＋縦方向アンチエイリアス）
//
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);

// font関連
// クリアタイプの使用
user_pref("gfx.font_rendering.cleartype.always_use_for_content", true); // [Default]:false
// テキストスムージングを使用
user_pref("gfx.use_text_smoothing_setting", true); // [Default]:false
