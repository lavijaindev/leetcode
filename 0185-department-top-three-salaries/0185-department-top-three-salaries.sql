# Write your MySQL query statement below
SELECT d.name AS Department,
t.name AS Employee,
t.salary AS Salary
FROM
(SELECT *, DENSE_RANK() OVER (PARTITION BY departmentID ORDER BY salary DESC) AS rnk FROM Employee) t
INNER JOIN Department d ON t.departmentID = d.id
WHERE t.rnk IN (1,2,3)