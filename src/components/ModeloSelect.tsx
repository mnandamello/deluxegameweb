'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { Icone } from "./Icone";

interface ModeloSelectProps  {
    modelos: Array<Modelo>,
    
}

export function ModeloSelect({modelos}: ModeloSelectProps) {

    return (
        <Select
            items={modelos}
            label="modelo"
            variant="bordered"
            name="modelo"
            placeholder="Selecione um modelos"
            labelPlacement="outside"
        >
            {(modelo) => 
                <SelectItem key={modelo.id} startContent={<Icone nome={modelo.icone} />}>
                    {modelo.nome}
                </SelectItem>
            }
        </Select>
    )
}