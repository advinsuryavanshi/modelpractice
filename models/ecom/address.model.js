import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    pincode: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Address = mongoose.model('Address', addressSchema);
