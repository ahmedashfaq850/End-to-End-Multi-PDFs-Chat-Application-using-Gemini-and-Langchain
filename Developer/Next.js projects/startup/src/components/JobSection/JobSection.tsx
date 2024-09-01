import Image from "next/image";
import Link from "next/link";
import { JobsSummariesData } from "@/lib/types";

const getSummariesForDisplay = async (
  userId: string,
  includeSummaries: boolean
) => {
  const url =
    "https://backend.prod.yournarrative.io/v1/activities/getActivitiesForDisplay/";
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };

  const body = {
    user_id: userId,
    include_summaries: includeSummaries,
  };

  try {
    /* const delay = (ms: any) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    await delay(3000); */

    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch summaries");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const JobSection = async () => {
  const summariesData = await getSummariesForDisplay(
    "755a6e7c-69ca-4acb-b608-73e745e8d28d",
    true
  );

  const organizationData = summariesData?.user_organization_data_map || {};

  return (
    <div className="my-14">
      {Object.keys(organizationData).length === 0 ? (
        <p className="flex justify-center my-10 pb-[100px]">
          No organizations found.
        </p>
      ) : (
        Object.keys(organizationData).map((organizationName: string) => (
          <div
            key={organizationName}
            className="w-full min-h-[200px] my-6 bg-bgWhite border-bgIntroBorder border-[1px] rounded-lg p-4"
          >
            <h1 className="font-semibold text-[20px]">{organizationName}</h1>
            <div className="w-full min-h-[120px] bg-bgWhite rounded-md border-[1px] border-bgIntroBorder p-4 mt-5">
              <p
                className="text-textIntro font-regular text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: organizationData[organizationName].summary,
                }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default JobSection;
