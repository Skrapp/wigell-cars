import { User } from "@/lib/types";
import SectionTitle from "./headings/SectionTitle";
import Button from "./Button";

type UserProfileProps = {
    user:User;
}

export default function UserProfile({user} : UserProfileProps ){
return( 

<section className="bg-white rounded-lg shadow-md p-6">
    <SectionTitle>Din profil</SectionTitle>
    <dl className="grid gap-3">
        <div>
            <dt className="font-semibold">Användarnamn</dt>
            <dd>{user.username}</dd>
        </div>
        <div>
            <dt className="font-semibold">Användar-ID</dt>
            <dd>{user.id}</dd>
        </div>
        <div>
            <dt className="font-semibold">Mail</dt>
            <dd>{user.email}</dd>
        </div>
        <div>
            <dt className="font-semibold">Roll</dt>
            <dd>{user.role === "ROLE_ADMIN" ? "Admin" : "Användare"}</dd>
        </div>
    </dl>
    <div className="mt-6 flex flex-row flex-wrap gap-4">
        <Button href="/cars">Boka ny bil</Button>
        <Button href="/me/edit">Redigera profil</Button>
    </div>
</section>
)} 