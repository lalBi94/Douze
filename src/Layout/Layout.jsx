import NavBar from "../Components/NavBar/NavBar"

export default function Layout({children}) {
    return (
        <>
            <NavBar/>

            <main>
                {children}
            </main>
        </>
    )
}