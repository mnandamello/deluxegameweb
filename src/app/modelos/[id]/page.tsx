import { getById } from "@/app/actions/modelos/getById";
import NavBar from "@/components/NavBar";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { EditForm } from "./EditForm";

export default async function EditarModelo({params}: Params) {
    const {id} = params
    const modelo = await getById(id)

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="modelos" />

            <EditForm {...modelo} />

        </main>
    )
}