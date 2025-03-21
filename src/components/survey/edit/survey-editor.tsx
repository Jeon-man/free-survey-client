"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import useGetSurvey from "@/hooks/survey/useGetSurvey";
import { Question } from "@/types/question.types";
import { useState } from "react";
import { QuestionEditor } from "./question-editor";

interface SurveyEditorProps {
  surveyId: string;
}

export function SurveyEditor({ surveyId }: SurveyEditorProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const { isLoading, data } = useGetSurvey(surveyId);

  function deleteQuestion(index: number) {
    setQuestions(questions.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full max-w-3xl space-y-2.5">
      {!isLoading && data ? (
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>Edit Survey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-3">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={data.title} disabled={!isEditing} />
                  <Label htmlFor="name">description</Label>
                  <Input
                    id="description"
                    value={data.description || ""}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant="outline"
              color="gray"
            >
              {isEditing ? "Cancel" : "Edit"}
            </Button>
            {isEditing && (
              <Button onClick={() => {}} color="blue">
                Save
              </Button>
            )}
          </CardFooter>
        </Card>
      ) : (
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <Skeleton className="h-8 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </CardContent>
          <CardFooter className="flex justify-between">
            <Skeleton className="h-10 w-24" />
          </CardFooter>
        </Card>
      )}
      {!isLoading &&
        questions.map((question, index) => (
          <QuestionEditor
            key={index}
            currentQuestion={{ ...question, index }}
            deleteQuestion={deleteQuestion}
          />
        ))}
      <div>
        <Button
          onClick={() =>
            setQuestions([
              ...questions,
              {
                title: "",
                type: "objective",
                order: questions.length + 1,
                options: [{ text: "1" }],
              },
            ])
          }
          color="green"
        >
          Add Question
        </Button>
      </div>
    </div>
  );
}
