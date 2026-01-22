# Write your MySQL query statement below
SELECT c.name as Customers FROM Customers c WHERE c.id NOT IN (SELECT DISTINCT(o.customerID) FROM Orders o)