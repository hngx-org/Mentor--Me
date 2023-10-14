// import { useEffect, useState } from "react";

interface ReqOptions {
  url: string | undefined;
  method: "GET" | "POST";
  body?: string | Record<string, any>;
}

export default async function fetchData<T>(options: ReqOptions) {
  try {
    const response = await fetch(options.url!, {
      method: options.method,
      body: options.body && JSON.stringify(options.body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const result: T = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
}
