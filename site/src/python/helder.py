# -*- coding: utf-8 -*-
# !Atenção! Se você não for o "Helder" não altere esse arquivo 

import psutil
from psutil import virtual_memory
import os
from time import sleep
import datetime
import pymssql
import pymysql

conexaoAzure = pymssql.connect(
    server = "guardian-angel.database.windows.net"
    , user = "admGuardianAngel"
    , password = "guardian#angel#grupo7"
    , database = "GuardianAngel")

# conexaoDocker = pymysql.connect(
#     host='172.17.0.1'
#     , user='root'
#     , passwd='urubu100'
#     , db='GuardianAngel'
#     , port=3306)

cursorAzure = conexaoAzure.cursor()
# cursorDocker = conexaoDocker.cursor()

# Aqui limpa a tela do terminal para ficar mais organizado
def limpa_tela():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')

while True:
    limpa_tela()
    dia = datetime.datetime.now().strftime('%Y-%m-%d')
    hora = datetime.datetime.now().strftime('%H:%M:%S')

    ramU = "{:.2f}".format((virtual_memory().used)/1024/1024/1024)

    # Aqui printamos na tela o valor da memória utilizada no momento usando a função convert_gb junto com o print
    print("Memória RAM sendo utilizada:")
    print(f'{ramU}GB')#usando no momento

    sql = "INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) VALUES (%s, %s, %s, %s, %s)"
    data = (1, 1, ramU, hora, dia)
    cursorAzure.execute(sql, data)
    # cursorDocker.execute(sql, data)

    uso_cpu = psutil.cpu_percent(interval=1.5)

    # Aqui printamos o uso da CPU, usando interval = 0, para que faça a leitura em tempo real
    print("=-="*20)
    print("Uso da CPU: ")
    print(uso_cpu,'%')

    sql = "INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) VALUES (%s, %s, %s, %s, %s)"
    data = (1, 2, uso_cpu, hora, dia)
    cursorAzure.execute(sql, data)
    # cursorDocker.execute(sql, data)

    # Aqui printamos o uso do disco, caso seja no windows, representado por 'C:'
    if os.system == 'nt':
        free_disk=(psutil.disk_usage('C:\\').free)/1024/1024/1024
        percentage_disk=(psutil.disk_usage('C:\\').percent)
        print("=-="*20)
        print("Espaço livre no disco: ")
        print('{:.2f}'.format(free_disk),"GB")

        print("Porcentagem de espaço sendo usado no disco: ")
        print('{:.2f}'.format(percentage_disk),"%")
        print("=-="*20)

        sql = "INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) VALUES (%s, %s, %s, %s, %s)"
        data = (1, 3, percentage_disk, hora, dia)
        cursorAzure.execute(sql, data)
        # cursorDocker.execute(sql, data)

    # Aqui printamos o uso do disco, caso seja no linux, reprentado pelo '/'
    else:
        free_disk=(psutil.disk_usage('/').free)/1024/1024/1024
        percentage_disk=(psutil.disk_usage('/').percent)
        print("=-="*20)
        print("Espaço livre no disco: ")
        print('{:.2f}'.format(free_disk),"GB")

        print("Porcentagem de espaço sendo usado no disco: ")
        print('{:.2f}'.format(percentage_disk),"%")
        print("=-="*20)

        sql = "INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) VALUES (%s, %s, %s, %s, %s)"
        data = (1, 3, percentage_disk, hora, dia)
        cursorAzure.execute(sql, data)
        # cursorDocker.execute(sql, data)
    

    # Pegando a porcentagem de bateria
    bateria = psutil.sensors_battery().percent
    print("Porcentagem de bateria: ")
    print('{:.2f}'.format(bateria),"%")

    sql = "INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) VALUES (%s, %s, %s, %s, %s)"
    data = (1, 4, bateria, hora, dia)
    cursorAzure.execute(sql, data)
    # cursorDocker.execute(sql, data)

    try:
        conexaoAzure.commit()
    except:
        conexaoAzure.roolback()

    # try:
    #     conexaoDocker.commit()
    # except:
    #     conexaoDocker.roolback()

    # 3 segundos
    sleep(3)