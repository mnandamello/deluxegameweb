

import { create } from "@/app/actions/modelos/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input, Link } from "@nextui-org/react";



export default function CadastrarModelo(){
    
    return ( 
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="modelos"/>

            <form action={create} className="flex flex-col gap-3 m-6 bg-costumFundo rounded p-6 min-w-[px]">
                <h2 className="text-2xl font-bold">Novo Modelo</h2>
                <Input
                key="nome"
                label="Nome"
                name="nome"
                labelPlacement={"outside"}
                />
                <div className="flex justify-around mt-4">
                    <Link href="/modelos"><Button variant="bordered">Cancelar</Button></Link>
                    <SubmitButton></SubmitButton>
                </div>
            </form>
            
        
        </main>

    )
}