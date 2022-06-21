import Head from 'next/head'
import Image from 'next/image'
export default function ArtWorks() {
    return (
        <div>
            <header className="header-artwork">
                <div className='header-img-artwork'>
                    <img src="/img/obra-2.jpg" alt="" className="background-artwork" />
                    <img src="/img/obra-2.jpg" alt="" className="img-artwork" />
                </div>
            </header>
            <main>
                <h2>Historia</h2>
            </main>
        </div>
    )
}
