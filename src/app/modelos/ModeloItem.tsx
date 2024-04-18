"use client"


import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";
import { create } from "domain";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/modelos/destroy";


interface ModeloItemProps{
    modelo : {
        id: number,
        nome: string,
        icone: string
    }
}
export function ModeloItem({ modelo }: ModeloItemProps){

    function handleDelete(){
        toast.promise(
            destroy(modelo.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }

    return (
        <div className="flex justify-between p-2">
            <div className="flex gap-2 items-center">
                <Icone nome={modelo.icone} />
                <span className="text-[18px] font-medium">{modelo.nome}</span>
            </div>
            <DropDownActions onDelete={handleDelete} />
        </div>
    )

}