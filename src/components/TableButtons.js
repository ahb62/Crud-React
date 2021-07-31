import DeleteOutlineSharpIcon from '@material-ui/icons/DeleteOutlineSharp';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {IconButton} from '@material-ui/core/';
/* import useStyles from '../styles/styles'; */
const TableButtons = () =>
{
/*     const styles = useStyles(); */
    return(
        <>
            <IconButton size="small">
                <EditOutlinedIcon />
            </IconButton>
            <IconButton size="small">
            <DeleteOutlineSharpIcon />
            </IconButton>
        </>
    )
}
export default TableButtons;