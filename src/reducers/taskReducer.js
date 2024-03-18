export default function taskReducer(draft, action) {
    switch (action.type) {
        case "added": {
            draft.push({
                id: action.id,
                text: action.text,
                done: false,
            });
            break;
            // return [
            //     ...tasks,
            //     {
            //         id: action.id,
            //         text: action.text,
            //         done: false,
            //     },
            // ];
        }
        case "changed": {
            const index = draft.findIndex(t => t.id === action.task.id);
            draft[index] = action.task;
            break;
            // return tasks.map((t) => {
            //     if (t.id === action.task.id) {
            //         return action.task;
            //     } else {
            //         return t;
            //     }
            // });
        }
        case "deleted": {
            return draft.filter((t) => t.id !== action.id);
        }

        default: {
            throw Error(`No action matched with ${action.type}`);
        }
    }
}