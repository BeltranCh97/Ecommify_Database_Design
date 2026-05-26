db.createCollection("catalog_attributes", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema para la definición de atributos dinámicos",
         properties: {
            _id: { bsonType: "string" },
            attribute_group: { bsonType: "string" },
            schema: { bsonType: "object" },
            updated_at: { bsonType: "date" }
         }
      }
   }
});