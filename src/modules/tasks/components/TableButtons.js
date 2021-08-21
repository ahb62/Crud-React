
import { DeleteDialog } from '../../shared/components/DeleteDialog';
import {Link} from 'react-router-dom';
import  EditDialog  from '../../shared/components/EditDialog';
const TableButtons = (props) =>
{
    const {tasks, task, setTriggering} = props;
    return(
        <>
        <DeleteDialog />
        <EditDialog task={task[0]} setTriggering={setTriggering}/>
            </>
    )
}
export default TableButtons;