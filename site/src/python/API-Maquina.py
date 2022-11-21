# Importando e instalando as bibliotecas que serão utilizadas

# Para instalar as bibliotecas, basta digitar no terminal:
# pip install "nome da biblioteca"
# em nosso caso: 
# pip install psutil
# pip install pymysql

# Importando as bibliotecas
# Basta digitar import "nome da biblioteca"
# em nosso caso:
# import psutil
# import pymysql

from cgi import print_form
import psutil
from psutil import virtual_memory
import os
from time import sleep
import pymysql
import datetime
import pymssql


# Aqui limpa a tela do terminal para ficar mais organizado
def limpa_tela():
    if os.name == 'nt':
        os.system('cls')
    else:
        os.system('clear')
server = "guardian-angel.database.windows.net"
database = "guardianAngel"
username = "admGuardianAngel"
password = "guardian#angel#grupo7"

# Construct connection string

conexaoA = pymssql.connect(server = server, user = username, password = password, database = database)
conexaoW = pymysql.connect(db='GuardianAngel', user='aluno', passwd='sptech')
# Aqui é a função que faz com que o programa fique rodando em loop infinito
while True:
    limpa_tela()
    print('Monitoramento de Máquina Guardian Angel')

    # Aqui é onde realizamos a conexão com o banco de dados que desejamos
    # Para isso, basta digitar:
    # pymysql.connect("endereço do banco de dados", "usuário", "senha")
    # nós jogamos este comando dentro de uma variável para que possamos utilizar ela posteriormente mais facilmente
    
    cursor = conexaoA.cursor()
    cursorW = conexaoW.cursor()


    # Definindo a memória para GB
    def convert_gb(value):
        return f'{value /1024/1024/1024: .2f}GB' 

    ram = (virtual_memory().total)/1024/1024/1024
    ramU = (virtual_memory().used)/1024/1024/1024

    dia = datetime.date.__format__(datetime.date.today(), '%Y/%m/%d')
    hora = datetime.datetime.now().strftime('%H:%M:%S')

    cursor.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) values (1, 1, %s, %s, %s)", (ramU, hora, dia))

    cursorW.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) values (1, 1, %s, %s, %s)", (ramU, hora, dia))

    # Aqui printamos na tela o valor da memória utilizada no momento usando a função convert_gb junto com o print
    print("Memória RAM sendo utilizada:")
    print('{:.2f}'.format(ramU),'GB') #usando no momento
        

    # Aqui printamos o uso da CPU, usando interval = 0, para que faça a leitura em tempo real
    print("=-="*20)
    print("Uso da CPU: ")
    uso_cpu = psutil.cpu_percent(interval=1.5)
    print(uso_cpu,'%')

    cursor.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) values (1, 2, %s, %s, %s)", (uso_cpu, hora, dia))

    cursorW.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) values (1, 2, %s, %s, %s)", (uso_cpu, hora, dia))


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

        cursor.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro) values (1, 3, %s, %s, %s)", ('{:.2f}'.format(percentage_disk), hora, dia))

        cursorW.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro) values (1, 3, %s, %s, %s)", ('{:.2f}'.format(percentage_disk), hora, dia))

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

        cursor.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) values (1, 3, %s, %s, %s)", ('{:.2f}'.format(percentage_disk), hora, dia))

        cursorW.execute("INSERT INTO registro (fkMaquina, componente, registroComponente, horaRegistro, dataRegistro) values (1, 3, %s, %s, %s)", ('{:.2f}'.format(percentage_disk), hora, dia))

    sleep(3)

    # Aqui é onde realizamos o commit das informações no banco de dados, que seria fechar o pacote para envio
    conexaoA.commit()
    conexaoW.commit()

conexaoA.close() 