import { FC, ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
    children: ReactNode
}

const mainStyles = {
    backgroundColor: 'var(--bg-color)',
    minHeight: 'calc(100vh - 4em)'
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main style={mainStyles}>
                {children}
            </main>
        </>
    )
}

export default Layout
