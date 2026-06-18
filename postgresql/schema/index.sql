CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_payments_order_id ON payments(order_id);
CREATE INDEX idx_reviews_order_id ON reviews(order_id);
CREATE INDEX idx_orders_status ON orders(order_status);
CREATE INDEX idx_orders_delivery_dates ON orders(order_status, delivered_customer_timestamp, estimated_delivery_date);
CREATE INDEX idx_products_category ON products(product_category_name);
CREATE INDEX idx_payments_type ON payments(payment_type);
Se agrega extension
CREATE EXTENSION IF NOT EXISTS pgcrypto;