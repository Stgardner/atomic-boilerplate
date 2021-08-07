import { AppButton, AppButtons, AppCard, AppContent, AppIcon, AppItem, AppList, AppPage, destination } from "atomic"
import { Todo } from "../cache/todo/todo"
import { useTodos } from "../cache/todo/todo-cache"
import { todoDetailRoute } from "../routes/todo-routes"
import { checkboxOutline, squareOutline } from "ionicons/icons"
const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
    const updateTodo = useTodos(x => x.update)
    const { done } = todo;
    return <AppItem>
        <AppButtons slot="start" >
            <AppButton routerLink={destination(todoDetailRoute, { id: todo.uuid })}>
                {todo.text}
            </AppButton>
        </AppButtons>
        <AppButtons slot="end">
            <AppButton onClick={() => {
                updateTodo(todo.uuid, (draftTodo) => {
                    draftTodo.done = !done;
                })
            }}>
                <AppIcon color={done ? "success" : "danger"} icon={done ? checkboxOutline : squareOutline} />
            </AppButton>
        </AppButtons>
    </AppItem>
}

export const TodoList: React.FC = () => {
    const todos = useTodos(x => x.all())
    return <AppPage>
        <AppContent>
            <AppCard>
                <AppList>
                    {todos.map((todo: Todo) => <TodoItem todo={todo} />)}
                    <AppButton routerLink={todoDetailRoute.path} fill="outline" expand="full">
                        Add new Todo Item
                    </AppButton>
                </AppList>
            </AppCard>
        </AppContent>
    </AppPage>
}