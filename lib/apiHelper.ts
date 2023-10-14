export const get = (url: string) =>
  fetch(url).then((response) => response.json());

export const getString = (url: string) =>
  fetch(url).then((response) => response);

export const getText = (url: string) => fetch(url).then((res) => res.text());

export const post = (url: string, data: any, config: any = {}) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return fetch(url, {
    ...config,
    method: "POST",
    body: JSON.stringify(data),
    headers,
  }).then((res) => res.json());
};

type loginDataType = { email: string; password: string };

export async function checkUser(data: loginDataType) {
  try {
    const res = await post(
      "https://mentormee-api.onrender.com/auth/register",
      data
    );

    console.log(res);
  } catch (err) {
    console.log("error");
  }
}

export const getMentorInfo = async (setData) => {
  const data = await get(
    "https://cardbackendhngx.onrender.com/api/get_data"
  ).catch((err) => console.error(err, "Error fetching Mentor data "));
  setData(data);
  console.log(data);

  return data;
};
