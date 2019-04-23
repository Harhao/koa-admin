const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const goodsSchema = new Schema({
  _id: {
    type: ObjectId
  },
  name: {
    unique: true,
    type: String
  },
  status: {
    type: Boolean,
    default: false
  },
  descripe: {
    type: String
  },
  imgUrls: {
    type: Array,
    default: []
  },
  price: {
    type: Number,
    default: 0
  },
  colors: {
    type: Array,
    default: []
  },
  size: {
    type: Array,
    default: []
  },
  onSaleTime: {
    type: Date,
    default: Date.now()
  },
  onOffTime: {
    type: Date,
    type: Date.now()
  }
});
module.exports = mongoose.model("goods", goodsSchema);
