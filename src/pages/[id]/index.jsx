import Head from 'next/head'
import Image from 'next/image'
export default function ArtWorks() {
    return (
        <div>
            <header className="header-artwork">
                <div className="header-img-artwork">
                    <Image src="/img/obra-1.jpg" alt="" layout='fill' />
                </div>
                <div className="header-title-artwork">
                    <h2 className="playfair-style">LA JOVEN DE LA PERLA</h2>
                </div>
            </header>
            <main>
                <h2>Historia</h2>
            </main>
        </div>
    )
}
