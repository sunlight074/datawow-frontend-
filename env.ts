import { z } from "zod";

const appEnvSchema = z.object({
	DATA_WOW_BACKEND_URL: z.string().url(),
});

export type AppEnvs = z.infer<typeof appEnvSchema>;

(async () => {
	try {
		await appEnvSchema.parseAsync(process.env);
	} catch (err) {
		console.error(err);
	}
})();
