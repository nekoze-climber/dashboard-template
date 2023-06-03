module.exports = {
    printWidth: 160, //1行の最大文字数
    tabWidth: 4, //タブをスペースに変換する際のスペースの数
    singleQuote: true, //文字列をシングルクオートで囲うか。falseの場合ダブルクオート。
    trailingComma: 'es5', //配列やオブジェクトの末尾の要素もしくはプロパティ値にカンマを付与するか。
    //none：付与しない
    //es5：複数行に渡る場合のみ付与
    //all：可能な箇所は全て末尾にカンマをつける
    semi: false, //ステートメントの最後にセミコロンをつけるかどうか
    overrides: [
        //例外設定をつけることができる
        {
            files: '*.test.js',
            options: {
                semi: true,
            },
        },
        {
            files: ['*.html', 'legacy/**/*.js'],
            options: {
                singleQuote: false,
                tabWidth: 2,
            },
        },
    ],
}
