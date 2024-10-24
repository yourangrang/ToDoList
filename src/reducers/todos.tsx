enum ActionType {
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
}

interface Todo {
    id: number;      // 고유 ID
    text: string;    // 투두 텍스트
}

interface Action {
    type: ActionType;
    todo?: Todo;     // 추가할 투두
    id?: number;     // 삭제할 투두 ID
}

const todos = (state: Todo[] = [], action: Action)=>{
    switch(action.type) {
        case "ADD_TODO":
            return [...state, action.todo!]
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

export default todos;