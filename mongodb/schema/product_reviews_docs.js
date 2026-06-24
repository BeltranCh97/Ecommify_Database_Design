db.createCollection("product_reviews_docs", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema para las reseñas de los productos",
         required: ["review_id", "product_id", "order_id", "score", "review_date"],
         properties: {
            _id: { bsonType: "string" },
            review_id: { bsonType: "string" },
            product_id: { bsonType: "string" },
            order_id: { bsonType: "string" },
            score: {
               bsonType: "int", description: "Calificación entera acotada de 1 a 5"
            },
            comment: { bsonType: "string" },
            review_date: { bsonType: "date" }
         }
      }
   }
});