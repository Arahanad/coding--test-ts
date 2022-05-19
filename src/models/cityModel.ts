import { model, Schema, Model, Document } from 'mongoose';

interface ICity extends Document {
    id: number
    name: string
    ascii: string
    alt_name: string
    lat: number
    long: number
    feat_class: string
    feat_code: string
    country: string
    cc2: string
    admin1: number
    admin2: number
    admin3: string
    admin4: string
    population: number
    elevation: string
    dem: number
    tz: string
    modified_at: string
}

const citySchema: Schema = new Schema({
    "id": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "ascii": {
      "type": "String"
    },
    "alt_name": {
      "type": "String"
    },
    "lat": {
      "type": "Number"
    },
    "long": {
      "type": "Number"
    },
    "feat_class": {
      "type": "String"
    },
    "feat_code": {
      "type": "String"
    },
    "country": {
      "type": "String"
    },
    "cc2": {
      "type": "String"
    },
    "admin1": {
      "type": "Number"
    },
    "admin2": {
      "type": "Number"
    },
    "admin3": {
      "type": "String"
    },
    "admin4": {
      "type": "String"
    },
    "population": {
      "type": "Number"
    },
    "elevation": {
      "type": "String"
    },
    "dem": {
      "type": "Number"
    },
    "tz": {
      "type": "String"
    },
    "modified_at": {
      "type": "Date"
    }
  });

export const City: Model<ICity> = model('City', citySchema); // exporting City model