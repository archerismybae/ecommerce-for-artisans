const mongoose = require("mongoose");
const Product = require("../models/productModel");
const Order = require("../models/orderModel");
const ContentBasedRecommender = require('content-based-recommender')
const recommender = new ContentBasedRecommender({
  minScore: 0.01,
  maxSimilarDocuments: 100
});

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
      findProds();
    });
};

let documents = [];
let idsArr = [];

const json_constructor = async(id, desc) => {
  const json = {
    id: id.toString(),
    content: desc
  };
  return json;
}

const findProds = async() => {
      let r = [];
      const products = await Product.find({});
      const orders = await Order.find({});
      if (products!==null) {
        for (let i=0; i<products.length;i++) {
          documents.push(await json_constructor(products[i]._id, products[i].description));
        }
        //console.log(documents);
      }
        /*for (let i=0; i<orders.length;i++) {
          r.push(orders[i]._id).toString();
        }*/
        console.log((orders[0]._id).toString());
        //r.push(orders[0]._id).toString();
      recommender.train(documents);      
     //r.push('62c5fdffc48e54117ced3e0c');
      //const strID = '62c5fdffc48e54117ced3e0c';
      //const s = recommender.getSimilarDocuments(strID, 0, 2);
      //console.log(s);      
      //console.log(orders);
      for (let i=0;i<r.length;i++) {
        //const string_id = (orders[i]._id).toString();           
        const s = recommender.getSimilarDocuments(r[i], 0, 2);
        console.log(s);
      }
      /*for (let j=0;j<idsArr.length;j++) {
        console.log(idsArr[j])
        const s = recommender.getSimilarDocuments(idsArr[j], 0, 2);
        console.log(s);
      }*/

}


module.exports = connectDatabase;
