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
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import useCreateSurvey from "@/hooks/survey/useCreateSurvey";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export function CreateSurveyForm() {
  const [title, setTitle] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);

  const mutation = useCreateSurvey();
  const router = useRouter();

  async function onCreateSurvey() {
    setProgress(33);

    setTimeout(() => {
      setProgress(90);
    }, 500);

    mutation.mutate(
      { title, password },
      {
        onSuccess(data) {
          toast.success("Survey created successfully.");
          router.push(`/survey/${data.id}/edit`);
        },
        onError(error) {
          toast.error(error.message);
        },
        onSettled() {
          setProgress(100);
        },
      }
    );
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
          disabled={false}
          onChange={(e) => setPassword(e.target.value)}
        />
      </CardContent>
      <CardFooter className="flex justify-end">
        <AlertDialog open={open}>
          <AlertDialogTrigger
            asChild
            onClick={() => {
              if (title.length < 2) {
                toast.error("Title must be at least 2 characters long.");
                setOpen(false);
                return;
              }

              if (password.length < 6) {
                toast.error("Password must be at least 6 characters long.");
                setOpen(false);
                return;
              }

              setOpen(true);
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
              {mutation.isPending ? (
                <Progress value={progress} />
              ) : (
                <>
                  <AlertDialogCancel onClick={() => setOpen(false)}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={onCreateSurvey}>
                    Create
                  </AlertDialogAction>
                </>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
