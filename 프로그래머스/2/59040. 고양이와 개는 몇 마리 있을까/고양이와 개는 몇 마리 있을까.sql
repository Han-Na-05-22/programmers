
SELECT AI.ANIMAL_TYPE, COUNT(AI.ANIMAL_TYPE) AS count FROM ANIMAL_INS AS AI
GROUP BY AI.ANIMAL_TYPE ORDER BY AI.ANIMAL_TYPE