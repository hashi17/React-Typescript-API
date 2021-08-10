import { TodoType } from "./types/todo";
import { VFC } from "react";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;

  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザ：${userId})`}</p>;
};
// どちらでも良い
// 除外：props: Omit<TodoType, "id">
// 対象：props: Pick<TodoType, "title" | "userId" | "completed">
