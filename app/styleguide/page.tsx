import Button from "../components/Button";
import Card from "../components/Card";
import CardTitle from "../components/headings/CardTitle";
import Panel from "../components/Panel";
import {styleGuideNavigation} from "../pages"

export default function Page(){

    return(
        <div>
            <p>styleguide1</p>
            <Panel className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                styleGuideNavigation.map((page) =>(
                    <Card key={page.href} img={page.img} imgAlt={page.imgAlt}>
                        <CardTitle>{page.title}</CardTitle>
                        <p>{page.description}</p>
                        <Button href={page.href}>{page.title}</Button>
                    </Card>
                ))
            }
            </Panel>
        </div>
    );
}