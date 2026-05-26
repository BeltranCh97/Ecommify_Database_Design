db.createCollection("product_reviews_docs", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema para las reseñas de los productos",
         properties: {
            _id: { bsonType: "string" },
            review_id: { bsonType: "string" },
            product_id: { bsonType: "string" },
            order_id: { bsonType: "string" },
            score: { bsonType: "int" },
            comment: { bsonType: "string" },
            review_date: { bsonType: "date" }
         }
      }
   }
});