import { SSRComponent, CSRComponent, SSRPokemon } from "./components"

export default function page() {
    const serverTime = new Date().toLocaleString();

    return (
        <div className="flex flex-col mx-auto max-w-screen-xl py-20 gap-10">
            <div 
                className="py-2 border-b border-solid border-black/[.08] dark:border-white/[.145]"
            >
                <h1 
                    className="text-[3rem] font-bold"
                >
                    CSR vs SSR
                </h1>
                <p>Client-Side Rendering vs Sever-Side Rendering</p>
            </div>

            <section
                className="flex flex-col gap-2"
            >
                <h2
                    className="py-2 border-b border-solid border-black/[.08] dark:border-white/[.145]"
                >
                    Client-Side Rendering (CSR)
                </h2>
                <p>
                    In CSR, the JavaScript framework (like React) is initially loaded on the client’s browser, and then the browser makes additional requests (usually via APIs) to fetch the data it needs. The rendering happens entirely in the browser after the initial HTML page loads.
                </p>
                <div className="border border-black/[.08] dark:border-white/[.145] my-2 p-4 rounded-xl bg-neutral-900">
                    <code>
                        <CSRComponent />
                    </code>
                </div>
            </section>

            <section
                className="flex flex-col gap-2"
            >
                <h2 
                    className="py-2 border-b border-solid border-black/[.08] dark:border-white/[.145]"
                >
                    Server-Side Rendering (SSR)
                </h2>
                <p>
                    In SSR, the page is fully rendered on the server before it is sent to the client. The server prepares an HTML page with data already populated, and the browser simply displays it. This approach has gained popularity with frameworks like Next.js.
                </p>
                <div className="border border-black/[.08] dark:border-white/[.145] my-2 p-4 rounded-xl bg-neutral-900">
                    <code>
                        <SSRComponent serverTime={serverTime} />
                    </code>
                </div>
                <h2>
                    fetch from 
                    <a 
                        href="pokeapi.co" 
                        target="_blank"
                        className="pl-1 italic hover:underline"
                    >
                        pokeapi.co
                    </a>
                </h2>
                <div className="border border-black/[.08] dark:border-white/[.145] my-2 p-4 rounded-xl bg-neutral-900">
                    <code>
                        <SSRPokemon pokemonName={""} initialIndex={0} />
                    </code>
                </div>
            </section>

        </div> 
    )
};