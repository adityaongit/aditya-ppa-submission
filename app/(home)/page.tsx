import {
    Jumbotron,
    Blogs,
    CallToAction,
    Clients,
    Community,
    Customers,
    Demo,
    Pixelgrade,
    Services,
} from "../../components";

export default function Home() {
    return (
        <main className="mt-20">
            <Jumbotron />
            <Clients />
            <Community />
            <Pixelgrade />
            <CallToAction />
            <Services />
            <Customers />
            <Blogs />
            <Demo />
        </main>
    );
}
