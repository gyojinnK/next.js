export default async function Read(props) {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + `topics/${props.params.id}`,
        {
            next: { revalidate: 0 },
        }
    );
    const topic = await res.json();
    return (
        <>
            <h2>{topic.title}</h2>
            {topic.body}
        </>
    );
}
