SELECT AI.ANIMAL_ID, AI.ANIMAL_TYPE, AI.NAME FROM ANIMAL_INS AS AI
JOIN ANIMAL_OUTS AS AO ON AO.ANIMAL_ID = AI.ANIMAL_ID
WHERE AI.SEX_UPON_INTAKE LIKE '%Intact%' AND 
(AO.SEX_UPON_OUTCOME LIKE '%Neutered%' OR AO.SEX_UPON_OUTCOME LIKE '%Spayed%')
ORDER BY AI.ANIMAL_ID