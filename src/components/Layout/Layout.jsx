import Container from "@mui/material/Container"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = (props) => {
  return (
    <>
    <Container minwidth="sm">
    <Header/>

    <main>{props.children}</main>

    <Footer/>
    </Container>
    </>
)
}

export default Layout