
SELECT FH.FLAVOR FROM FIRST_HALF AS FH
LEFT JOIN JULY AS J ON FH.FLAVOR = J.FLAVOR 
GROUP BY FH.FLAVOR ORDER BY (COALESCE(SUM(J.TOTAL_ORDER), 0) + FH.TOTAL_ORDER) DESC LIMIT 3;

