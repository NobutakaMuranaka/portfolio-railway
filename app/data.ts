import axios from "axios";

export type Work = {
  workId: string;
  title: string;
  description: string;
  imageSrc: string;
};

export const fetchWorks = async (): Promise<Work[]> => {
  try {
    const response = await axios.get(
      "https://portfolio-railway.microcms.io/api/v1/works",
      {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
        },
      }
    );

    console.log(response.data); // ここでレスポンスデータを確認

    return response.data.contents.map((item: any) => ({
      workId: item.workId,
      title: item.title,
      description: item.description.replace(/<[^>]+>/g, ""),
      imageSrc: item.imageSrc?.url || "", // imageSrcオブジェクトからURLを取得
    }));
  } catch (error) {
    console.error("MicroCMSからのデータ取得エラー:", error);
    return [];
  }
};
