"use client"


import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/modelos/destroy";
import { useRouter } from "next/navigation";


interface ModeloItemProps {
    modelo: Modelo
}
export function ModeloItem({ modelo }: ModeloItemProps){
    const router = useRouter()

    function handleDelete() {
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
            <DropDownActions
                onEdit={ () => router.push(`/modelos/${modelo.id}`) }
                onDelete={handleDelete}
            />
        </div>
    )

}