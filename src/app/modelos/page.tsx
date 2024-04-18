import NavBar from "@/components/NavBar";
import {Button} from "@nextui-org/button"
import {ModeloItem} from "./ModeloItem"
import Image from 'next/image'
import Fundo from '../../../public/fundoModelo.png';
import { Plus } from "lucide-react";
import {getModelos} from '../actions/modelos/getModelos'
import { Link } from "@nextui-org/react";

interface Modelo{
    id: number,
    nome: string,
    icone: string

}


export default async function Modelos() {

  
  const modelos: Modelo[] = await getModelos()

  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-full">
        <div className="absolute -z-10 h-lvh w-screen ">
        <Image src={Fundo} alt="aa" className="block h-lvh w-screen" />

        </div>
      </div>
        
        <NavBar active="modelos" />
        

        <section className="flex flex-col gap-2 border-4 rounded-lg bg-costumFundo border-c100  min-w-[600px] mt-4 p-2">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Modelos cadastrados</h2>
            <Link href="/modelos/new">
            <Button color="primary" startContent={<Plus/>}>nova categoria</Button>
            </Link>
          </div>
          
          {modelos.map(modelo =>
            <ModeloItem modelo={modelo} />
          )}
          
        </section>


      
    </main>

    
  );
}
