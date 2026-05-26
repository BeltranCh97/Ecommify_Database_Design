db.createCollection("catalog_products", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema principal para el catálogo de productos",
         properties: {
            _id: { bsonType: "string" },
            product_id: { bsonType: "string" },
            name: { bsonType: "string" },
            category: { bsonType: "string" },
            attributes: { bsonType: "object" },
            tags: { 
                bsonType: "array", 
                items: { bsonType: "string" } 
            },
            rating: { bsonType: "object" },
            created_at: { bsonType: "date" }
         }
      }
   }
});