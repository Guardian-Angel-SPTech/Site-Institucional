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

# Aqui limpa a tela do terminal para ficar mais organizado
os.system('cls')

# Aqui é a função que faz com que o programa fique rodando em loop infinito
while True:
    os.system('cls')
    print('Monitoramento de Máquina Guardian Angel')

    # Aqui é onde realizamos a conexão com o banco de dados que desejamos
    # Para isso, basta digitar:
    # pymysql.connect("endereço do banco de dados", "usuário", "senha")
    # nós jogamos este comando dentro de uma variável para que possamos utilizar ela posteriormente mais facilmente

    #conexao = pymysql.connect(db='GuardianAngel', user='root', passwd='sptech')
    #cursor = conexao.cursor()



    # Definindo a memória para GB
    def convert_gb(value):
        return f'{value /1024/1024/1024: .2f}GB' 

    ram = (virtual_memory().total)/1024/1024/1024
    ramU = (virtual_memory().used)/1024/1024/1024

    #cursor.execute("INSERT INTO registro values (null, 1, 1, %s, now())", (ramU))


    # Aqui printamos na tela o valor da memória utilizada no momento usando a função convert_gb junto com o print
    print("Memória RAM sendo utilizada:")
    print('{:.2f}'.format(ramU),'GB') #usando no momento
        

    # Aqui printamos o uso da CPU, usando interval = 0, para que faça a leitura em tempo real
    print("=-="*20)
    print("Uso da CPU: ")
    print(psutil.cpu_percent(interval=0),'%')

    #cursor.execute("INSERT INTO registro values (null, 1, 2, %s, now())", (psutil.cpu_percent(interval=0)))


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

        #cursor.execute("INSERT INTO registro values (null, 1, 3, %s, now())", ('{:.2f}'.format(percentage_disk)))

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

        #cursor.execute("INSERT INTO registro values (null, 1, 3, %s, now())", ('{:.2f}'.format(percentage_disk)))

    sleep(3)

    # Aqui é onde realizamos o commit das informações no banco de dados, que seria fechar o pacote para envio
    #cursor.fetchall()
    #conexao.commit()
    #conexao.close() 