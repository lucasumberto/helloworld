import './HttpCatsCard.scss';

interface HttpCatsCardProps {
    httpCode: string;
}

function HttpCatsCard({ httpCode }: HttpCatsCardProps) {

    return (
        <>
            <div className="hw-httpCatsCard" onClick={() => window.open(`https://http.cat/status/${httpCode}`, '_blank')}>
                <div className="hw-httpCatsCard__image">
                    <img src={`https://http.cat/${httpCode}`} alt={`Imagem do gato http ${httpCode}`} />
                </div>
                <div className="bg-blue-500 text-white p-4 text-xl">
                    { httpCode }
                </div>
            </div>
        </>
    )
}

export default HttpCatsCard