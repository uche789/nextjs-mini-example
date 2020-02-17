import { NextApiRequest, NextApiResponse } from 'next';
import data from '../../services/data';

export type Data = {
  id: number,
  name: string,
}

export default async (req: NextApiRequest, res: NextApiResponse<Data[]>) => {
  try {
    const types = await data.fetchTypes() as Data[];
    res.status(200).json(types)
  } catch(err) {
    res.status(500).end();
  }
}