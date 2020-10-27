<?php
	 session_start();

    if (isset($_SESSION['tableRows'])) {
        $_SESSION['tableRows'] = array();
    }

    echo "
      <tr>
        <td>Координата Х</td>
        <td>Координата Y</td>
        <td>Радиус R</td>
        <td>Попадание</td>
        <td>Текущее время</td>
        <td>Время исполнения</td>
    </tr>";