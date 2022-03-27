(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{996:function(t,e,a){"use strict";a.r(e);var n=a(35),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"環境変数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#環境変数"}},[t._v("#")]),t._v(" 環境変数")]),t._v(" "),a("p",[t._v("外部アプリケーションが使用する環境を制御することはシェルの一般的なタスクです。多くの場合、環境はパッケージ化されて外部のアプリケーション起動時に与えられることで自動的に行われます。しかし時には、アプリケーションが利用する環境変数をより正確に制御したい場合があります。")]),t._v(" "),a("p",[t._v("アプリケーションに送られる現在の環境変数は"),a("code",[t._v("$nu.env")]),t._v("の値を echo して確認することができます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> echo $nu.env\n──────────────────────────┬──────────────────────────────\n COLORTERM                │ truecolor\n DBUS_SESSION_BUS_ADDRESS │ unix:path=/run/user/1000/bus\n DESKTOP_SESSION          │ gnome\n DISPLAY                  │ :1\n")])])]),a("p",[t._v("環境は Nu の設定と Nu が実行されている環境から作られます。"),a("RouterLink",{attrs:{to:"/ja/book/configuration.html"}},[t._v("設定の章")]),t._v("に記載されている方法で環境を恒久的に更新できます。")],1),t._v(" "),a("p",[t._v("コマンドやパイプラインを実行するときに一時的に環境変数を更新することもできます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> with-env [FOO BAR] { echo $nu.env.FOO }\nBAR\n")])])]),a("p",[a("code",[t._v("with-env")]),t._v('コマンドは、環境変数を一時的に与えられた値に設定します(ここでは変数"FOO"に"BAR"という値がセットされます)。ブロックは新しい環境変数が設定された状態で実行されます。')]),t._v(" "),a("p",[t._v("Bash などにヒントを得た一般的な省略記法も用意されています。上の例は次のように書くことができます。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("> FOO=BAR echo $nu.env.FOO\nBAR\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);