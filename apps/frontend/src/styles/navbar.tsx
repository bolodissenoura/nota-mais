import { styled } from ".";
import router from "next/router";

const NavbarComponent = () => {

    const Navbar = styled("header", {
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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

        
    })

    return (
        <Navbar>
            <NavigationContainer>
                <UnorderedList>
                    <Item onClick={() => router.push("/home")}>nota mais</Item>
                    <Divisor />
                    <Item onClick={() => router.push("/")}>simulador</Item>
                </UnorderedList>
            </NavigationContainer>
        </Navbar>
    )
}

export default NavbarComponent

