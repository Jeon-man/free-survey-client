import { SurveyEditor } from "@/components/survey/edit/survey-editor";

export default async function Page({
  params,
}: {
  params: Promise<{
    surveyId: string;
  }>;
}) {
  const { surveyId } = await params;

  return (
    <div className="flex flex-1 justify-center pt-10">
      <SurveyEditor surveyId={surveyId} />
    </div>
  );
}
