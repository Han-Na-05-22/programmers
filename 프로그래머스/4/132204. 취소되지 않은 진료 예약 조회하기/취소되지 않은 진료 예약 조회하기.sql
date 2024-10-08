SELECT A.APNT_NO, P.PT_NAME, A.PT_NO, A.MCDP_CD, D.DR_NAME, A.APNT_YMD 
FROM APPOINTMENT AS A
JOIN PATIENT AS P ON P.PT_NO = A.PT_NO
JOIN DOCTOR AS D ON D.DR_ID = A.MDDR_ID
WHERE A.APNT_CNCL_YN != 'Y' 
AND DATE_FORMAT(A.APNT_YMD, '%Y-%m-%d') = '2022-04-13'
ORDER BY A.APNT_YMD