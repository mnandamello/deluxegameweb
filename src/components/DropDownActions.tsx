'use client'

import {
    Dropdown, 
    DropdownTrigger, 
    DropdownMenu, 
    DropdownItem, 
    Button
} from "@nextui-org/react";
import { ChevronDown } from 'lucide-react'

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
        <DropdownItem key="edit">editar</DropdownItem>
        <DropdownItem key="delete" className="">
          apagar
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
