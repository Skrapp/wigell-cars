import Button from "../components/Button";
import Card from "../components/Card";
import CardTitle from "../components/headings/CardTitle";
import Panel from "../components/Panel";
import PageTitle from "../components/headings/PageTitle";
import { styleGuideNavigation } from "../pages";

const placeholderImage = "/imgs/cars/placeholder.jpg";

export default function Page() {
    return (
        <div className="space-y-8">
            <PageTitle>Styleguide</PageTitle>
            <p className="max-w-3xl text-gray-700">
                Här samlas återanvändbara komponenter och designprinciper som används i Wigells biluthyrning.
                Klicka på ett av exemplen för att läsa mer om komponentens syfte och uppbyggnad.
            </p>
            <Panel className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {styleGuideNavigation.map((page) => (
                    <Card
                        key={page.href}
                        img={page.img ?? placeholderImage}
                        imgAlt={page.imgAlt ?? `${page.title} illustration`}
                    >
                        <CardTitle>{page.title}</CardTitle>
                        <p>{page.description}</p>
                        <Button href={page.href}>Visa</Button>
                    </Card>
                ))}
            </Panel>
        </div>
    );
}