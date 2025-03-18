import { createRequest } from "@/lib/api";

export type GetSurveyRequest = object;

export interface GetSurveyResponse {
  id: string;
  title: string;
  description?: string;
}

const getSurvey = async (surveyId: string) => {
  const response = await createRequest<GetSurveyRequest, GetSurveyResponse>(
    "get",
    `/surveys/${surveyId}`
  );

  return response.data;
};

export default getSurvey;
