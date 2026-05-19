import './HttpCatsCard.css';

interface HttpCatsCardProps {
    httpCode: string;
}

function HttpCatsCard({ httpCode }: HttpCatsCardProps) {

    return (
        <>
            <div>
                <div className="hw-httpCatsCard" onClick={() => window.open(`https://http.cat/status/${httpCode}`, '_blank')}>
                    <img src={`https://http.cat/${httpCode}`} alt={`Imagem do gato http ${httpCode}`} />
                </div>
                { httpCode }
            </div>
        </>
    )
}

export default HttpCatsCard