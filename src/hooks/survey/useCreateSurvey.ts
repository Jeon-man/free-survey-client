import createSurvey, {
  PostSurveyRequest,
  PostSurveyResponse,
} from "@/services/survey/createSurvey";

import { useMutation } from "@tanstack/react-query";

const useCreateSurvey = () => {
  return useMutation<PostSurveyResponse, Error, PostSurveyRequest>({
    mutationKey: ["createSurvey"],
    mutationFn: async (data) => createSurvey(data),
  });
};

export default useCreateSurvey;
