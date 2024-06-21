"use client";
import { useState } from "react";
import { Button } from "../buttons/button";
import { Github, Menu, Twitter } from "lucide-react";
export function MobileHeader(props: {
  items: { name: string; href: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="h-[5.5vh] border-b flex items-center justify-between px-4">
        <div className="w-1/2">
          <span className="font-semibold">PatOrg</span>
        </div>
        <div className="w-1/2 flex justify-end">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="absolute h-[94.5vh] bg-slate-100 w-full">
          <div className="flex flex-col px-6 gap-4 py-4">
            {props.items &&
              props.items.map((e, i) => (
                <Button
                  variant={"outline"}
                  className="rounded-lg"
                  size={"lg"}
                  key={i}
                >
                  {e.name}
                </Button>
              ))}
          </div>
          <div className="flex justify-center gap-2">
            <Button
              variant={"secondary"}
              size={"icon"}
              className="rounded-full"
            >
              <Twitter />
            </Button>
            <Button
              variant={"secondary"}
              size={"icon"}
              className="rounded-full"
            >
              <Github />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
