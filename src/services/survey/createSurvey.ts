import { createRequest } from "@/lib/api";
import { Survey } from "@/types/survey.types";

export interface PostSurveyRequest {
  title: string;
  password: string;
  description?: string;
}

export interface PostSurveyResponse {
  id: string;
  title: string;
  description?: string;
}

const createSurvey = async (survey: Omit<Survey, "id">) => {
  const response = await createRequest<PostSurveyRequest, PostSurveyResponse>(
    "post",
    "/surveys",
    { ...survey }
  );

  return response.data;
};

export default createSurvey;
