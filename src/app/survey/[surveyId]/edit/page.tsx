import { SurveyEditor } from "@/components/survey/edit/survey-editor";

export default function Page({
  params,
}: {
  params: {
    surveyId: string;
  };
}) {
  const { surveyId } = params;

  return (
    <div className="flex flex-1 justify-center pt-10">
      <SurveyEditor surveyId={surveyId} />
    </div>
  );
}
