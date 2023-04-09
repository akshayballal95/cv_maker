
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-wfyqIlTzeT9kjNlsWrmAWHz1",
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

let suffix = "Bulleted List of improved job roles for each job with maximum 5 bullet points \n consider the education and other previous job experiences for the above task \n Also consider the target job role \n this is the format of the output json file\n{\n'improved_job_roles':[\n'job_description':[]\n]  \n} \nOutput only json file without any other text limit each job role to 100 words"

export async function send_to_gpt(prompt: string): Promise<any> {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt + "\n" + suffix }],
    });

    return JSON.parse(completion.data.choices[0].message?.content.toString()!);
}
