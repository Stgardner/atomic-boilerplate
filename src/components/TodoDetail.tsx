import { AppForm, AppPage } from "atomic"
import { useHistory, useParams } from "react-router"
import rootSchema from "../cache/todo/schema/todo.schema.json"
import { useTodos } from "../cache/todo/todo-cache"
export const TodoDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    console.log(id);
    const todo = useTodos(x => id ? x.retrieve(id) : { text: "" })
    const insertTodo = useTodos(x => x.insert);
    const { push } = useHistory()
    return <AppPage>
        <AppForm rootSchema={rootSchema} objectSchema={rootSchema.definitions.todo} data={todo} onSubmit={(validTodo) => {
            insertTodo(validTodo, validTodo.uuid).then(() => {
                push("/todos");
            })
        }}>

        </AppForm>
    </AppPage>

}