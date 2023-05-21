import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

const app: Application = express();
app.use(cors());
app.use(express.json());

const PORT: number = 8000;
const API_KEY: string = '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';

const configuration = new Configuration({
  apiKey: API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post('/completions', async (req: Request, res: Response) => {
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [
        {
          role: 'user',
          content: 'create a SQL request to ' + req.body.message,
        },
      ],
    });
    res.send(completion.data.choices[0].message);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => {
  console.log(`Your server is running on PORT ${PORT}`);
});
