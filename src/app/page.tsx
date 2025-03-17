import { ModeToggle } from "@/components/common/theme-toggle";
import { CreateSurveyForm } from "@/components/survey/survey-form";

export default function Home() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <div className="flex flex-1 justify-center items-center px-4">
        <CreateSurveyForm />
      </div>
    </>
  );
}
