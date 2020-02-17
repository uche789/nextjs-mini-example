import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../services/data';

export type Data = {
  id: number,
  image: string,
  type: number
}

export default async (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  try {
    const cats = await data.fetch() as Data[];
    res.status(200).json(cats)
  } catch(err) {
    res.status(500).end();
  }
}