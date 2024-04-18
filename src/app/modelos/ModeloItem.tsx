import DropDownActions from "@/components/DropDownActions";
import { Icone } from "@/components/Icone";


interface ModeloItemProps{
    modelo : {
        id: number,
        nome: string,
        icone: string
    }
}
export function ModeloItem({ modelo }: ModeloItemProps){
    return (
        <div className="flex justify-between p-2">
            <div className="flex gap-2 items-center">
                <Icone nome={modelo.icone} />
                <span className="text-[18px] font-medium">{modelo.nome}</span>
            </div>
            <DropDownActions />
        </div>
    )

}