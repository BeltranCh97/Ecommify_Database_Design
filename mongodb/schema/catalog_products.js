db.createCollection("catalog_products", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema principal para el catálogo de productos",
         required: ["product_id", "name", "category", "created_at"],
         properties: {
            _id: { bsonType: "string" },
            product_id: {
               bsonType: "string", description: "Identificador único correlacionado con PostgreSQL"
            },
            name: { bsonType: "string" },
            category: { bsonType: "string" },
            attributes: {
               bsonType: "object", description: "Par de clave-valor para especificaciones variables"
            },
            tags: {
               bsonType: "array",
               items: { bsonType: "string" }
            },
            rating: {
               bsonType: "object",
               properties: {
                  average: { bsonType: "double" },
                  count: { bsonType: "int" }
               }
            },
            created_at: { bsonType: "date" }
         }
      }
   }
});