import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
import { Link, DirectLink, Element, animateScroll as scroll } from 'react-scroll'

function Header() {
    
    const [status, setStatus] = useState(false)
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a href="#">
                <img src="/images/logo.svg" />
            </a>
            <Menugroup>
                {cars && cars.map((car, index) => (
                    <div key={index}>{car}</div>
                    
                ))}
            </Menugroup>
            <RightMenu>
                <a href="#" >Shop</a>
                <a href="#" >Tesla Account</a>
                <MenuIconContainer onClick={() => setStatus(true)}>
                    <MenuIcon></MenuIcon>
                </MenuIconContainer>
            </RightMenu>
            <BurgerNav status={status}>
                <CloseContainer onClick = {() => setStatus(false)}>
                    <Close></Close>
                </CloseContainer>
                
                {cars && cars.map((car, index) => (
                    <li><Link key={index} className={index} to={index} smooth={true} duration={500} >{car}</Link></li>
                ))}
                {/* <li><Link className="id1" to="id1" smooth={true} duration={500}>Model Y</Link></li>
                <li><Link className="id2" to="id2" smooth={true} duration={500}>Model X</Link></li>
                <li><Link className="id3" to="id3" smooth={true} duration={500}>Model 3</Link></li> */}
                
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const Menugroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div {
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }
`
const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;
    }
`
const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`
const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    list-style: none;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        color: #393c41;
        align-items: center;
        text-align:center
    }
    li:hover{
        border-radius: 12px;
        transition: color .33s ease,background-color .33s ease;
        opacity: 0.85;
        background-color: #b3b4b6;
        cursor: pointer;
        
        
    }
    a {
        font-weight: 600;    
    }
    
`
const Close = styled(CloseIcon)`
    cursor: pointer;
`
const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`