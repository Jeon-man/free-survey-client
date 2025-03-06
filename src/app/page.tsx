import { ModeToggle } from "@/components/common/theme-toggle";
import { CreateSurveyForm } from "@/components/survey-form";

export default function Home() {
  return (
    <div className="">
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <div className="flex justify-center items-center p-72">
        <CreateSurveyForm />
      </div>
    </div>
  );
}
