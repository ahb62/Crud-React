import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from '../../../styles/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const styles = useStyles();
  return (
    <div>
      <Button aria-controls="simple-menu" className={styles.appBarDropdown} aria-haspopup="true" onClick={handleClick}>
        <AccountCircleIcon className={styles.accountCircleIcon} />
        User
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem  className={styles.appBarDropdownMenu} onClick={handleClose}>Profile</MenuItem>
        <MenuItem  className={styles.appBarDropdownMenu} onClick={handleClose}>My account</MenuItem>
        <MenuItem  className={styles.appBarDropdownMenu} onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
