SELECT AI.NAME, AI.DATETIME FROM ANIMAL_INS AS AI
LEFT JOIN ANIMAL_OUTS AS AO ON AO.ANIMAL_ID = AI.ANIMAL_ID
WHERE AI.NAME IS NOT NULL AND AO.ANIMAL_ID IS NULL
ORDER BY AI.DATETIME LIMIT 3

