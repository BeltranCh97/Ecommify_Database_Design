-- Calcula la calificación promedio de las reseñas por categoría de producto
SELECT 
    PR.PRODUCT_CATEGORY_NAME AS categoria,
    ROUND(AVG(R.REVIEW_SCORE), 2) AS calificacion_promedio,
    COUNT(R.REVIEW_ID) AS total_resenas
FROM REVIEWS R
JOIN ORDERS O ON R.ORDER_ID = O.ORDER_ID
JOIN ORDER_ITEMS OI ON O.ORDER_ID = OI.ORDER_ID
JOIN PRODUCTS PR ON OI.PRODUCT_ID = PR.PRODUCT_ID
GROUP BY PR.PRODUCT_CATEGORY_NAME
HAVING COUNT(R.REVIEW_ID) > 50 -- Excluye categorías con muy pocas ventas/reseñas
ORDER BY calificacion_promedio ASC; -- Ordena de peor a mejor para detectar problemas