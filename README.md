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
