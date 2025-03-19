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
import { Question } from "@/types/question.types";
import { useState } from "react";

interface QuestionEditorProps {
  currentQuestion: Question & { index: number };
  deleteQuestion: (index: number) => void;
}

export function QuestionEditor({
  currentQuestion,
  deleteQuestion,
}: QuestionEditorProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Input placeholder="question" />
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant="outline"
          color="gray"
        >
          {isEditing ? "Cancel" : "Edit"}
        </Button>
        {isEditing ? (
          <Button onClick={() => {}} color="blue">
            Save
          </Button>
        ) : (
          <Button
            onClick={() => deleteQuestion(currentQuestion.index)}
            color="blue"
          >
            Delete
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
