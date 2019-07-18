<?php

$arrayHoraInicial       = explode(':', $_GET['horaInicial']);
$arrayTempoIntervalo    = explode(':', $_GET['tempoIntervalo']);
$arrayTotalHoras        = explode(':', $_GET['totalHoras']);

$minutosHoraInicial     = ($arrayHoraInicial[0] * 60 + $arrayHoraInicial[1]);
$minutosIntervalo       = ($arrayTempoIntervalo[0] * 60 + $arrayTempoIntervalo[1]);
$minutosTotal           = ($arrayTotalHoras[0] * 60 + $arrayTotalHoras[1]);

$minutosSaida           = $minutosHoraInicial + $minutosIntervalo + $minutosTotal;
$horasSaida             = ($minutosSaida)/60;

$arrayHoraSaida         = explode('.', $horasSaida);

$horaSaidaFinal         = $arrayHoraSaida[0];
$minutoSaidaFinal       = ($arrayHoraSaida[1]/10)*60;

echo $horaSaidaFinal . ':' . $minutoSaidaFinal;