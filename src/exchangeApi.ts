const { VITE_EXCHANGERATE_API_KEY } = import.meta.env;
export default async function exchangeApi(currency_code: string) {
  const url = new URL("https://free.currconv.com/api/v7/convert");
  const params = new URLSearchParams();
  params.append("q", currency_code);
  params.append("compact", "ultra");
  params.append("apiKey", String(VITE_EXCHANGERATE_API_KEY));
  url.search = params.toString();

  return {
    USD_DOP: 57.449838,
  };

  //   return fetch(url)
  //     .then((res) => res.json())
  //     .catch(() => {
  //       throw false;
  //     });
}
