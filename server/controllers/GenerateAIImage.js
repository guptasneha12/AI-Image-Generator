import * as dotenv from 'dotenv';
import axios from 'axios';
import { createError } from '../error.js';

dotenv.config();

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      'https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4',
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        },
        responseType: 'arraybuffer',
      }
    );

    const imageBuffer = Buffer.from(response.data, 'binary').toString('base64');
    
    res.status(200).json({ photo: imageBuffer });
  } catch (error) {
    console.error('Error generating image:', error);
    next(createError(error.response?.status || 500, error.response?.data?.error || error.message));
  }
};
