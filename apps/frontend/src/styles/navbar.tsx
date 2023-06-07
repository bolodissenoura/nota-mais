import router from "next/router";
import { useState } from "react";
import { styled } from "../../stitches.config";

interface ItemPageProps {
    selected: "true" | "false"
}

const Navbar = styled("header", {
    paddingBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "$sm",

    "@bp1": {
        fontSize: "$md",
    }
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
    padding: "10px 20px",
    borderRadius: "10px",
    transition: "0.3s ease-out",

    variants: {
        selected: {
            true: {
                color: "white",
                background: "$gradientPrimary"
            },
            false: {
                border: "none"
            }
        }
    }
})



const NavbarComponent = () => {
    
    const [selectedPageHome, SetSelectedPageHome] = useState<boolean>(false)
    const [selectedPageSimulater, SetSelectedPageSimulater] = useState<boolean>(true)

    const SelectPage = () => {
        if(selectedPageHome) {
            SetSelectedPageHome(false);
            SetSelectedPageSimulater(true);
            router.push("/")
        } else {
            SetSelectedPageHome(true);
            SetSelectedPageSimulater(false);
            router.push("/home")
        }
    }

    return (
        <Navbar>
            <NavigationContainer>
                <UnorderedList>
                    <Item onClick={SelectPage} selected={selectedPageHome}>nota mais</Item>
                    <Divisor />
                    <Item onClick={SelectPage} selected={selectedPageSimulater}>simulador</Item>
                </UnorderedList>
            </NavigationContainer>
        </Navbar>
    )
}

export default NavbarComponent

