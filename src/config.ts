import { createHttpClient } from "./lib/http_client";

export const dataWowClient = createHttpClient({
	prefixUrl: process.env.DATA_WOW_BACKEND_URL,
});
