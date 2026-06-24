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