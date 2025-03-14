"use client";

import { Survey } from "@/types/survey.types";
import { useEffect, useState } from "react";

export default function Page({
  params,
}: {
  params: Promise<{
    surveyId: string;
  }>;
}) {
  const [survey, setSurvey] = useState<Survey>();

  useEffect(() => {
    async function fetchSurvey() {
      const { surveyId } = await params;

      setSurvey({ id: surveyId, title: "Survey title" });
    }

    fetchSurvey();
  }, [params, survey]);

  return (
    <div>
      <h1>Survey admin</h1>
      <p>Survey ID: {survey?.id}</p>
    </div>
  );
}
