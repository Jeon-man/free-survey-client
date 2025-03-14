export default async function Page({
  params,
}: {
  params: Promise<{
    surveyId: string;
  }>;
}) {
  const { surveyId } = await params;

  return (
    <div>
      <h1>Survey client</h1>
      <p>Survey ID: {surveyId}</p>
    </div>
  );
}
