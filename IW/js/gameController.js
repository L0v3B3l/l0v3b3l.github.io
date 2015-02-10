// Controller

function GameController ($scope) {
	
	$scope.games=[
		{nombre:"Zombies", codigo:"Hello", fase:"alpha"},
		{nombre:"Survive", codigo:"Salve", fase:"alpha"},
		{nombre:"Mini", codigo:"metodo", fase:"alpha"},
		{nombre:"Game2D", codigo:"sobre", fase:"alpha"}
	];

	$scope.Save = function () {

	$scope.games.push({nombre:$scope.nuevoGame.nombre, 
						codigo:$scope.nuevoGame.codigo, 
							fase:$scope.nuevoGame.fase});
	$scope.formVisibility = false;
	console.log($scope.formVisibility)
	}

	$scope.formVisibility = false;

	$scope.ShowForm = function () {

		$scope.formVisibility = true;
		console.log($scope.formVisibility)
	}
}

