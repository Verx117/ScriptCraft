import { useState } from "react";
import * as React from "react";
import { progress } from "framer-motion";
import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components";

import { useTheme } from "@hooks";
import { convertColorToLottieColor } from "@utils";

import { IconSprinkles } from "@icons";
import { animationLoader } from "@animations";

const mockPrompt = [
  {
    id: "1",
    title: "Prompt 1",
    description: "Description 1",
    children: [
      {
        id: "1",
        title: "Tast 1",
        description: "Description 1",
      },
      {
        id: "2",
        title: "Tast 2",
        description: "Description 2",
      },
    ],
  },
  {
    id: "2",
    title: "Prompt 2",
    description: "Description 2",
    children: [
      {
        id: "1",
        title: "Tast 1",
        description: "Description 1",
      },
      {
        id: "2",
        title: "Tast 2",
        description: "Description 2",
      },
    ],
  },
];

const App = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const startLoading = () => {
    setIsLoading(true);
  };

  const { colors } = useTheme();

  return (
    <div className="h-screen w-full bg-background bg-dot-ring/[0.2] relative flex items-center justify-center text-accent-foreground">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-light-gray [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="flex flex-col w-full h-full max-w-5xl">
        <header className="flex items-center w-full h-24">
          <div className="relative flex items-center">
            <h1 className="text-2xl">ScriptCraft</h1>
            <IconSprinkles className="absolute w-5 h-5 fill-primary -right-5 -top-1" />
          </div>
        </header>
        <main className="flex flex-col items-center w-full h-full">
          <h2 className="my-8 text-xl tracking-wider">
            Learn your way of creating new APP with the help of AI magic!
          </h2>
          <form
            className="flex w-full mt-8 mb-4 space-x-4"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Input id="name" placeholder="Write a prompt for your project" />
            <Button className="w-28" onClick={startLoading}>
              Ask Magic
            </Button>
          </form>
          {isLoading && (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Lottie
                className="w-56 h-56"
                animationData={animationLoader(
                  convertColorToLottieColor(colors.primary.DEFAULT),
                )}
              />
              <div className="animate-bounce">
                <p className="text-xl bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.primary.DEFAULT),theme(colors.sky.400),theme(colors.primary.DEFAULT))] bg-[length:200%_auto] animate-gradient font-semibold transition-colors duration-1000 delay 1000 ease-in-out">
                  Crafting the magic scripts
                </p>
              </div>
            </div>
          )}

          {/*accordion dei prompt */}
          {/*<Accordion type="single" collapsible className="w-full">
            {mockPrompt.map((mockPromptItem) => (
              <AccordionItem key={mockPromptItem.id} value={mockPromptItem.id}>
                <AccordionTrigger>{mockPromptItem.title}</AccordionTrigger>
                <AccordionContent>
                  {mockPromptItem.description}
                  {/accordion dei Task/}
                  <Accordion type="single" collapsible className="w-full pl-4">
                    {mockPromptItem.children.map((subTask) => (
                      <AccordionItem key={subTask.id} value={subTask.id}>
                        <AccordionTrigger>{subTask.title}</AccordionTrigger>
                        <AccordionContent>
                          {subTask.description}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
                    </Accordion>*/}
        </main>
      </div>
    </div>
  );
};

export default App;
