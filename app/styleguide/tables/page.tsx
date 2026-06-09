import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Table from "@/app/components/tables/Table";
import Panel from "@/app/components/Panel";

export default function TablesPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Tabeller"
                description="Tabellkomponenter används för att presentera strukturerad data i ett organiserat format. Base Table är grunden för specialiserade tabelltyper."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: 
`<Table headers={["Kolumn 1", "Kolumn 2", "Kolumn 3"]}>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
    </tr>
</Table>`
                    },
                    {
                        language: "TypeScript - komponenter",
                        code: 
`// Specialiserade tabellkomponenter:
<BookingTable initialBookings={bookingViews} credentials={user.credentials} />
<CarTable initialCars={cars} credentials={user.credentials} />
<UserBookingTable bookings={myBookings} />
<UserTable initialUsers={users} credentials={user.credentials}/>`
                    }
                ]}
                exampel={
                    <Panel className="flex flex-col gap-6 w-full">
                        <div className="w-full overflow-x-auto">
                            <p className="text-sm text-gray-600 mb-2">Enkel tabell med data</p>
                            <Table 
                                headers={["Namn", "Typ", "Pris"]}
                                classNameHead="bg-gray-100 border-b border-gray-200"
                            >
                                <tr>
                                    <td className="py-2">Volvo XC60</td>
                                    <td className="py-2">SUV</td>
                                    <td className="py-2">450 kr/dag</td>
                                </tr>
                                <tr className="border-t border-gray-100">
                                    <td className="py-2">Tesla Model 3</td>
                                    <td className="py-2">Sedan</td>
                                    <td className="py-2">520 kr/dag</td>
                                </tr>
                                <tr className="border-t border-gray-100">
                                    <td className="py-2">BMW i4</td>
                                    <td className="py-2">Sedan</td>
                                    <td className="py-2">480 kr/dag</td>
                                </tr>
                            </Table>
                        </div>
                    </Panel>
                }
                explanations={[
                    {
                        label: "Table",
                        description: "Bas-tabellkomponent som kan användas för att visa olika typer av tabellarisk data. Accepterar headers array och children för tabellrader."
                    },
                    {
                        label: "headers",
                        description: "Array av strängar som definierar kolumnerna i tabellen. Varje string blir en th-cell."
                    },
                    {
                        label: "className",
                        description: "Valfri CSS-klasser för table-elementet. Används för att anpassa styling av hela tabellen."
                    },
                    {
                        label: "classNameHead",
                        description: "Valfri CSS-klasser för thead-raden. Använd för att anpassa styling av rubrikraden."
                    },
                    {
                        label: "BookingTable, CarTable, UserTable, UserBookingTable",
                        description: "Specialiserade tabellkomponenter som bygger på Table-komponenten och presenterar specifik data med lämpliga kolumner och formatering."
                    }
                ]}
            />
        </div>
    );
}
