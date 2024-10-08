
SELECT CRCRH.CAR_ID, ROUND(AVG(DATEDIFF(END_DATE,START_DATE)+1),1) AS AVERAGE_DURATION FROM CAR_RENTAL_COMPANY_RENTAL_HISTORY AS CRCRH 
GROUP BY CRCRH.CAR_ID
HAVING AVG(DATEDIFF(END_DATE,START_DATE)) >= 6
ORDER BY AVERAGE_DURATION DESC, CRCRH.CAR_ID DESC

