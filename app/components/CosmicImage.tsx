type CosmicProps = {
    url: string;
    title: string;
    date: string;
    size: string;
}

export default function CosmicImage({url, title, date, size}: CosmicProps) {

    return (
        <div className={`gallery-item ${size}`}>
            <h4 className="absolute p-1 font-medium">{date}</h4>
            <img src={url} alt={title}/>
            <div className="title">{title}</div>
        </div>
    )
}
