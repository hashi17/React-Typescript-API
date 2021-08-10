# React-Typescript-API

Created with CodeSandbox

## コンポーネントの型定義

- FC: children も暗黙に引き継いでしまう
  - react 18.0 からは、引き継がない
    - その間の暫定措置として、
    - VFC: を使う
    - Text.tsx 参照
    - Todo.tsx も編集
    ```
    export const Todo = (props: Omit<TodoType, "id">)
    から
    export const Todo: VFC<Omit<TodoType, "id">> = (props)
    ```

## オプショナルチェイニング

```
user.hobbies?.join(" / ")
hobbiesが存在しなければ、Undefinedを返してくれる
通常だとhobbiesがnullの場合、joinでエラーとなる
```

## ライブラリの型定義

react-router-dom ライブラリに対しての型定義は
@types/react-router-dom
と、基本@types/となっている

ライブラリに
index.d.ts が含まれる場合は、そのライブラリ自体に定義されている
または、package.json に、"typings" の項目が含まれるかで見分ける
