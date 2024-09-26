SELECT COUNT(FI.FISH_TYPE) AS FISH_COUNT, MAX(FI.LENGTH) AS MAX_LENGTH, FI.FISH_TYPE
FROM FISH_INFO AS FI
GROUP BY FI.FISH_TYPE
HAVING AVG(CASE WHEN FI.LENGTH <= 10 OR FI.LENGTH IS NULL THEN 10 ELSE FI.LENGTH END) >= 33 
ORDER BY FI.FISH_TYPE;