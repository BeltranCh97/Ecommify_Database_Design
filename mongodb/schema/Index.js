use("ecommify");
// === ÍNDICES INICIALES ===
db.marketing_events.createIndex({ "customer_id": 1 }, { name: "idx_events_customer" });
db.product_reviews_docs.createIndex({ "product_id": 1 }, { name: "idx_reviews_product_base" });
db.product_content.createIndex({ "product_id": 1 }, { name: "idx_content_product_base" });

// === ÍNDICES AVANZADOS ===

// 1. Compuesto bajo regla ESR para el Módulo Analítico
db.catalog_products.createIndex(
    { "category": 1, "created_at": -1, "attributes.base_price": 1 },
    { name: "idx_catalog_category_esr" }
);

// 2. Parcial para auditoría eficiente de reseñas negativas
db.product_reviews_docs.createIndex(
    { "product_id": 1, "score": 1 },
    {
        name: "idx_partial_critical_reviews",
        partialFilterExpression: { "score": { $lte: 2 } }
    }
);

// 3. De Texto para el motor de búsqueda full-text
db.product_content.createIndex(
    { "title": "text", "description": "text" },
    {
        name: "idx_text_search_products",
        weights: { "title": 10, "description": 2 }
    }
);