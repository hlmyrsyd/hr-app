export default function SSRComponent({ serverTime }: { serverTime: string }) {
    return (
        <div>
            <p>This data is rendered on the server.</p>
            <p>Server Time: {serverTime}</p>
        </div>
    );
}

// This gets called on every request (SSR)
export async function getServerSideProps() {
    // You can replace this with an actual API call:
    // const response = await fetch('https://api.example.com/data');
    // const serverData = await response.json();
    
    const serverTime = new Date().toLocaleString(); // Placeholder for now

    // Pass serverTime to the page via props
    return {
        props: {
            serverTime,
        },
    };
}
