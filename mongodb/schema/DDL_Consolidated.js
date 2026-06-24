use("ecommify");

// ==========================================
// 1. Colección: catalog_attributes
// ==========================================
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

// ==========================================
// 2. Colección: catalog_products
// ==========================================
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

// ==========================================
// 3. Colección: marketing_events
// ==========================================
db.createCollection("marketing_events", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema para eventos de marketing",
         required: ["event_id", "customer_id", "event_type", "event_timestamp"],
         properties: {
            _id: { bsonType: "string" },
            event_id: { bsonType: "string" },
            customer_id: { bsonType: "string" },
            event_type: { bsonType: "string" },
            source: { bsonType: "string" },
            metadata: { bsonType: "object" },
            event_timestamp: { bsonType: "date" }
         }
      }
   }
});

// ==========================================
// 4. Colección: product_content
// ==========================================
db.createCollection("product_content", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         description: "Esquema para el contenido multimedia y descriptivo de productos",
         required: ["content_id", "product_id", "title"],
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
            seo: {
               bsonType: "object",
               properties: {
                  slug: { bsonType: "string" },
                  keywords: { bsonType: "array", items: { bsonType: "string" } }
               }
            }
         }
      }
   }
});

// ==========================================
// 5. Colección: product_reviews_docs
// ==========================================
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

// ==========================================
// Creación de Índices
// ==========================================
db.marketing_events.createIndex({ "customer_id": 1 });
db.product_reviews_docs.createIndex({ "product_id": 1 });
db.product_content.createIndex({ "product_id": 1 });
