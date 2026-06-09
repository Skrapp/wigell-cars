import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Panel from "@/app/components/Panel";
import LoginForm from "@/app/components/forms/LoginForm";

// Note: FormField needs to be used in a client component due to state requirements
// This is a static example showing the component structure

export default function FormsPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Formulär"
                description="Formulärkomponenter används för att samla in data från användare. FormField är baskomponenten för individuella indatafält."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: 
`<form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <FormField
        label="Användarnamn"
        name="username"
        value={username}
        onChange={setUsername}
        placeholder="Ange ditt användarnamn"
        required
    />
    <Button type=submit>Skicka</Button>
</form>`
                    },
                    {
                        language: "TypeScript",
                        code: `// Specialiserade formulärkomponenter:
<LoginForm />
<RegisterUserForm />
<NewCarForm />
<EditCarForm car={car} />
<EditUserForm user={user} />
<EditBookingForm booking={booking} />
<BookingForm carId={carId} />`
                    }
                ]}
                exampel={
                    <Panel className="flex flex-col gap-6 w-full">
                        <LoginForm />
                    </Panel>
                }
                explanations={[
                    {
                        label: "FormField",
                        description: "Bas-formfältkomponent för textinput. Accepterar label, name, onChange, placeholder, type (default 'text'), value, disabled, required och className."
                    },
                    {
                        label: "LoginForm",
                        description: "Formulär för användarinloggning. Kräver användarnamn och lösenord."
                    },
                    {
                        label: "RegisterUserForm",
                        description: "Formulär för registrering av nya användare. Samlar in användaruppgifter."
                    },
                    {
                        label: "NewCarForm",
                        description: "Formulär för att lägga till nya bilar i systemet. Kräver bilinformation som namn, modell, typ, etc."
                    },
                    {
                        label: "EditCarForm / EditUserForm / EditBookingForm",
                        description: "Redigeringsformulär för befintliga bilar, användare respektive bokningar. Förifyllt med aktuell data."
                    },
                    {
                        label: "BookingForm",
                        description: "Formulär för att skapa bokningar. Accepterar carId för att boka en specifik bil."
                    }
                ]}
            />
        </div>
    );
}
