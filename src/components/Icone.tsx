import { Swords, Gamepad, Joystick  } from 'lucide-react'

interface IconeProps {
    nome: string
}

const icones = [
    {nome: "swords", icone: <Swords size={44} style={{color: '#F2186E'}} />},
    {nome: "gamepad", icone: <Gamepad size={44} style={{color: '#F2186E'}}/>},
    {nome: "joystick", icone: <Joystick size={44} style={{color: '#F2186E'}}/>}, 
]

export function Icone({nome}: IconeProps){
    return icones.find( icone => icone.nome == nome )?.icone    
}