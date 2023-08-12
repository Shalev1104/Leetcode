SELECT TOP 1
  Queue.person_name
  FROM Queue
INNER JOIN (
  SELECT
    person_id,
    SUM(weight) OVER(ORDER BY turn) AS accumulated_weight
  FROM Queue
) TurnSum ON 
TurnSum.person_id = Queue.person_id AND 
TurnSum.accumulated_weight <= 1000
ORDER BY turn DESC