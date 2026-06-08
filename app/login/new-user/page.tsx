import PageTitle from "@/app/components/headings/PageTitle";
import Card from "@/app/components/Card";
import Link from "next/link";
import RegisterUserForm from "@/app/components/forms/RegisterUserForm";

export default function NewUserPage() {
    return (
        <div className="boxed-content m-auto max-w-2xl space-y-8">
            <PageTitle>Skapa ny användare</PageTitle>
            <Card>
                <RegisterUserForm />
                <p className="text-sm text-gray-600">
                    Redan användare?{' '}
                    <Link href="/login" className="underline">
                        Logga in här
                    </Link>
                </p>
            </Card>
        </div>
    );
}
