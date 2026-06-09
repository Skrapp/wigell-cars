import StyleguideTemplate from "@/app/components/StyleguideTemplate";
import Panel from "@/app/components/Panel";
import Button from "@/app/components/Button";
import LogoutButton from "@/app/components/LogoutButton";
import SectionTitle from "@/app/components/headings/SectionTitle";

export default function UsersPage() {
    return (
        <div className="space-y-8">
            <StyleguideTemplate
                title="Användarkomponenter"
                description="Komponenter för att visa användarinformation, autentiseringsstatus och autentisering."
                codeBlocks={[
                    {
                        language: "TypeScript",
                        code: `<UserStatus />
<UserProfile user={user} />
<LogoutButton />`
                    }
                ]}
                exampel={
                    <Panel className="flex flex-col gap-6 w-full">
                        <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-2 text-sm shadow-sm shadow-slate-200/50 ">
                            <div className="space-y-0.5">
                                <p className="text-sm font-semibold text-slate-900">Hej Användarnamn!</p>
                                <p className="text-xs text-slate-500">Välkommen tillbaka</p>
                            </div>
                            <LogoutButton className="whitespace-nowrap" />
                        </div>
                        <section className="bg-white rounded-lg shadow-md p-6">
                            <SectionTitle>Din profil</SectionTitle>
                            <dl className="grid gap-3">
                                <div>
                                    <dt className="font-semibold">Användarnamn</dt>
                                    <dd>Gurra</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold">Användar-ID</dt>
                                    <dd>12</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold">Mail</dt>
                                    <dd>gurra@mail.com</dd>
                                </div>
                                <div>
                                    <dt className="font-semibold">Roll</dt>
                                    <dd>Användare</dd>
                                </div>
                            </dl>
                            <div className="mt-6 flex flex-row flex-wrap gap-4">
                                <Button href="/cars">Boka ny bil</Button>
                                <Button>Redigera profil</Button>
                            </div>
                        </section>
                    </Panel>
                }
                explanations={[
                    {
                        label: "UserStatus",
                        description: "Server-komponent som visar aktuell användarstatus. Visar antingen 'Du är inte inloggad' med länk till login, eller användarens namn."
                    },
                    {
                        label: "UserProfile",
                        description: "Visar detaljerad användarinformation i ett organiserat format. Visar användarnamn, ID, email och roll (Admin/Användare)."
                    },
                    {
                        label: "LogoutButton",
                        description: "Client-komponent för utloggning. Anropar /api/logout och navigerar användaren tillbaka till startsidan. Accepterar valfri className."
                    }
                ]}
            />
        </div>
    );
}
