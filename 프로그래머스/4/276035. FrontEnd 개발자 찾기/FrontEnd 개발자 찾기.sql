WITH FE AS (SELECT * FROM SKILLCODES WHERE CATEGORY = 'Front End')

SELECT DISTINCT(D.ID), D.EMAIL, D.FIRST_NAME, D.LAST_NAME FROM DEVELOPERS AS D
JOIN FE AS F ON F.CODE = F.CODE & D.SKILL_CODE
ORDER BY D.ID