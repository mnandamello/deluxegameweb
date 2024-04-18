"use client"

import { create } from "@/app/actions/modelos/create";
import { icones } from "@/app/utils/Icones";
import { Icone } from "@/components/Icone";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Autocomplete, AutocompleteItem, Input } from "@nextui-org/react";

import { useFormState } from "react-dom";

const initialState = {
    message: '',
}


export default function CadastrarModelo() {
    
    const [state, formAction] = useFormState(create, initialState)
    
    return ( 
        <main className="flex min-h-screen flex-col items-center">
            <NavBar active="modelos"/>

            <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
                <h2 className="text-2xl font-bold">Novo Modelo</h2>
                <Input
                    key="nome"
                    label="Nome"
                    name="nome"
                    variant="bordered"
                    labelPlacement={"outside"}
                    isInvalid={state?.message != ''}
                    errorMessage={state?.message}
                />
                <Autocomplete
                    defaultItems={icones}
                    label="Ícone"
                    name="icone"
                    variant="bordered"
                    labelPlacement={"outside"}
                    placeholder="procurar ícone"
                >
                    {(icone) => <AutocompleteItem key={icone.nome} startContent={<Icone nome={icone.nome} />}>{icone.nome}</AutocompleteItem>}
                </Autocomplete>
                <div className="flex justify-around mt-4">
                    <Link href="/modelos"><Button variant="bordered">Cancelar</Button></Link>
                    <SubmitButton></SubmitButton>
                </div>
            </form>
            
        
        </main>

    )
}