// Update import paths based on your Argon source location
import {
  Navbar,
  NavbarBrand,
  UncontrolledCollapse,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Container,
  Spinner,
  Button, ButtonGroup, Label, Input
} from 'reactstrap';
import { useState, useEffect } from 'react';
import MediaService from '../../../services/media-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faPen, faBrush } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header(props) {

  const GlobalTheme = props.GlobalTheme;
  const ThemeConfig = props.ThemeConfig;
  const UserData = props.UserData;

  const [collapseClasses, setCollapseClasses] = useState('');
  const [themeSelected, setThemeSelected] = useState('lightTheme');

  const setInfo = async (color, colorArea) => {
    let localThemeConfig = {...ThemeConfig}
    localThemeConfig[GlobalTheme].navBar[colorArea] = `${color}`
    let response = await props.setInfo('/data/shared/update/theme-config/', GlobalTheme === "darkTheme" ? {
      "dark_theme": JSON.stringify(localThemeConfig[GlobalTheme]),
    }:{
      "light_theme": JSON.stringify(localThemeConfig[GlobalTheme]),
    })
    if (response === 200)
      props.notificationToggler(`Color set for ${ThemeConfig[GlobalTheme].theme} successfully!`)
    if ([500, 404, 403].includes(response))
      props.notificationToggler("Something failed!", "danger")
  }

  useEffect(() => {
    props.ThemeSwitcher(themeSelected)
  }, [themeSelected])

  useEffect(() => {
    setThemeSelected(props.ThemeConfig.defaultTheme)
  }, [])

  if (GlobalTheme && ThemeConfig && UserData)
  return (
    <header className="header-global" id="site-header">
    <Navbar className={`navbar-horizontal ${ThemeConfig[GlobalTheme].navBar['navBarTheme']} ${ThemeConfig[GlobalTheme].navBar['background']}`} 
            expand="lg">
      <Container>
        <NavbarBrand>
          <Link to="/">
            {
              UserData.profilePhoto !== "" ? 
                <img 
                  style={{ width: '40px', height: '40px', objectFit: 'cover', 'marginRight': '10px' }} 
                  className="rounded-circle" 
                  src={MediaService.getMedia(UserData.profilePhoto)} 
                /> : ""
            }
            <Button color={`${ThemeConfig ? ThemeConfig[GlobalTheme].navBar['buttonColor'] : ""}`} size="lg">
              { UserData ? UserData.name : <Spinner> Loading... </Spinner> }
            </Button>
          </Link>
        </NavbarBrand>
        <Nav className="ml-lg-auto" navbar>
          <NavItem>
            <ButtonGroup style={{marginTop: '15px', marginBottom: '15px', marginRight: '15px'}}>
              <Button color={`${ThemeConfig ? ThemeConfig[GlobalTheme].navBar['buttonColor'] : ""}`}>
                <Link to="/categories">       
                  <FontAwesomeIcon icon={faPen} /> Blogs
                </Link>
              </Button>
              <Button
                color={`${ThemeConfig ? ThemeConfig[GlobalTheme].navBar['buttonColor'] : ""}`}
                outline
                onClick={() => {setThemeSelected('lightTheme')}}
                active={themeSelected === 'lightTheme'}
              >
                <FontAwesomeIcon icon={faSun} /> Light Theme
              </Button>
              <Button
                color={`${ThemeConfig ? ThemeConfig[GlobalTheme].navBar['buttonColor'] : ""}`}
                outline
                onClick={() => {setThemeSelected('darkTheme')}}
                active={themeSelected === 'darkTheme'}
              >
                <FontAwesomeIcon icon={faMoon}/> Dark Theme
              </Button>
            </ButtonGroup>

            <ButtonGroup style={{marginTop: '15px', marginBottom: '15px', marginRight: '15px'}}>
              <Button disabled color={`${ThemeConfig ? ThemeConfig[GlobalTheme].navBar['buttonColor'] : ""}`}>      
                <FontAwesomeIcon icon={faBrush} /> Set color
              </Button>
              <Button
                color='primary'
                onClick={() => setInfo('bg-primary', 'background')}/>
              <Button
                color='secondary'
                onClick={() => setInfo('bg-secondary', 'background')}/>
              <Button
                color='success'
                onClick={() => setInfo('bg-success', 'background')}/>
              <Button
                color='danger'
                onClick={() => setInfo('bg-danger', 'background')}/>
              <Button
                color='warning'
                onClick={() => setInfo('bg-warning', 'background')}/>
              <Button
                color='info'
                onClick={() => setInfo('bg-info', 'background')}/>
              <Button
                color='light'
                onClick={() => setInfo('bg-light', 'background')}/>
              <Button
                color='dark'
                onClick={() => setInfo('bg-dark', 'background')}/>
            </ButtonGroup>
            <ButtonGroup style={{marginTop: '15px', marginBottom: '15px'}}>
              <Button disabled color={`${ThemeConfig ? ThemeConfig[GlobalTheme].navBar['buttonColor'] : ""}`}>      
                <FontAwesomeIcon icon={faBrush} /> Set button color
              </Button>
              <Button
                color={`${ThemeConfig ? ThemeConfig[GlobalTheme].navBar['buttonColor'] : ""}`}
                outline
                onClick={() => setInfo('light', 'buttonColor')}>White</Button>
              <Button
                color={`${ThemeConfig ? ThemeConfig[GlobalTheme].navBar['buttonColor'] : ""}`}
                outline
                onClick={() => setInfo('black', 'buttonColor')}>Black</Button>
            </ButtonGroup>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;