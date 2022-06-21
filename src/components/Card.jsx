import Image from 'next/image'
export default function Card({ image, title, autor }) {
    return (
        <div className="card">
            <div className="card-header playfair-style">
                <p>{autor}</p>
            </div>
            <div className="card-image">
                <Image src={`/img/${image}`} alt="card-image" layout='fill' />
            </div>
            <div className="card-title playfair-style">
                <h2 className="title-header">{title}</h2>
            </div>
        </div>
    )
}
