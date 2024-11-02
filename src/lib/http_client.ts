import ky, { type KyInstance, type Options as KyOptions } from "ky";

export function createHttpClient(options?: KyOptions) {
	return ky.create({
		...options,
	});
}

export function withAuthBearer(client: KyInstance) {
	return (token: string, options?: KyOptions) =>
		client.extend({
			...options,
			hooks: {
				beforeRequest: [
					(req) => {
						req.headers.set("Authorization", `Bearer ${token}`);
					},
				],
			},
		});
}
