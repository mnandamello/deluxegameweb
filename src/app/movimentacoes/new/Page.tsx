import NavBar from "@/components/NavBar";
import { getModelos } from "@/app/actions/modelos/getModelos";
import { Form } from "./Form";


export default async function CadastrarMovimentacoes() {
    const modelos = await getModelos()

    return (
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="movimentacoes" />

            <Form modelos={modelos} />
            
        </main>


    )
}