import Link from "next/link";

export default function Some(data: any) {
    console.log(data.data.data)
    return (
    <>
    <h1>Some</h1>
    <h1>{data.data.data.name}</h1>
    <h1>{data.data.data.priceUsd}</h1>
    <Link href={'/some/deeply'}>Deeply</Link>
    </>
    )
}

export async function getStaticProps() {
    const res = await fetch(`https://api.coincap.io/v2/assets/bitcoin`)
    const data = await res.json()
  
    return {
      props: {
        data,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }