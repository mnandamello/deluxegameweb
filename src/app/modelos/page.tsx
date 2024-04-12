import NavBar from "@/components/NavBar";
//import { CategoriaItem } from "./CategoriaItem"
//import { Button } from "@nextui-org/button";
import {Button} from "@nextui-org/button"
import {CategoriaItem} from "./CategoriaItem"
import Image from 'next/image'
import Fundo from '../../../public/fundoModelo.jpeg';


export default function Modelos() {

  const categorias = [
    {
      id: 1,
      nome: "plystation",
      icone: "gamepad"
    },
    
    {
      id: 2,
      nome: "xbox",
      icone: "joystick"
    },
    
    {
      id: 3,
      nome: "computador",
      icone: "swords"
    },

  ]

  return ( 
    <main className="flex min-h-screen flex-col items-center">
      <div className="relative w-full">
        <div className="absolute -z-10 w-full">
        <Image src={Fundo} alt="aa" className="h-lvh w-screen" />

        </div>
      </div>
        
        <NavBar active="modelos" />
        

        <section className="flex flex-col gap-2 border-4 rounded-lg bg-costumFundo border-c100  min-w-[600px] mt-4 p-2">
          <h2 className="text-2xl font-bold">Modelos cadastrados</h2>
          
          <Button className="w-40 bg-customPink">nova categoria</Button>
          
          {categorias.map(categoria =>
            <CategoriaItem categoria={categoria} />
          )}
          
        </section>


      
    </main>

    
  );
}
