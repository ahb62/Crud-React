
import { DeleteDialog } from '../../shared/components/DeleteDialog';
import  EditDialog  from '../../shared/components/EditDialog';
const TableButtons = ({tasks, idTask, task, setTriggering, refetch}) =>
{
    return(
        <>
        <DeleteDialog tasks={tasks} refetch={refetch} task={task} idTask={idTask} setTriggering={setTriggering} />
        <EditDialog tasks={tasks} task={task} refetch={refetch} idTask={idTask} setTriggering={setTriggering}/>
            </>
    )
}
export default TableButtons;