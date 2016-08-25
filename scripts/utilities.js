function forEach(revealPoint) {
	for (var i = 0; i < pointsArray.length; i++) {
		revealPoint(i);
	}
}