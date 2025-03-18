import { CreateSurveyForm } from "@/components/survey/survey-form";

export default function Home() {
  return (
    <>
      <div className="flex flex-1 justify-center items-center px-4">
        <CreateSurveyForm />
      </div>
    </>
  );
}
