db.createCollection("catalog_attributes", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema para la definición de atributos globales y especificaciones",
         required: ["attribute_id", "name", "type", "category"],
         properties: {
            _id: { bsonType: "string" },
            attribute_id: {
               bsonType: "string", description: "Identificador único del atributo"
            },
            name: {
               bsonType: "string", description: "Nombre visible del atributo (ej. Talla, Voltaje, Color)"
            },
            type: {
               bsonType: "string", enum: ["text", "number", "boolean", "array"],
               description: "Tipo de dato esperado para validación en la capa de aplicación"
            },
            category: {
               bsonType: "string", description: "Categoría de producto a la que se asocia la especificación"
            },
            is_filterable: {
               bsonType: "boolean", description: "Indica si el atributo es usado para filtros facetados en el frontend"
            }
         }
      }
   }
});