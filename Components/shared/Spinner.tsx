import React from 'react'
import Image from 'next/image'
const Spinner = () => {
    const styles = {
        margin: 'auto',
        display: "block"
    }
    return (
        <Image src='/Spinner/spinner.gif' style={styles} alt='Spinner' width={400} height={400} />
    )
}

export default Spinner
