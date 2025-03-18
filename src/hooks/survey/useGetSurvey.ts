import getSurvey, { GetSurveyResponse } from "@/services/survey/getSurvey";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useGetSurvey = (surveyId: string) => {
  return useQuery<GetSurveyResponse, AxiosError>({
    queryKey: ["survey", surveyId],
    queryFn: () => getSurvey(surveyId),
  });
};

export default useGetSurvey;
