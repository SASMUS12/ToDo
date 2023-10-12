import React from "react";
import styles from '../TaskPage/TaskPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { moveTask } from '../../store/actions/taskActions';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

const TaskPage:React.FC = () => {
    const tasks = useSelector((state: RootState) => state.task.tasks);
    const dispatch = useDispatch();

    const hendleDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }
        
        const sourceIndex = result.source.index;
        const destinationIndex = result.destination.index;
        dispatch(moveTask(sourceIndex, destinationIndex));
    };

    return (
        <div>
            <h1>Задачи</h1>
        </div>
    )
}

export default TaskPage;