import { useRouter } from "next/router"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export default function Layout({children}){
    const router = useRouter()
    const showHeader = router.pathname === '/play' ? false : true;
    return (
        <>
            {showHeader && <Navbar />}
                {children}
            {showHeader && <Footer/>}
        </>
    )
}