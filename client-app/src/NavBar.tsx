import React from 'react'
import { Container, Menu } from 'semantic-ui-react'

const NavBar = () => {
    return (
        <div>
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item>
                    <img src="logo192.png" style={{marginRight: '1rem'}}></img>
                    Todos with React and MongoDB
                </Menu.Item>
            </Container>
        </Menu>
        </div>
    )
}

export default NavBar
