
SELECT AI.ANIMAL_TYPE, 
CASE WHEN AI.NAME IS NULL THEN 'No name' ELSE AI.NAME END AS NAME, 
AI.SEX_UPON_INTAKE FROM ANIMAL_INS AS AI