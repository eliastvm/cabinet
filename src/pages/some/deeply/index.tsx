import Link from "next/link";

export default function Deeply(data: any) {
    return (
    <>
    <h1>Deeply</h1>
    <h1>{data.data.data.name}</h1>
    <h1>{data.data.data.priceUsd}</h1>
    <Link href={'/some/deeply/nested'}>Nested</Link>
    </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.coincap.io/v2/assets/bitcoin`)
    const data = await res.json()
  
    return {
      props: {
        data,
      }
    }
  }