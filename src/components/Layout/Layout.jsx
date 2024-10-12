import Container from "@mui/material/Container"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const Layout = (props) => {
  return (
    <>
    <Container minWidth="sm">
    <Header/>

    <main>{props.children}</main>

    <Footer/>
    </Container>
    </>
)
}

export default Layout