BEGIN;
INSERT INTO maps (map_name, map_string, width, user_id)
VALUES (
		'test A',
		'ttbbbbbbttbbbbbbbbwbwwwwwwwwwwbbbbbbbbbbbbbbttbbttttttttttttttttttttttttttttttttt',
		9,
		1
	),
	(
		'test B',
		'ttttttttttbbbtttttbbbbbtttbwwwwbbtttwbbwwbbbttbbbwwbbbtttbbwwwbbtttbbbwwbttttbbbb',
		9,
		2
	),
	(
		'test C',
		'ttttttttttttttttttttttttttttbttttttttbbbtbbbbtbbwwbbbbbbbbwbwwwwwbbbwbbwwbwwwwwbbbbbbbbbbb',
		10,
		1
	),
	(
		'test D',
		'tttttttttttttttttttttbtttwbbtbwwbbt',
		5,
		2
	),
	(
		'test E',
		'ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttbttttttttttttttttttttttttbbbtttttttttttttttttttttbbbwwbttttttttttttttbbttbbbbwwbbtttttttttttttbbbbbbbwwwbbtttttbbtbbbbbbbwwbbwwwbbbttbbbbbbbbbbbbbbwwwwwbbbbttbbbbbwwbwwwwwwwwbbbbbbtttbwwwwbwwwwbbbbbbbbbbbttttttbbbwwwbbbbbbbbbbtttttttttttbbbbbbbbttttttttttttttttttttbbbtttttttttttttttttttt',
		26,
		1
	)
;
COMMIT;