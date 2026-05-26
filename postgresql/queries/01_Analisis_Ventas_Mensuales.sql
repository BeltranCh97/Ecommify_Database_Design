-- Calcula el revenue mensual basado en pedidos completados (entregados)
SELECT 
    DATE_TRUNC('month', O.PURCHASE_TIMESTAMP) AS mes_venta,
    COUNT(DISTINCT O.ORDER_ID) AS total_pedidos,
    SUM(P.PAYMENT_VALUE) AS ingresos_totales
FROM ORDERS O
JOIN PAYMENTS P ON O.ORDER_ID = P.ORDER_ID
WHERE O.ORDER_STATUS = 'delivered'
GROUP BY 1
ORDER BY 1 DESC;