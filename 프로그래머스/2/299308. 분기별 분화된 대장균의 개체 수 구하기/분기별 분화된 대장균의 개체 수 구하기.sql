SELECT 
CASE WHEN QUARTER(ED.DIFFERENTIATION_DATE) = 1 THEN '1Q'
WHEN QUARTER(ED.DIFFERENTIATION_DATE) = 2 THEN '2Q'
WHEN QUARTER(ED.DIFFERENTIATION_DATE) = 3 THEN '3Q'
ELSE '4Q' END AS  QUARTER,
COUNT(ED.ID) AS ECOLI_COUNT
FROM ECOLI_DATA AS ED
GROUP BY QUARTER
ORDER BY QUARTER