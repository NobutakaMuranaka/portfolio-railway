// このコードは、MicroCMSからポートフォリオの作品データを取得するための関数を定義しています。
// axiosを使用して、APIから作品データを取得し、そのデータを整形して返します。
// 作品データは、`Work`型として定義され、`workId`, `title`, `description`, `imageSrc`を含みます。
// `fetchWorks`関数は、APIから最大100件の作品データを取得し、`description`からHTMLタグを削除した上で、`Work[]`の形式で返します。
// エラーが発生した場合は、エラーメッセージをコンソールに出力し、空の配列を返します。

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
          "X-API-KEY": process.env.API_KEY,
        },
        params: {
          limit: 100,
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
