"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import useCreateSurvey from "@/hooks/survey/useCreateSurvey";
import { useRouter } from "next/navigation";
import { PasswordInput } from "./ui/password-input";

export function CreateSurveyForm() {
  const [title, setTitle] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);

  const mutation = useCreateSurvey();
  const router = useRouter();

  async function onCreateSurvey() {
    if (title.length < 2) {
      toast.error("Title must be at least 2 characters long.");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    const { id } = await mutation.mutateAsync({ title, password });

    router.push(`/surveys/${id}/edit`);
  }

  return (
    <Card className="w-full max-w-3xl items-center">
      <CardHeader>
        <CardTitle>Create Survey</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Input
          placeholder="title"
          onChange={(event) => setTitle(event.target.value)}
        />
        <PasswordInput
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger
            asChild
            onClick={() => {
              if (title.length >= 2) {
                setOpen(true);
              }
            }}
          >
            <Button className="w-full md:w-auto">Create Survey</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{`Do you want to make it ${title}?`}</AlertDialogTitle>
              <AlertDialogDescription>
                When you create a URL, you need to save it somewhere.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={onCreateSurvey}>
                Create
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
