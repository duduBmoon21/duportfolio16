import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export const Data = [
  {
    link: "#",
    icon: Linkedin,
    tooltip: "Connect On Linkedin",
  },
  {
    link: "https://github.com/duduBmoon21",
    icon: Github,
    tooltip: "Connect On Github",
  },
  {
    link: "#",
    icon: Instagram,
    tooltip: "Follow On X",
  },
  {
    link: "mailto:eleanortefera21@gmail.com",
    icon: Mail,
    tooltip: "Mail Us",
  },
];

export default function Social() {
  return (
    <section className="md:fixed xl:bottom-40 xl:left-4 2xl:bottom-80 2xl:left-10 hidden lg:flex lg:flex-col gap-3 z-20">
      {Data.map((item, index) => {
        return (
          <TooltipProvider key={index}>
            <Link href={item.link} passHref={true} target="_blank">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <item.icon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{item.tooltip}</TooltipContent>
              </Tooltip>
            </Link>
          </TooltipProvider>
        );
      })}
    </section>
  );
}

export const PhoneSocial = () => {
  return (
    <div className="flex flex-row justify-center space-x-5 mt-2 sm:hidden">
      {Data.map((item, index) => {
        return (
          <TooltipProvider key={index}>
            <Link href={item.link} passHref={true} target="_blank">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <item.icon />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{item.tooltip}</TooltipContent>
              </Tooltip>
            </Link>
          </TooltipProvider>
        );
      })}
    </div>
  );
};
