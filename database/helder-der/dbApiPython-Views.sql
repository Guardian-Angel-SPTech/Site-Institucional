CREATE VIEW `vw_dadoMaquina` AS
    SELECT rootName, macAddress, cpuPerc, cpuTemp, core, discoPerc, ramPerc, momento
        FROM Usuario AS u
            JOIN Data AS d
                ON d.idData = u.fkData
            JOIN Maquina AS m
                ON d.idData = m.fkData
            JOIN Cpu
                ON idCpu = fkCpu
            JOIN Ram
                ON idRam = fkRam
            JOIN Disco
                ON idDisco = fkDisco;

CREATE VIEW `vw_usuarioOnline` AS
    SELECT rootName, kernel, macAddress, momento
        FROM Usuario AS u
            JOIN SistemaOperacional
                ON idSO = fkSO
            JOIN Data AS d
                ON d.idData = u.fkData
            JOIN Maquina AS m
                ON d.idData = m.fkData