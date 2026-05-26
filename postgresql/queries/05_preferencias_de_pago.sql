-- Analiza la distribución de métodos de pago y el uso de cuotas
SELECT 
    PAYMENT_TYPE AS metodo_pago,
    COUNT(PAYMENT_ID) AS cantidad_transacciones,
    SUM(PAYMENT_VALUE) AS monto_total_procesado,
    ROUND(AVG(PAYMENT_INSTALLMENTS), 1) AS promedio_cuotas
FROM PAYMENTS
GROUP BY PAYMENT_TYPE
ORDER BY cantidad_transacciones DESC;