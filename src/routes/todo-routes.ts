import { AppRoute } from "atomic";
import { TodoDetail } from "../components/TodoDetail";
import { TodoList } from "../components/TodoList";

export const todoDetailRoute: AppRoute = { icon: "", path: "/todo/:id", title: "Todo", component: TodoDetail, dynamic: true };
export const todoListRoute: AppRoute = { icon: "", path: "/todos", title: "Todo List", component: TodoList };

export const todoRoutes: AppRoute[] = [todoDetailRoute, todoListRoute]