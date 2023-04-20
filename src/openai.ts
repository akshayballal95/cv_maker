
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-wfyqIlTzeT9kjNlsWrmAWHz1",
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

let suffix = "Bulleted List of improved job roles for each job with 4 bullet points \n also give an introduction based on the data provided in maximum of 50 words in first person\n consider the education and other previous job experiences for the above task \n Also consider the target job role \nalso give improved project descriptions\nimproved projects description should be 50 words\n this is the format of the output json file and should be followed strictly\n{\n'improved_job_roles':[\n'improvements:[]\n], 'projects': [\n'improvements':[]\n], 'introduction':  \n} \nOutput only json file without any other text \n limit each job description to 50 words "

export async function send_to_gpt(prompt: string): Promise<any> {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt + "\n" + suffix }],
    });

    return JSON.parse(completion.data.choices[0].message?.content.toString()!);
}

