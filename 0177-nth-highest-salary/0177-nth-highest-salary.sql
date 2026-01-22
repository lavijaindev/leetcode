CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
    SELECT max(salary) as nthHighestSalary FROM 
    (SELECT salary, DENSE_RANK() over (ORDER BY salary DESC) as rnk FROM Employee) t WHERE t.rnk = N
  );
END