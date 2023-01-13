import Link from "next/link";

export default function Nested() {
    return (
    <>
    <h1>Nested</h1>
    <Link href={'/some/deeply/nested/route'}>Route</Link>
    </>
    )
}

