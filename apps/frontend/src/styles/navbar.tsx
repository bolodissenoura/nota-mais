import router from "next/router";
import { useState } from "react";
import { styled } from ".";

interface ItemPageProps {
    selected: "true" | "false"
}

const Navbar = styled("header", {
    padding: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "$sm"
})

const NavigationContainer = styled("nav", {
    height: "50px",
    width: "100%",
    borderRadius: "15px",
})

const UnorderedList = styled("ul", {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    gap: "15px",
    listStyle: "none",
    alignItems: "center",
    textTransform: "uppercase",
})

const Divisor = styled("span", {
    width: "1px",
    height: "50%",
    backgroundColor: "white"
})

const Item = styled("li", {
    cursor: "pointer",
    padding: "10px 30px",
    borderRadius: "10px",
    transition: "0.3s ease-out",

    variants: {
        selected: {
            true: {
                color: "white",
                fontWeight: "400",
                backgroundColor: "#78008b"
            },
            false: {
                border: "none"
            }
        }
    }
})

const NavbarComponent = () => {
    
    const [selectedPage, SetSelectedPage] = useState<boolean>(true)

    const SelectPage = () => {
        
    }

    return (
        <Navbar>
            <NavigationContainer>
                <UnorderedList>
                    <Item onClick={() => router.push("/home")} selected={selectedPage}>inicio</Item>
                    <Divisor />
                    <Item onClick={() => router.push("/")}>simulador</Item>
                </UnorderedList>
            </NavigationContainer>
        </Navbar>
    )
}

export default NavbarComponent

