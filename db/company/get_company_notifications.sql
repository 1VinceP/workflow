SELECT * FROM notifications
WHERE notification_company = $1
ORDER BY notification_date DESC
LIMIT 2;