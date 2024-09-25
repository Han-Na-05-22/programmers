
SELECT UGB.BOARD_ID, UGB.WRITER_ID, UGB.TITLE, UGB.PRICE,
(CASE WHEN UGB.STATUS = 'DONE' THEN '거래완료'
WHEN UGB.STATUS = 'RESERVED' THEN '예약중' 
ELSE '판매중' END) AS STATUS 
FROM USED_GOODS_BOARD AS UGB
WHERE UGB.CREATED_DATE = '2022-10-05'
ORDER BY UGB.BOARD_ID DESC