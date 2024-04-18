'use client'

import {
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Button
} from "@nextui-org/react";
import { ChevronDown,Pencil,Trash } from 'lucide-react'

export default function DropDownActions() {
  return (
    <Dropdown className="border-0 bg-customPink">
      <DropdownTrigger >
        <Button 
          variant="light" 
        >
          <ChevronDown />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="edit" startContent={<Pencil/>}>editar</DropdownItem>
        <DropdownItem key="delete" startContent={<Trash/>}>apagar</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
