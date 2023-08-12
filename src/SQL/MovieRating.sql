WITH SCREEN_JUNKIE AS (
    SELECT TOP 1 Users.name
    FROM MovieRating
    JOIN Users ON MovieRating.user_id = Users.user_id
    GROUP BY Users.name
    ORDER BY COUNT(MovieRating.user_id) DESC, Users.name ASC
),
FEBRUARY_MASTERPIECE AS (
    SELECT TOP 1 Movies.title
    FROM MovieRating
    JOIN Movies ON Movies.movie_id = MovieRating.movie_id
    WHERE 
        YEAR(MovieRating.created_at) = 2020 AND
        MONTH(MovieRating.created_at) = 2
    GROUP BY Movies.title
    ORDER BY AVG(CAST(MovieRating.rating AS DECIMAL)) DESC, Movies.title ASC
)

SELECT name as results FROM SCREEN_JUNKIE
UNION ALL
SELECT title FROM FEBRUARY_MASTERPIECE