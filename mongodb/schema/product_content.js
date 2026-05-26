db.createCollection("product_content", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema para el contenido multimedia y descriptivo de productos",
         properties: {
            _id: { bsonType: "string" },
            content_id: { bsonType: "string" },
            product_id: { bsonType: "string" },
            title: { bsonType: "string" },
            description: { bsonType: "string" },
            images: { 
                bsonType: "array", 
                items: { bsonType: "string" } 
            },
            seo: { bsonType: "object" }
         }
      }
   }
});