import notebookLogo from "../notebook-logo.png";
import { NavStyled, NavItem, Logo } from "../styles";

const NavBar = () => {
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <Logo className="navbar-brand" to="/" href="#">
        <img src={notebookLogo} alt="logo" width="50" />
      </Logo>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <NavItem
              className="nav-item"
              to="/notebooks"
              style={{ padding: 10 }}
            >
              Notebooks
            </NavItem>
          </li>
          <li className="nav-item active">
            <NavItem className="nav-item" to="/notes" style={{ padding: 10 }}>
              Notes
            </NavItem>
          </li>
        </ul>
      </div>
    </NavStyled>
  );
};

export default NavBar;
