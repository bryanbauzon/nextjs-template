"use client";
import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { MENU_ITEMS } from "../constants/string";

export default function NavbarComp(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggle = () => {
    setIsMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        className="w-full"
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <p className="font-bold text-inherit">{props.name}</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {MENU_ITEMS.map((item, index) => (
            <NavbarItem key={index}>
              <Link href={`#${item.toLowerCase()}`}>{item}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        {/* <NavbarContent justify="end">
          <NavbarItem>
            <Link href="#">Login</Link>
          </NavbarItem>
        </NavbarContent> */}
        {isMenuOpen ? (
          <NavbarMenu>
            {MENU_ITEMS.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === MENU_ITEMS.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full"
                  href={`#${item.toLowerCase()}`}
                  size="lg"
                  onClick={() => {
                    toggle();
                  }}
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        ) : (
          <></>
        )}
      </Navbar>
    </>
  );
}
