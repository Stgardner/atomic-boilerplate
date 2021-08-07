import { composeStore } from "store";
import schema from "./schema/todo.schema.json";
import { Todo } from "./todo";
export const useTodos = composeStore<Todo>({ schema, definition: "todo", workspace: { description: "" } })