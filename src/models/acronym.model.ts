import { Schema, model } from 'mongoose';

import { IAcronym } from '../config/interfaces';

const acronymSchema = new Schema<IAcronym>(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Acronym = model<IAcronym>('Acronym', acronymSchema);

export default Acronym;
