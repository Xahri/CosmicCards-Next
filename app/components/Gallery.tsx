import CosmicImage from "./CosmicImage";

const apiKey = process.env.REACT_APP_NASA_KEY;

// Generate (N days) links to fetch.
function generateLinks(days: number): string[] {
    const links = [];
    const currentDate = new Date();
  
    for (let i = 0; i < days; i++) {
      const date = new Date(currentDate.getTime() - i * 24 * 60 * 60 * 1000).toISOString().substring(0, 10);
      const link = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;
      links.push(link);
    }
    
    return links;
}


export default async function Gallery() {

    const links = generateLinks(48);
    const promises = links.map(async (link) => { // This should be faster than using a loop.
        const data = await fetch(link);
        const result = await data.json();
        return result;
    });
    const results = await Promise.all(promises);
    // Filter the results, sometimes the result is not an image, and sometimes it doesn't exist for the current day yet.
    const filteredResults = results.filter((result) => result.media_type !== "video" && result.code !== 404);

    const SIZES_ARR = ['w-1 h-1', 'w-1 h-1', 'w-1 h-1', 'w-1 h-1', 'w-1 h-2', 'w-2 h-1', 'w-2 h-2', 'w-3 h-2', 'w-3 h-3'];
    
    return (
        
        <div className="container">
            {filteredResults.map((result) => {
                const randomSize = SIZES_ARR[Math.floor(Math.random() * (SIZES_ARR.length))]; // Random size from SIZES_ARR[].
                return (
                    <CosmicImage
                        key={result.title}
                        url={result.url}
                        title={result.title}
                        size={randomSize}
                        date={result.date}
                    />
                )
            })}
        </div>
    )
}
