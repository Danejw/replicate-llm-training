import Replicate from 'replicate'
import dotenv from 'dotenv'
dotenv.config()

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  userAgent: 'https://www.npmjs.com/package/create-replicate'
})
const model = 'meta/meta-llama-3-8b:9a9e68fc8695f5847ce944a5cecf9967fd7c64d0fb8c8af1d5bdcc71f03c5e47'
const input = {
  top_p: 0.9,
  prompt: 'Story title: 3 llamas go for a walk\nSummary: The 3 llamas crossed a bridge and something unexpected happened\n\nOnce upon a time',
  max_tokens: 512,
  min_tokens: 0,
  temperature: 0.6,
  prompt_template: '{prompt}',
  presence_penalty: 1.15,
  frequency_penalty: 0.2,
}

console.log('Using model: %s', model)
console.log('With input: %O', input)

console.log('Running...')
const output = await replicate.run(model, { input })
console.log('Done!', output)
