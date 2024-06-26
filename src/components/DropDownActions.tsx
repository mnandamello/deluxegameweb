'use client'

import {
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Button
} from "@nextui-org/react";
import { ChevronDown,Pencil,Trash } from 'lucide-react'
import { MouseEventHandler } from 'react'

interface DropDownActionsProps{
  onDelete: MouseEventHandler,
  onEdit: MouseEventHandler
}

export default function DropDownActions({onDelete, onEdit}: DropDownActionsProps) {
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
      <DropdownItem onClick={onEdit} key="edit" startContent={<Pencil />} >editar</DropdownItem>
      <DropdownItem onClick={onDelete} startContent={<Trash />} key="delete" >
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
