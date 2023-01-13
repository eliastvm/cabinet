import Image from 'next/image'
import Link from 'next/link'

export default function Artwork(data: any) {
    
    return (
        <>
        <h1>This page is using SSR</h1>
        <br></br>
        <br></br>
        <Link href={'/'}>Home</Link>
        <br></br>
        <br></br>
        <Link href={'/some'}>Some</Link>
        <br></br>
        <br></br>
        {data.data.data.map((i: any) => <>
        <h1 key={i.id}>{i.title}</h1>
        <Image alt={i.thumbnail.alt_text} src={i.thumbnail.lqip} width={400} height={400}></Image>
        </>)}
        </>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://api.artic.edu/api/v1/artworks`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }