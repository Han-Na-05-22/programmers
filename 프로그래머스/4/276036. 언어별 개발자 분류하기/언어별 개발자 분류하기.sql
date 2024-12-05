WITH FE AS (SELECT 
            SUM(CASE WHEN CATEGORY = 'Front End' THEN CODE ELSE 0 END) AS FRONT_CODE,
            MAX(CASE WHEN NAME = 'Python' THEN CODE ELSE 0 END) AS PYTHON_CODE,
            MAX(CASE WHEN NAME = 'C#' THEN CODE ELSE 0 END) AS CSHARP_CODE
            FROM SKILLCODES)

SELECT 
CASE WHEN (D.SKILL_CODE & FE.FRONT_CODE) > 0 AND (D.SKILL_CODE & FE.PYTHON_CODE) > 0 THEN 'A'
WHEN (D.SKILL_CODE & FE.CSHARP_CODE) > 0 THEN 'B'
WHEN (D.SKILL_CODE & FE.FRONT_CODE) > 0 THEN 'C'
ELSE NULL END AS GRADE,
D.ID, D.EMAIL FROM DEVELOPERS AS D
CROSS JOIN FE
HAVING GRADE IS NOT NULL
ORDER BY GRADE, D.ID
