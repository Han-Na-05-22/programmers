SELECT DATE_FORMAT(OS.SALES_DATE, '%Y') AS YEAR, 
DATE_FORMAT(OS.SALES_DATE, '%m') AS MONTH,
COUNT(DISTINCT(OS.USER_ID)) AS PURCHASED_USERS,
ROUND(COUNT(DISTINCT(OS.USER_ID)) / (SELECT COUNT(USER_ID) FROM USER_INFO WHERE JOINED LIKE '%2021%'), 1) AS PUCHASED_PATIO
FROM ONLINE_SALE AS OS
JOIN USER_INFO AS UI ON UI.USER_ID = OS.USER_ID
WHERE UI.JOINED LIKE '%2021%'
GROUP BY DATE_FORMAT(OS.SALES_DATE, '%Y'), DATE_FORMAT(OS.SALES_DATE, '%m')
ORDER BY DATE_FORMAT(OS.SALES_DATE, '%Y'), DATE_FORMAT(OS.SALES_DATE, '%m')