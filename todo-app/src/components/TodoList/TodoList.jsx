import { TodoFilters } from "../TodoFilters"

const TodoList = ({ children }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {children}
            <TodoFilters/>
        </div>
    )
}

export { TodoList }