<?php
$operadoras[] = array('nome' => 'Oi', 'codigo' => 14, 'categoria' => 'Celular', 'preco' => 2, 'cor' => 'yellow');
$operadoras[] = array('nome' => 'Vivo', 'codigo' => 15, 'categoria' => 'Celular', 'preco' => 1, 'cor' => 'green');
$operadoras[] = array('nome' => 'Tim', 'codigo' => 41, 'categoria' => 'Celular', 'preco' => 3, 'cor' => 'blue');
$operadoras[] = array('nome' => 'GVT', 'codigo' => 25, 'categoria' => 'Fixo', 'preco' => 1, 'cor' => 'red');
$operadoras[] = array('nome' => 'Embratel', 'codigo' => 21, 'categoria' => 'Fixo', 'preco' => 2, 'cor' => 'purple');
echo json_encode($operadoras);